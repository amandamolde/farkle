class Player {
	constructor (name) {
		this.name = name;
		this.handScore = 0;
		this.tempScore = 0;
		this.totalScore = 0;
		this.hand = [];
		this.countOfOnes = 0;
		this.countOfTwos = 0;
		this.countOfThrees = 0;
		this.countOfFours = 0;
		this.countOfFives = 0;
		this.countOfSixes = 0;
	};
	countDieInHand () {
		for (let i = 0; i < this.hand.length; i++) {
			if (this.hand[i] == 1) {
				countOfOnes ++;
			} else if (this.hand[i] == 2) {
				countOfTwos ++;
			} else if (this.hand[i] == 3) {
				countOfThrees ++;
			} else if (this.hand[i] == 4) {
				countOfFours ++;
			} else if (this.hand[i] == 5) {
				countOfFives ++;
			} else if (this.hand[i] == 6) {
				countOfSixes ++;
			};
		};
	};
};

const playerOne = new Player();
const playerTwo = new Player();

const game = {
	activePlayer: playerOne,
	roll = [];
	rollDice (numOfDice) {
		for (let i = 0; i < numOfDice; i++) {
			let randomNumber = Math.floor(Math.random() * numOfDice) + 1;
			this.roll.push(randomNumber);
		};
	};
	displayRoll () {
		$('.roll').empty();
		for (let i = 0; i < this.roll.length; i++) {
			let dieValue = this.roll[i];
			const die = $(`<div class="die rollDie">${dieValue}</div>`);
			$(die).attr("value", `${dieValue}`);
			$('.roll').append(die);
		};
	};
	addOrRemoveDieFromHand () {
		console.log("adding or removing die from hand");
		$('.rollDie').on('click', (e) => {
			let rollIndex = $(e.currentTarget).index('.rollDie');
			let dieRemovedFromRoll = this.roll.splice(rollIndex, 1)[0];
			$(e.currentTarget).removeClass('rollDie').addClass('handDie');
			$(e.currentTarget).detach().appendTo('.currentPlayerHand');
			this.activePlayer.hand.push(dieRemovedFromRoll);
			scoring.scoreHand();
			
			$('.handDie').off('click').on('click', (e) => {
				let handIndex = $(e.currentTarget).index('.handDie');
				let dieRemovedFromHand = this.activePlayer.hand.splice(handIndex, 1)[0];
				$(e.currentTarget).removeClass('handDie').addClass('rollDie');
				$(e.currentTarget).detach().appendTo('.roll');
				this.roll.push(dieRemovedFromHand);
				scoring.scoreHand();
			});
		});
	};
	rollAgain () {
		$('.rollAgain').on('click', (e) => {
			console.log('click');
			player.tempScore += player.handScore;
			console.log(player.tempScore + " is the player.tempScore");
			$('.tempScore').text(`Points this turn (aka tempScore): ${player.tempScore}`);
			player.handScore = 0;
			console.log(player.handScore + " is the handScore");
			$('.pointsInHand').text(`Points from Selected Dice (aka handScore): ${player.handScore}`);
			$('.handDie').remove();
			$('.rollDie').remove();
			this.numOfDice = this.roll.length;
			console.log(this.roll.length);
			this.roll = [];
			rollDice(this.rollLength);
			console.log("roll again");
			// displayRoll(newRoll);
			this.addOrRemoveDieFromHand();
			player.hand = [];
		})
	};
	bankPoints () {
		$('.bankPoints').on('click', (e) => {
			console.log('bankPoints clicked');
			console.log(this.activePlayer);
			this.activePlayer.tempScore += this.activePlayer.handScore;
			this.activePlayer.totalScore += tempScore;
			console.log(playerOne.totalScore + " is playerOne's score");
			console.log(playerTwo.totalScore + " is playerTwo's score");
			tempScore = 0;
			handScore = 0;
			$('.tempScore').text(`Points this turn (aka tempScore): ${tempScore}`);
			$('.pointsInHand').text(`Points from Selected Dice (aka handScore): ${handScore}`);
			checkForWinner();
			switchActivePlayer();
			roll = [];
			currentPlayerHand = [];
			$('.handDie').remove();
			$('.rollDie').remove();
			game.startHand();
		});
	};
	startHand() {
		this.rollDice(6);
		// console.log("Initial Roll in playHand");
		// console.log(roll.length + " is the roll length");
		// console.log(roll + " is the roll at playHand");
		this.displayRoll();
		this.addOrRemoveDieFromHand();
	}; 
};






const bankPoints = () => {
	$('.bankPoints').on('click', (e) => {
		console.log('bankPoints clicked');
		console.log(game.activePlayer);
		tempScore += handScore;
		game.activePlayer.totalScore += tempScore;
		console.log(playerOne.totalScore + " is playerOne's score");
		console.log(playerTwo.totalScore + " is playerTwo's score");
		tempScore = 0;
		handScore = 0;
		$('.tempScore').text(`Points this turn (aka tempScore): ${tempScore}`);
		$('.pointsInHand').text(`Points from Selected Dice (aka handScore): ${handScore}`);
		checkForWinner();
		switchActivePlayer();
		roll = [];
		currentPlayerHand = [];
		$('.handDie').remove();
		$('.rollDie').remove();
		game.startHand();
	});
};

const checkForWinner = () => {
	if (game.activePlayer.totalScore >= 10000) {
		alert("FINAL TURN!!!");
	}
}

const endGame = () => {
	if (checkForWinner()) {

	}
}

const switchActivePlayer = () => {
	if (game.activePlayer == playerOne) {
			$('.playerOneScore').text(`${playerOne.totalScore}`);
			game.activePlayer = playerTwo;
			alert ("It is Player Two's turn");
		} else if (game.activePlayer == playerTwo) {
			$('.playerTwoScore').text(`${playerTwo.totalScore}`);
			game.activePlayer = playerOne;
			alert ("It is Player One's turn");
		};
		console.log(game.activePlayer);
	};








const scoring = {
	scoreOnes () {
		if (player.countOfOnes == 1) {
			player.handScore += 100;
		} else if (player.countOfOnes == 2) {
			player.handScore += 200;
		} else if (player.countOfOnes == 3) {
			player.handScore += 300;
		} else if (player.countOfOnes == 4) {
			player.handScore += 1000;
		} else if (player.countOfOnes == 5) {
			player.handScore += 2000;
		};
	};
	scoreTwos () {
		if (player.countOfTwos == 3) {
			player.handScore += 200;
		};
	};
	scoreThrees () {
		if (player.countOfThrees == 3) {
			player.handScore += 300;
		};
	};
	scoreFours () {
		if (player.countOfFours == 3) {
			player.handScore += 400;
		};
	};
	scoreFives () {
		if (player.countOfFives == 1) {
			player.handScore += 50;
		} else if (player.countOfFives == 2) {
			player.handScore += 100;
		} else if (player.countOfFives == 3) {
			player.handScore += 500;
		} else if (player.countOfFives == 4) {
			player.handScore += 1000;
		} else if (player.countOfFives == 5) {
			player.handScore += 2000;
		};
	};
	scoreSixes () {
		if (player.countOfSixes == 3) {
			player.handScore += 600;
		};
	};
	scoreFourOfAKind () {
		if (player.countOfTwos == 4 || player.countOfThrees == 4 || player.countOfFours == 4 || player.countOfSixes == 4) {
			player.handScore += 1000;
		};
	};
	scoreFiveOfAKind () {
		if (player.countOfTwos == 5 || player.countOfThrees == 5 || player.countOfFours == 5 || player.countOfSixes == 5) {
			player.handScore += 2000;
		};
	};
	scoreSixOfAKind () {
		if (player.countOfOnes == 6 || player.countOfTwos == 6 || player.countOfThrees == 6 || player.countOfFours == 6 || player.countOfFives == 6 || player.countOfSixes == 6) {
			player.handScore += 3000;
		};
	};
	scoreStraight () {
		let straight = [];
		for (let i = 0; i < player.hand.length; i++) {
			let x = player.hand[i];

			if (straight.indexOf(x) === -1) {
				straight.push(x);
			};
		};
		if (straight.length == 6) {
			player.handScore += 1500;
		};
	};
	scoreThreePairs () {
		currentPlayerHand.sort(function(a,b){
			return a - b;
		});
		if (player.hand.length == 6 && (player.hand[0] == player.hand[1]) && (player.hand[2] == player.hand[3]) && (player.hand[4] == player.hand[5]) && (player.hand[0] != player.hand[5])) {
			player.handScore += 1500;
		};
	};
	scoreTwoTriplets () {
		currentPlayerHand.sort(function(a,b){
			return a - b;
		});
		if (player.hand.length == 6 && (player.hand[0] == player.hand[1]) && (player.hand[0] == player.hand[2]) && (player.hand[3] == player.hand[4]) && (player.hand[3] == player.hand[5]) && (player.hand[2] != player.hand[3])) {
			player.handScore += 2500;
		};
	};
	scoreHand () {
		console.log(player.handScore + " is the handScore at the beg of scoreHand");
		console.log(player.hand + " is the player.hand at scoreHand");
		player.countDieInHand();
		player.handScore = 0;
		console.log(player.handScore + " is the player.handScore after being reset in scoreHand");
		let length = player.hand.length;
		switch (length) {
			case 1:
				scoreOnes();
				scoreFives();
				break;
			case 2:
				scoreOnes();
				scoreFives();
				break;
			case 3:
				scoreOnes();
				scoreTwos();
				scoreThrees();
				scoreFours();
				scoreFives();
				scoreSixes();
				break;
			case 4:
				scoreFourOfAKind();
				scoreOnes();
				scoreTwos();
				scoreThrees();
				scoreFours();
				scoreFives();
				scoreSixes();
				break;
			case 5:
				scoreFiveOfAKind();
				scoreFourOfAKind();
				scoreOnes();
				scoreTwos();
				scoreThrees();
				scoreFours();
				scoreFives();
				scoreSixes();
				break;
			case 6:
				scoreSixOfAKind();
				scoreStraight();
				scoreThreePairs();
				scoreTwoTriplets();
				break;
		};
		console.log(player.handScore + " is the player.handScore at the end of scoreHand");
		$('.pointsInHand').text(`Points from Selected Dice: ${player.handScore}`);
	};
};





game.startHand();
bankPoints();
rollAgain();
// checkForWinner();
// bankPoints();


