var targetScore = 0;
var yourScore = 0;
var crystal1Score = 0;
var crystal2Score = 0;
var crystal3Score = 0;
var crystal4Score = 0;
var wins = 0;
var losses = 0;

function gameReset() {
	crystal1Score = Math.floor((Math.random() * 11) + 1);
	crystal2Score = Math.floor((Math.random() * 11) + 1);
	crystal3Score = Math.floor((Math.random() * 11) + 1);
	crystal4Score = Math.floor((Math.random() * 11) + 1);
}

function startGame () {
	targetScore = Math.floor((Math.random() * 101) +19);
	$("#matchNumber").text("Number to Match: " + targetScore);
	console.log("Number To Match: " + targetScore);

	yourScore = 0;
	$("#yourScore").text("Your Number: " + yourScore);
	
	gameReset();
} 

function crystal(score) {
	yourScore += score;
	$("#yourScore").text("Your Number: " + yourScore);
	if (yourScore < targetScore) 
	{

	} else if (yourScore == targetScore) {
	alert("Yay, you won!");
	wins ++;
	$("#wins").text("Wins: " + wins);
	startGame();

	} else if (yourScore > targetScore) {
	alert("Sorry, you lost.");
	losses ++;
	$("#losses").text("Losses: " + losses);
	startGame();
	}
}

$(document).ready(function() {
	startGame();

	$("#crystal1").on("click", function() {
	crystal(crystal1Score);
	console.log("Crystal 1 Value: " + crystal1Score)
	});

	$("#crystal2").on("click", function() {
	crystal(crystal2Score);
	console.log("Crystal 2 Value: " + crystal2Score)
	});

	$("#crystal3").on("click", function() {
	crystal(crystal3Score);
	console.log("Crystal 3 Value: " + crystal3Score)
	});

	$("#crystal4").on("click", function() {
	crystal(crystal4Score);
	console.log("Crystal 4 Value: " + crystal4Score)
	});
});


