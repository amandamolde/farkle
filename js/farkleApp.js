// let activePlayer = playerOne;

let roll = [];
let currentPlayerHand = [];
let handScore = 0;
let countOfOnes = 0;
let countOfTwos = 0;
let countOfThrees = 0;
let countOfFours = 0;
let countOfFives = 0;
let countOfSixes = 0;



class Player {
	constructor (name, hand, handScore, tempScore, totalScore) {
		this.name = name;
		this.handScore = handScore;
		this.tempScore = tempScore;
		this.totalScore = totalScore;
	};
};

const playerOne = new Player();
const playerTwo = new Player();

const game = {
	activePlayer: playerOne,
	playHand() {
		rollDice();
		displayRoll();
		addOrRemoveDieFromHand();
		countDieInHand();
		scoreHand();
	} 
}

const rollDice = () => {
	// for (let i = 0; i < 6; i++) {
	// 	let randomNumber = Math.floor(Math.random() * 6) + 1;
	// 	roll.push(randomNumber);
	// };
	roll = [6,6,6,6,6,6]
};

const displayRoll = () => {
	for (let i = 0; i < roll.length; i++) {
		let dieValue = roll[i];
		const die = $(`<div class="die rollDie">${dieValue}</div>`);
		$(die).attr("value", `${dieValue}`);
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
	console.log("CHECKING FOR SIX OF A KIND")
	console.log(countOfSixes)
	if (countOfOnes == 6 || countOfTwos == 6 || countOfThrees == 6 || countOfFours == 6 || countOfFives == 6 || countOfSixes == 6) {
		console.log("HOORAY SIX OF A KIND")
		handScore += 3000;
		console.log(`HAND SCORE IS NOW ${handScore}`)
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
	console.log("SCORING HAND")
	console.log(currentPlayerHand)
	handScore = 0;
	let length = currentPlayerHand.length;
	switch (length) {
		case 1:
			scoreOnes(currentPlayerHand);
			console.log('case 1')
			scoreFives();
			console.log('case 1b')
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
			scoreFives();
			break;
		case 5:
			scoreFiveOfAKind();
			scoreOnes();
			scoreFives();
			break;
		case 6:
			scoreSixOfAKind();
			scoreStraight();
			scoreThreePairs();
			scoreTwoTriplets();
			break;
	};
	$('.pointsInHand').text(`Points from Selected Dice: ${handScore}`);
};

// const scoring = {
// 	1: function() {
// 		scoreOnes();
// 		scoreFives();
// 	}
// }

// // const scoreHand = scoring[1];
// // scoreHand();




game.playHand();


