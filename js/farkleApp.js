let roll = [];
let currentPlayerHand = [];
let handScore = 0;
let tempScore = 0;
let countOfOnes = 0;
let countOfTwos = 0;
let countOfThrees = 0;
let countOfFours = 0;
let countOfFives = 0;
let countOfSixes = 0;
let rollCounter = 0;
let finalTurn = false;
$('.rollAgain').hide();
$('.bankPoints').hide();



class Player {
	constructor (name) {
		this.name = name;
		this.totalScore = 0;
	};
};

const playerOne = new Player();
const playerTwo = new Player();

playerOne.totalScore = 9900;

const game = {
	activePlayer: playerOne,
	playTurn() {
		startTurn();
		rollAgain();
		bankPoints();
	} 
};

const rollDice = (numOfDice) => {
	for (let i = 0; i < numOfDice; i++) {
		let randomNumber = Math.floor(Math.random() * 6) + 1;
		roll.push(randomNumber);
	};
	rollCounter ++;
	console.log(rollCounter + " is the rollCounter after rollDice");
};

const displayRoll = () => {
	console.log('display roll')
	$('.roll').empty();
	for (let i = 0; i < roll.length; i++) {
		let dieValue = roll[i];
		const die = $(`<div class="die rollDie">${dieValue}</div>`);
		$(die).attr("value", `${dieValue}`);
		$('.roll').append(die);
	};
};

const addOrRemoveDieFromHand = () => {
	console.log("adding or removing die from hand");
	$('.rollDie').on('click', (e) => {
		let rollIndex = $(e.currentTarget).index('.rollDie');
		let dieRemovedFromRoll = roll.splice(rollIndex, 1)[0];
		$(e.currentTarget).removeClass('rollDie').addClass('handDie');
		$(e.currentTarget).detach().appendTo('.currentPlayerHand');
		currentPlayerHand.push(dieRemovedFromRoll);
		scoreHand();
		
		$('.handDie').off('click').on('click', (e) => {
			let handIndex = $(e.currentTarget).index('.handDie');
			let dieRemovedFromHand = currentPlayerHand.splice(handIndex, 1)[0];
			$(e.currentTarget).removeClass('handDie').addClass('rollDie');
			$(e.currentTarget).detach().appendTo('.roll');
			roll.push(dieRemovedFromHand);
			scoreHand();
		});
	});
};


const countDieInHand = () => {
	countOfOnes = 0;
	countOfTwos = 0;
	countOfThrees = 0;
	countOfFours = 0;
	countOfFives = 0;
	countOfSixes = 0;
	for (let i = 0; i < currentPlayerHand.length; i++) {
		if (currentPlayerHand[i] == 1) {
			countOfOnes ++;
		} else if (currentPlayerHand[i] == 2) {
			countOfTwos ++;
		} else if (currentPlayerHand[i] == 3) {
			countOfThrees ++;
		} else if (currentPlayerHand[i] == 4) {
			countOfFours ++;
		} else if (currentPlayerHand[i] == 5) {
			countOfFives ++;
		} else if (currentPlayerHand[i] == 6) {
			countOfSixes ++;
		}
	};
};


const scoreOnes = () => {
	if (countOfOnes == 1) {
		handScore += 100;
	} else if (countOfOnes == 2) {
		handScore += 200;
	} else if (countOfOnes == 3) {
		handScore += 300;
	} else if (countOfOnes == 4) {
		handScore += 1000;
	} else if (countOfOnes == 5) {
		handScore += 2000;
	};
};

const scoreTwos = () => {
	if (countOfTwos == 3) {
		handScore += 200;
	};
};

const scoreThrees = () => {
	if (countOfThrees == 3) {
		handScore += 300;
	};
};

const scoreFours = () => {
	if (countOfFours == 3) {
		handScore += 400;
	};
};

const scoreFives = () => {
	if (countOfFives == 1) {
		handScore += 50;
	} else if (countOfFives == 2) {
		handScore += 100;
	} else if (countOfFives == 3) {
		handScore += 500;
	} else if (countOfFives == 4) {
		handScore += 1000;
	} else if (countOfFives == 5) {
		handScore += 2000;
	};
};

const scoreSixes = () => {
	if (countOfSixes == 3) {
		handScore += 600;
	};
};

const scoreFourOfAKind = () => {
	if (countOfTwos == 4 || countOfThrees == 4 || countOfFours == 4 || countOfSixes == 4) {
		handScore += 1000;
	};
};

const scoreFiveOfAKind = () => {
	if (countOfTwos == 5 || countOfThrees == 5 || countOfFours == 5 || countOfSixes == 5) {
		handScore += 2000;
	};
};

const scoreSixOfAKind = () => {
	if (countOfOnes == 6 || countOfTwos == 6 || countOfThrees == 6 || countOfFours == 6 || countOfFives == 6 || countOfSixes == 6) {
		handScore += 3000;
	};
};

const scoreStraight = () => {
	let straight = [];
	for (let i = 0; i < currentPlayerHand.length; i++) {
		let x = currentPlayerHand[i];

		if (straight.indexOf(x) === -1) {
			straight.push(x);
		};
	};
	if (straight.length == 6) {
		handScore += 1500;
	};
};

const scoreThreePairs = () => {
	currentPlayerHand.sort(function(a,b){
		return a - b;
	});
	if (currentPlayerHand.length == 6 && (currentPlayerHand[0] == currentPlayerHand[1]) && (currentPlayerHand[2] == currentPlayerHand[3]) && (currentPlayerHand[4] == currentPlayerHand[5]) && (currentPlayerHand[0] != currentPlayerHand[5])) {
		handScore += 1500;
	};
};

const scoreTwoTriplets = () => {
	currentPlayerHand.sort(function(a,b){
		return a - b;
	});
	if (currentPlayerHand.length == 6 && (currentPlayerHand[0] == currentPlayerHand [1]) && (currentPlayerHand[0] == currentPlayerHand[2]) && (currentPlayerHand[3] == currentPlayerHand[4]) && (currentPlayerHand[3] == currentPlayerHand[5]) && (currentPlayerHand[2] != currentPlayerHand[3])) {
		handScore += 2500;
	};
};

const scoreHand = () => {
	console.log(handScore + " is the handScore at the beg of scoreHand");
	console.log(currentPlayerHand + " is the currentPlayerHand at scoreHand");
	countDieInHand();
	handScore = 0;
	console.log(handScore + " is the handScore after being reset in scoreHand");
	let length = currentPlayerHand.length;
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
	console.log(handScore + " is the handScore at the end of scoreHand");
	$('.pointsInHand').text(`Points from Selected Dice: ${handScore}`);
};

const rollAgain = () => {
	$('.rollAgain').off().on('click', (e) => {
		if (!finalTurn) {
			if (rollCounter != 0 && handScore == 0) {
				console.log("FARKLE on ROLL AGAIN");
				alert("Farkle!!!");
				switchActivePlayer();
				displayScores();
				clearRoll();
				$('.startTurn').show();
				$('.rollAgain').hide();
				$('.bankPoints').hide();
				game.playTurn();
			} else {
				console.log("FARKLE on roll again is not true");
				tempScore += handScore;
				console.log(handScore + " is the handScore at rollAgain before reset");
				handScore = 0;
				console.log(handScore + " is the handScore at rollAgain after reset");
				displayScores();
				numOfDice = roll.length;
				clearRoll();
				rollDice(numOfDice);
				displayRoll();
				addOrRemoveDieFromHand();
			};
		} else {
			if(rollCounter != 0 && handScore ==0) {
				console.log("FARKLE ON ROLL AGAIN LAST TURN");
				alert("Farkle on last turn when you tried to roll again!!!");
				showWinner();
			} else {
				console.log("FARKLE on roll again is not true");
				tempScore += handScore;
				console.log(handScore + " is the handScore at rollAgain before reset");
				handScore = 0;
				console.log(handScore + " is the handScore at rollAgain after reset");
				displayScores();
				numOfDice = roll.length;
				clearRoll();
				rollDice(numOfDice);
				displayRoll();
				addOrRemoveDieFromHand();
			};
		};
	});
};

const bankPoints = () => {
	$('.bankPoints').off().on('click', (e) => {
		if (!finalTurn) {
			if (rollCounter != 0 && handScore == 0) {
				console.log("FARKLE ON BANK POINTS");
				alert("Farkle!!!");
				switchActivePlayer();
				displayScores();
				clearRoll();
				$('.startTurn').show();
				$('.rollAgain').hide();
				$('.bankPoints').hide();
				game.playTurn();
			} else {
				console.log("check for farkle on bankpoints is not true");
				tempScore += handScore;
				game.activePlayer.totalScore += tempScore;
				handScore = 0;
				if (game.activePlayer.totalScore >= 10000) {
					alert("FINAL TURN!");
					finalTurn = true;
					switchActivePlayer();
					displayScores();
					clearRoll();
					$('.startTurn').show();
					$('.rollAgain').hide();
					$('.bankPoints').hide();
					game.playTurn();
				} else {
					switchActivePlayer();
					displayScores();
					clearRoll();
					$('.startTurn').show();
					$('.rollAgain').hide();
					$('.bankPoints').hide();
					game.playTurn();
				};
			};
		} else {
			if (rollCounter != 0 && handScore == 0) {
				console.log("FARKLE ON BANKPOINTS LAST TURN");
				alert("Farkle on last turn!!!");
				showWinner();
			} else {
				showWinner();
			};
		};
	});
};

const switchActivePlayer = () => {
	if (game.activePlayer == playerOne) {
		$('.playerOneScore').text(`${playerOne.totalScore}`);
		$('.playerOneName').removeClass('highlight');
		game.activePlayer = playerTwo;
		$('.playerTwoName').addClass('highlight');
		alert ("It is Player Two's turn");
		rollCounter = 0;
		tempScore = 0;
		console.log(rollCounter + " is the rollCounter at switchActivePlayer to player2");
	} else if (game.activePlayer == playerTwo) {
		$('.playerTwoScore').text(`${playerTwo.totalScore}`);
		$('.playerTwoName').removeClass('highlight');
		game.activePlayer = playerOne;
		$('.playerOneName').addClass('highlight');
		alert ("It is Player One's turn");
		rollCounter = 0;
		tempScore = 0;
		console.log(rollCounter + " is the rollCounter at switchActivePlayer to player1");
	};
};

const displayScores = () => {
	$('.tempScore').text(`Points this turn (aka tempScore): ${tempScore}`);
	$('.pointsInHand').text(`Points from Selected Dice (aka handScore): ${handScore}`);
};

const clearRoll = () => {
	roll = [];
	currentPlayerHand = [];
	$('.handDie').remove();
	$('.rollDie').remove();
};

const startTurn = () =>{
	$('.startTurn').off().on('click', (e) => {
		console.log("BUTTON CLICKED!!!!");
		console.log(rollCounter + " is the initial rollCounter");
		$('.startTurn').hide();
		$('.rollAgain').show();
		$('.bankPoints').show();
		rollDice(6);
		displayRoll();
		addOrRemoveDieFromHand();
	});
};

game.playTurn();


