"use strict";

$(document).ready(function(){
	(function(){
		var game = {
			moles: $('.mole'),
			score: 0,
			level: 1,
			timer: 5,
			interval: '',
			
			//Function to initiate the game start function. 
			init: function(){
				game.gameStart();
			},

			// Function to add event listener to start button and call 
			// function to initiate interval and random hole choice.
			gameStart: function(){
				$(".start").click(function(){
					game.showMole();
				});
			},

			// select random hole using math.random.
			getRandomHole: function(){
				return Math.floor(Math.random()*9);
			},

			// Highlights the random hole that was chosen from 
			// getRandomHole function.
			showMole: function(){
				// console.log("show mole")
				$(game.moles[game.getRandomHole()])
					.addId("appear");
					// THIS PART IS NOT WORKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			},

			// designates what happens when user clicks.
			userClickEvent: function(){

			},
			// adds the score for the player
			addScore: function(){
				this.score++;
				// change html to reflect new score.
			},

			levelUp: function(){

			}
		};
		game.init();
	})();
});