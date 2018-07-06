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
$('.playAgain').hide();
$('.liveScores').hide();

class Player {
	constructor (name) {
		this.name = name;
		this.totalScore = 0;
	};
};

const playerOne = new Player();
const playerTwo = new Player();

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
};

const displayRoll = () => {
	$('.roll').empty();
	for (let i = 0; i < roll.length; i++) {
		let dieValue = roll[i];
		const die = $(`<div class="die rollDie"></div>`);
		$(die).attr("value", `${dieValue}`);

		let faceImage = '';

		if(dieValue == 1) {
			faceImage = 'images/die_face_1_T.png';
		} else if (dieValue == 2) {
			faceImage = 'images/die_face_2_T.png';
		} else if (dieValue == 3) {
			faceImage = 'images/die_face_3_T.png';
		} else if (dieValue == 4) {
			faceImage = 'images/die_face_4_T.png';
		} else if (dieValue == 5) {
			faceImage = 'images/die_face_5_T.png';
		} else if (dieValue == 6) {
			faceImage = 'images/die_face_6_T.png';
		};


		$(die).append(`<img src='${faceImage}'>`);

		$('.roll').append(die);
	};
};

const addOrRemoveDieFromHand = () => {
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
	countDieInHand();
	handScore = 0;
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
	$('.pointsInHand').text(`${handScore}`);
};

const rollAgain = () => {
	$('.rollAgain').off().on('click', (e) => {
		if (!finalTurn) {
			if (rollCounter != 0 && handScore == 0) {
				$('.messages').append("<p>FARKLE</p>");
				switchActivePlayer();
				displayScores();
				clearRoll();
				$('.startTurn').show();
				$('.rollAgain').hide();
				$('.bankPoints').hide();
				$('.liveScores').hide();
				game.playTurn();
			} else {
				tempScore += handScore;
				handScore = 0;
				displayScores();
				numOfDice = roll.length;
				clearRoll();
				rollDice(numOfDice);
				displayRoll();
				addOrRemoveDieFromHand();
			};
		} else {
			if(rollCounter != 0 && handScore ==0) {
				$('.messages').append("<p>FARKLE</p>");
				showWinner();
			} else {
				tempScore += handScore;
				handScore = 0;
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
				$('.messages').append("<p>FARKLE</p>");
				switchActivePlayer();
				displayScores();
				clearRoll();
				$('.startTurn').show();
				$('.rollAgain').hide();
				$('.bankPoints').hide();
				$('.liveScores').hide();
				game.playTurn();
			} else {
				tempScore += handScore;
				game.activePlayer.totalScore += tempScore;
				handScore = 0;
				if (game.activePlayer.totalScore >= 10000) {
					$('.messages').append("<p>FINAL TURN!</p>");
					finalTurn = true;
					switchActivePlayer();
					displayScores();
					clearRoll();
					$('.startTurn').show();
					$('.rollAgain').hide();
					$('.bankPoints').hide();
					$('.liveScores').hide();
					game.playTurn();
				} else {
					switchActivePlayer();
					displayScores();
					clearRoll();
					$('.startTurn').show();
					$('.rollAgain').hide();
					$('.bankPoints').hide();
					$('.liveScores').hide();
					game.playTurn();
				};
			};
		} else {
			if (rollCounter != 0 && handScore == 0) {
				$('.messages').append("<p>FARKLE</p>");
				showWinner();
			} else {
				tempScore += handScore;
				game.activePlayer.totalScore += tempScore;
				if (game.activePlayer == playerOne) {
					$('.playerOneScore').text(`${playerOne.totalScore}`);
				} else if (game.activePlayer == playerTwo) {
					$('.playerTwoScore').text(`${playerTwo.totalScore}`);
				};
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
		$('.messages').append("<p>It is Player Two's turn</p>");
		rollCounter = 0;
		tempScore = 0;
	} else if (game.activePlayer == playerTwo) {
		$('.playerTwoScore').text(`${playerTwo.totalScore}`);
		$('.playerTwoName').removeClass('highlight');
		game.activePlayer = playerOne;
		$('.playerOneName').addClass('highlight');
		$('.messages').append("<p>It is Player One's turn</p>");
		rollCounter = 0;
		tempScore = 0;
	};
};

const displayScores = () => {
	$('.tempScore').text(`${tempScore}`);
	$('.pointsInHand').text(`${handScore}`);
};

const clearRoll = () => {
	roll = [];
	currentPlayerHand = [];
	$('.handDie').remove();
	$('.rollDie').remove();
};

const startTurn = () =>{
	$('.startTurn').off().on('click', (e) => {
		$('.messages').empty();
		$('.startTurn').hide();
		$('.rollAgain').show();
		$('.bankPoints').show();
		$('.liveScores').show();
		rollDice(6);
		displayRoll();
		addOrRemoveDieFromHand();
	});
};

const showWinner = () => {
	if (playerOne.totalScore > playerTwo.totalScore) {
		$('.messages').append('<p>PLAYER ONE IS THE WINNER!!!</p>');
		$('.rollAgain').hide();
		$('.bankPoints').hide();
		$('.liveScores').hide();
		$('.playAgain').show();
	} else {
		$('.messages').append('<p>PLAYER TWO IS THE WINNER!!!</p>');
		$('.rollAgain').hide();
		$('.bankPoints').hide();
		$('.liveScores').hide();
		$('.playAgain').show();
	}
};

$('.playAgain').on('click', (e) => {
	location.reload();
});

game.playTurn();


