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
		currentPlayer.hand.push(dieRemovedFromRoll);
		
		$('.handDie').off('click').on('click', (e) => {
			let handIndex = $(e.currentTarget).index('.handDie');
			let dieRemovedFromHand = currentPlayer.hand.splice(handIndex, 1)[0];
			$(e.currentTarget).removeClass('handDie').addClass('rollDie');
			$(e.currentTarget).detach().appendTo('.roll');
			roll.push(dieRemovedFromHand);
		});
	});
};




rollDice();
displayRoll();
addOrRemoveDieFromHand();
