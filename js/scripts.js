$(document).ready(function(){
	/**
	* Food Diary Custom JQuery functions.
	*/
    $('a[href="#today"]').click(function () {
      	$("div#today").show();
      	$("div#journal").hide();
      	$("div#food-report").hide();
    });
    $('a[href="#journal"]').click(function () {
      	$("div#today").hide();
	    $("div#journal").show();
      	$("div#food-report").hide();
    });
    $('a[href="#report"]').click(function () {
      	$("div#today").hide();
	    $("div#journal").hide();
      	$("div#food-report").show();
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
    	$('label#bf-label').css('display','block');
    	},
    	function () {
    	$('label#bf-label').css('display','none');
    });

    /* Hover on Breakfast */
    $('a > div#lunchmeal').hover(
    	function () {
    	$('label#lunch-label').css('display','block');
    	},
    	function () {
    	$('label#lunch-label').css('display','none');
    });

    /* Hover on Breakfast */
    $('a > div#dinnermeal').hover(
    	function () {
    	$('label#dinner-label').css('display','block');
    	},
    	function () {
    	$('label#dinner-label').css('display','none');
    });

    /* Hover on Breakfast */
    $('a > div#snackmeal').hover(
    	function () {
    	$('label#snack-label').css('display','block');
    	},
    	function () {
    	$('label#snack-label').css('display','none');
    });


}); 