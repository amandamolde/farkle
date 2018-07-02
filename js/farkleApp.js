let roll = [];

class Player {
	constructor (name, hand, handScore, tempScore, totalScore) {
		this.name = name;
		this.hand = [];
		this.handScore = handScore;
		this.tempScore = tempScore;
		this.totalScore = totalScore;
	};
};

const currentPlayer = new Player();

const rollDice = () => {
	for (let i = 0; i < 6; i++) {
		let randomNumber = Math.floor(Math.random() * 6) + 1;
		roll.push(randomNumber);
	};
};

const displayRoll = () => {
	// console.log(roll);
	for (let i = 0; i < roll.length; i++) {
		let dieValue = roll[i];
		// console.log(dieValue);
		const die = $(`<div class="die rollDie">${dieValue}</div>`);
		$(die).attr("value", `${dieValue}`);
		// $('.roll').empty();
		$('.roll').append(die);
	};
};

const addDieToHand = () => {
	$('.rollDie').on('click', (e) => {
		console.log(e.currentTarget);
		console.log('clicked!')
		// $(e.currentTarget).css("background-color", "gray");
		let rollIndex = $(e.currentTarget).index('.rollDie');
		console.log(rollIndex);
		let removedDie = roll.splice(rollIndex, 1)[0];
		$(e.currentTarget).detach().appendTo('.currentPlayerHand');
		console.log(roll + ' is the roll');
		console.log(removedDie + ' is the removedDie');
		currentPlayer.hand.push(removedDie);
		console.log(currentPlayer.hand + ' is the playerHand');
	});
};



rollDice();
displayRoll();
addDieToHand();

