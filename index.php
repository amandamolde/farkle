<!DOCTYPE html>
<html>
<head>
	<title>Farkle</title>

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<!-- Bootstrap Theme CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

	<!-- My Custom CSS -->
	<link rel="stylesheet" type="text/css" href="css/farkleStyle.css">
	
</head>
<body>
	<div class="container">

		<div class="row mt-10">
			<div class="col-xs-4">
				<h3 class="playerOneName highlight">Player 1</h3>
				<h3 class="playerOneScore">0</h3>
			</div>
			<div class="col-xs-4">
				<img class="header" src="images/header_white_font.png">
			</div>
			<div class="col-xs-4">
				<h3 class="playerTwoName">Player 2</h3>
				<h3 class="playerTwoScore">0</h3>
			</div>
		</div>

		<div class="row mt-10">
			<div class="col-xs-12">
				<div class="roll">
				</div>
			</div>
		</div>

		<div class="row mt-10">
			<div class="col-xs-12">
				<div class="currentPlayerHand">
				</div>
			</div>
		</div>

		<div class="row mt-10">
			<div class="col-xs-12">
				<div class="messages">
					<p>Click Start Turn to Begin</p>
				</div>
			</div>
		</div>

<!-- 		<div class="row">
			<div class="col-xs-3">
				<h3>Hand:</h3>
			</div>
			<div class="col-xs-3">
				<h3 class="pointsInHand">0</h3>
			</div>
			<div class="col-xs-3">
				<h4>Turn:</h4>
			</div>
			<div class="col-xs-3">
				<h3 class="tempScore">0</h3>
			</div>
		</div> -->

		<div class="row mt-10">
			<div class="col-xs-12">
				<button class="btn btn-danger startTurn">Start Turn</button>
			</div>
		</div>

		<div class="row mt-10">
			<div class="col-xs-12">
				<button class="btn btn-danger playAgain">Play Again?</button>
			</div>
		</div>

		<div class="row mt-10">
			<div class="col-xs-4">
				<button class="btn btn-danger rollAgain">Roll Again</button>
			</div>
			<div class="col-xs-4 liveScores">
				<div class="row">
					<div class="col-xs-6">
						<h5>Hand:</h5>
					</div>
					<div class="col-xs-6">
						<h5 class="pointsInHand">0</h5>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-6">
						<h5>Turn:</h5>
					</div>
					<div class="col-xs-6">
						<h5 class="tempScore">0</h5>
					</div>
				</div>
			</div>
			<div class="col-xs-4">
				<button class="btn btn-danger bankPoints">Bank Points</button>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-12">
				<h3>Instructions:</h3>
				<p>Roll dice for points! You will start a turn with 6 dice, remove any scoring dice you want to use for points, and re-roll the remaining dice. If you roll no scoring dice, you have rolled a Farkle and your turn is over. When a player reaches 10,000 points, the other player will get one last turn to try to beat them.</p>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-12">
				<h3>Scoring:</h3>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-6">
				<p>Fives - 50 pts each</p>
				<p>Ones - 100 pts each</p>
				<br>
				<p>3 OF A KIND</p>
				<p>3 Ones - 300 pts, otherwise:</p>
				<p>100 pts times the die rolled</p>
				<p>(for example 3 Fives = 500 pts)</p>
			</div>
			<div class="col-xs-6">
				<p>4 OF A KIND - 1000 pts</p>
				<p>5 OF A KIND - 2000 pts</p>
				<p>6 OF A KIND - 3000 pts</p>
				<br>
				<p>STRAIGHT - 1500 pts</p>
				<p>THREE PAIRS - 1500 pts</p>
				<p>TWO TRIPLETS - 2500 pts</p>
			</div>
		</div>
				
				

				
				
				
				
				
				
			</div>
		</div>

	</div>

	<!-- jQuery Script -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>

	<!-- Bootstrap Script -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

	<!-- My Custom Script -->
	<script type="text/javascript" src="js/farkleApp.js"></script>

</body>
</html>