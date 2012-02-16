var states = {
	intro:{
		start: function(){
			jQuery("#btnstart")
				.click(states.intro.end);
		},
		end: function(){
			window.location = "game.html";
		}
	},
	
	round1:{
		start: function(){
			setTimeout(function(){
				jQuery(".yours")
					.addClass("revealed");
			}, 500);
			
			jQuery(".card.yours ul")
				.click(states.round1.end);
		},
		
		end: function(){
			jQuery(".theirs")
				.addClass("revealed");
				
			jQuery(".card li.chosen")
				.addClass("selected");
				
			setTimeout(function(){
				alert("You won!")
			}, 1000);
			
		}
	}
};

/////

var state = jQuery("body").attr("class");

states[state].start();