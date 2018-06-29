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
		let dieValue = roll[i];
		console.log(dieValue);
		const die = $(`<div class="die">${dieValue}</div>`);
		$(die).attr("value", `${dieValue}`);
		$('.roll').append(die);

	}
}

const addDieToHand = () => {
	$('.die').on('click', (e) => {
		console.log(e.currentTarget);
		console.log('clicked!')
		console.log(e.currentTarget.text());
	})
}



rollDice();
displayRoll();
addDieToHand();

