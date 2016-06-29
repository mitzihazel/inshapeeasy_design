$(document).ready(function(){

	/**
	* Food Diary Custom JQuery functions.
	*/
    $('a[href="#todays"]').click(function () {
      	$("div#today").show();
      	$("div#journal").hide();
      	$("div#food-report").hide();
        $("div#goals").hide();
    });
    $('a[href="#journals"]').click(function () {
      	$("div#today").hide();
	    $("div#journal").show();
      	$("div#food-report").hide();
        $("div#goals").hide();
    });
    $('a[href="#reports"]').click(function () {
      	$("div#today").hide();
	    $("div#journal").hide();
      	$("div#food-report").show();
        $("div#goals").hide();
    });
    $('a[href="#goal"]').click(function () {
        $("div#today").hide();
        $("div#journal").hide();
        $("div#food-report").hide();
        $("div#goals").show();
    });


    /**
    * Functions for Panel heading.
    */

    $('.panel-heading > .panel-title > a').click(function () {
    	$('.panel-heading').toggleClass("active");
    });


    /* Hover on Breakfast */
    $('a > div#breakmeal').hover(
    	function () {
    	$('label#bf-label').css({ display: 'block', cursor: 'pointer' });
    	},
    	function () {
    	$('label#bf-label').css('display','none');
    });

    /* Hover on Breakfast */
    $('a > div#lunchmeal').hover(
    	function () {
    	$('label#lunch-label').css({ display: 'block', cursor: 'pointer' });
    	},
    	function () {
    	$('label#lunch-label').css('display','none');
    });

    /* Hover on Breakfast */
    $('a > div#dinnermeal').hover(
    	function () {
    	$('label#dinner-label').css({ display: 'block', cursor: 'pointer' });
    	},
    	function () {
    	$('label#dinner-label').css('display','none');
    });

    /* Hover on Breakfast */
    $('a > div#snackmeal').hover(
    	function () {
    	$('label#snack-label').css({ display: 'block', cursor: 'pointer' });
    	},
    	function () {
    	$('label#snack-label').css('display','none');
    });

    /**
    * JQuery Script for the Food Diary, when adding a new nutrient for the goal.
    */
    $("a.nut-choices").click(function(e) {
        var nutrient_name = $(this).attr('name');
        var text_input = $('form#goal-form input[type=text]');
        $('<div class="form-group"><label for="'+nutrient_name+'">'+nutrient_name+'</label><input type="text" class="form-control" id="'+nutrient_name+'"></div>').insertAfter('form#goal-form input[type=text]:eq('+(text_input.length - 1)+')').focus();
        e.preventDefault();

    });

    /**
    * Reloading the chart when slided to the next date in Food Diary Journal.
    

    $(".my-slider > ul > li").click(function(b) {
         $("canvas#journal-items" ).remove();  
        /* $(".my-slider > ul > li > .well").append('<canvas id="journal-items" width="200" height="200"></canvas>');
        $('<canvas id="journal-items" width="200" height="200"></canvas>').appendTo('.my-slider > ul > li.unslider-active > .well > .journal-info');
    });
    */

    $(".my-slider > ul > li.unslider-active").click(function(b) {
        $("canvas#journal-items" ).remove();
        $('<canvas id="journal-items" width="200" height="200"></canvas>').appendTo('.my-slider > ul > li.unslider-active > .well > .journal-info');
    });
}); 