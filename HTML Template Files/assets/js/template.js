// JavaScript Document

(function($) {
    "use strict";
	
	// init Isotope
	var $grid = $('.grid').isotope({
		// options
	});
	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
	
		//navigation Scroll 300px
	$(window).on('scroll', function() {

	var b = $(window).scrollTop();
		
	if( b > 350 ){		
			$(".sticky-navigation").addClass("fixed-top");
		} else {
			$(".sticky-navigation").removeClass("fixed-top");
		}				
		
	});
	
	//Saying page loaded
	$(window).on("load",function(){
		$("body").addClass("loaded");
		$(".preloader").html("");
		$(".preloader").css("display", "none");
	 });

	//Display Scroll Btn on 1000px
	$(window).on("scroll",function() { 
		if($(this).scrollTop() > 1000) { 
			$("#top").fadeIn();
		} else { 
			$("#top").fadeOut();
		}
	});


	//scroll effect
	$("#top").on("click",function () {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});        

	//Moving Top 
	$("#top").on("click",function (event) {
		event.stopPropagation();                
		var idTo = $(this).attr("data-atr");                
		var Position = $("[id='" + idTo + "']").offset();
		$("html, body").animate({ scrollTop: Position }, "slow");
		return false;
	});
	
})(jQuery); //jQuery main function ends strict Mode on

document.querySelectorAll('.videoPreview').forEach(function(vid) {
	vid.onmouseover = function() {
	  this.play();
	}
	vid.onmouseout = function() {
	  this.load(); // stop and show poster
	}
  })

