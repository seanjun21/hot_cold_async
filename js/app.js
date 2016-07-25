
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Run user's guess ---*/
	$("#guessButton").on('click', function(event) {
		event.preventDefault();
		hotOrCold();
	});

	/*--- New game function ---*/
	$(".new").on('click', function(event){
		event.preventDefault();
		newGame();
	});

});

// variables
var guessCount = 0;
var randomNumb = Math.floor((Math.random() * 100) + 1);

// functions
var hotOrCold = function(){

	// user input
	var userNumb = parseInt($('#userGuess').val());

	// for valid guesses
	if ((userNumb >= 1) && (userNumb <= 100) && (userNumb !== NaN)) {

		// # of guesses
		guessCount +=1;
		$("#count").text(guessCount);

		// list of past guesses
		$("#guessList").append('<li>'+userNumb+'<li>')

		// guess feedback
		if (userNumb === randomNumb) {
			$("h2").text("You got it!");
		   }
		// else if (randomNumb - userNumb)
		else if (userNumb < (randomNumb + 5) && userNumb > (randomNumb - 5)) {
		    $("h2").text("You're hot!");
		   }
		else if (userNumb < (randomNumb + 15) && userNumb > (randomNumb - 15)) {
		      $("h2").text("You're warm");
		   }
		else if (userNumb < (randomNumb + 25) && userNumb > (randomNumb - 25)) {
		      $("h2").text("You're cold!");
		   }
		else {
		      $("h2").text("Not even close");
		  }
	  }

	// for invalid guesses
	else {
		alert("Invalid input, please choose an integer between 1 & 100.")
	}

	$("#userGuess").val("");
}

var newGame = function(){
	//reset random number
	randomNumb = Math.floor((Math.random() * 100) + 1);

	// reset guessCount
	guessCount = 0;
	$("#count").text(guessCount);

	// reset feedback
	$("h2").text("Make your Guess!");

	// reset guessList
	$("#guessList").text("");
}
