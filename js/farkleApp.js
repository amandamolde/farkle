let roll = [];

class Player {
	constructor (name, hand, handScore, tempScore, totalScore) {
		this.name = name;
		this.hand = [];
		this.handScore = handScore;
		this.tempScore = tempScore;
		this.totalScore = totalScore;
	}
}



const rollDice = () => {
	for (let i = 0; i < 6; i++) {
		let randomNumber = Math.floor(Math.random() * 6) + 1;
		roll.push(randomNumber);
	}
}

const displayRoll = () => {
	console.log(roll);
	for (let i = 0; i < 6; i++) {
		let die = roll[i];
		console.log(die);
		$('.roll').append(`<div class="die">${die}</div>`);
	}
}

const addDieToHand = () => {
	
}



rollDice();
displayRoll();

