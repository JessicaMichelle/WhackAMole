"use strict";

$(document).ready(function(){
	(function(){
		var game = {
			moles: $('.mole'),
			score: 0,
			timer: 30,
			interval: '',
			
			//Function to initiate the game start function. 
			init: function(){
				game.gameStart();
				game.moles.click(function(){
					game.hideMole();
					game.addScore();
				});

			},

			// Function to add event listener to start button and call 
			// function to initiate interval and random hole choice.
			gameStart: function(){
				$(".start").click(function(){
					game.startInterval();
					game.startTimer();
				});
			},

			// Select random hole using math.random.
			getRandomHole: function(){
				return Math.floor(Math.random()*9);
			},

			// Highlights the random hole that was chosen from 
			// getRandomHole function.
			showMole: function(){
				game.hideMole();
				$(game.moles[game.getRandomHole()])
					.fadeIn(500);
			},

			// Fades out all mole holes.
			hideMole: function(){
				game.moles.fadeOut(500);
			},

			// Sets the interval to keep showing mole.
			startInterval: function(){
				game.interval = setInterval(game.showMole, 1000);
			},

			// Sets the timer interval to begin couting down.
			startTimer: function(){
				setInterval(game.updateTimer, 1000);
			},
				

			// adds the score for the player.
			addScore: function(){
				game.score++;
				$("#score").html(game.score);
			},

			// Determines whether the timer is completed or still counting.
			updateTimer: function(){
				if (game.timer == 0) {
					alert("Your score was: " + game.score);
					clearInterval(game.interval);
				} else if (game.timer > 0) {
					$("#timer").html(game.timer);
				}
				game.timer--;
			}
		};
		game.init();
	})();
});