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
		let dieRemovedFromRoll = roll.splice(rollIndex, 1)[0];
		$(e.currentTarget).removeClass('rollDie').addClass('handDie');
		$(e.currentTarget).detach().appendTo('.currentPlayerHand');
		console.log(roll + ' is the roll');
		console.log(dieRemovedFromRoll + ' is the die removed from the roll');
		currentPlayer.hand.push(dieRemovedFromRoll);
		console.log(currentPlayer.hand + ' is the playerHand');
		$('.handDie').off('click').on('click', (e) => {
			console.log('the hand die has been clicked');
			let handIndex = $(e.currentTarget).index('.handDie');
			console.log(handIndex);
			let dieRemovedFromHand = currentPlayer.hand.splice(handIndex, 1)[0];
			$(e.currentTarget).removeClass('handDie').addClass('rollDie');
			$(e.currentTarget).detach().appendTo('.roll');
			console.log(dieRemovedFromHand + ' is the die removed from the hand');
			roll.push(dieRemovedFromHand);
			console.log(roll + ' is the roll');
			console.log(currentPlayer.hand + ' is the playerHand');
		});
	});
};

// const removeDieFromHand = () => {
// 	$('.handDie').off('click').on('click', (e) => {
// 		console.log(e.currentTarget);
// 		console.log('clicked!')
// 		// $(e.currentTarget).css("background-color", "gray");
// 		let handIndex = $(e.currentTarget).index('.handDie');
// 		console.log(handIndex);
// 		let dieRemovedFromHand = currentPlayerHand.splice(handIndex, 1)[0];
// 		$(e.currentTarget).removeClass('handDie').addClass('rollDie');
// 		$(e.currentTarget).detach().appendTo('.roll');
// 		console.log(roll + ' is the roll');
// 		console.log(dieRemovedFromHand + ' is the die removed from the hand');
// 		roll.push(dieRemovedFromHand);
// 		console.log(currentPlayer.hand + ' is the playerHand');
// 	});
// };



rollDice();
displayRoll();
addDieToHand();
// removeDieFromHand();

