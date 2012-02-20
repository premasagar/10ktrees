/*
	10k trees <http://10ktrees.com>
	by Premasagar Rose <http://premasagar.com> (Dharmafly <http://dharmafly.com>)
*/

(function(){
	"use strict";

	var states = {
		intro:{
			start: function(){
				var next = states.intro.end;
			
				jQuery("#btnstart").on("click", next);
				jQuery("#location").on("change", next);
				jQuery("#start-form").on("submit", next);
			},
			end: function(){
				window.location = "game.html";
				return false;
			}
		},
	
		game:{
			start: function(){
				setTimeout(function(){
					jQuery(".yours").addClass("revealed");
				}, 500);
			
				jQuery(".card.yours ul").one("click", "li", states.game.end);
			},
		
		
			end: function(){
				var yours = jQuery(".yours"),
					theirs = jQuery(".theirs"),
					yourSkill = jQuery(this),
					skillTitle = yourSkill.find(".skill").text(),
					theirSkill = theirs.find(".skill:contains(" + skillTitle + ")").parent(),
					yourRating = Number(yourSkill.find(".rating").text()),
					theirRating = Number(theirSkill.find(".rating").text()),
					instructions = jQuery(".instructions"),
					win = yourRating > theirRating,
					draw = yourRating === theirRating;
				
					yours.addClass("resolved");
					theirs.addClass("revealed");
					yourSkill.addClass("selected");
					theirSkill.addClass("selected");
					
					instructions.text("→ Next round");
					instructions.click(function(){
						alert("Only one round exists in this prototype.")
					});
				
					setTimeout(function(){
						var verb = win ? "won" : (draw ? "drew" : "lost");
						alert("You " + verb + " the round!");
					}, 1000);
			}
		}
	};

	/////
    
    // Preload images
    jQuery("<img src='images/320px-London_plane_flower.jpg'>");
	jQuery("<img src='images/320px-Spitz-Ahorn(mbo).JPG'>");
    jQuery("<img src='images/Greater_london_outline_map_bw.png'>");
    
    // Get state and being
	var state = jQuery("body").attr("class");
	states[state].start();
}());