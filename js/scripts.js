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
        $('<div class="form-group"><label for="'+nutrient_name+'" class="add-on-nutrients">'+nutrient_name+'</label><input type="text" class="form-control" id="'+nutrient_name+'"></div>').insertAfter('form#goal-form input[type=text]:eq('+(text_input.length - 1)+')').focus();
        e.preventDefault();

    });

    

    /**
    * JQuery Design effects when in mobile.
    */


    if (window.matchMedia("(min-width: 1280px)").matches) /* Width for mobile devices */
    {

        /**
        * Collapse tabs when first go tot page.
        */
        $('div#account').addClass('in');
        $('div#conns').addClass('in');
        $('div#calendar1').addClass('collapse in');
        $('div#food-diary').addClass('in');
        $('div#subscription').addClass('in');
        $('div#health').addClass('in');
        
    }

    if (window.matchMedia("(min-width: 360px)").matches) /* Width for mobile devices */
    {
        
        /**
        *    This portion checks whether the panel is opened.
        *    If its opened the tab changes design.
        */

        /*** ----- This function is for the User Account only. ----- ***/
        $("a[href='#account']").click(function(e) {
            if($('div#account').hasClass('in')){
                console.log('boos');
                $('div#user-accordion').css({
                    'width': 'auto',
                    'margin-right': '0px',
                    'margin-left': '0px',
                    'margin-top': '0px',
                    '-webkit-transition': 'width 2s', /* Safari */
                    'transition': 'width 2s',
                    'box-shadow': 'none'
                });
            }
            else {
                console.log('naa syay class na in. so naview ni sya.');

                /* Expand the panel to fit the whole screen in mobile. */
                $('div#user-accordion').css({
                    'width': '360px',
                    'margin-right': '-20px',
                    'margin-left': '-20px',
                    'margin-top': '-20px',
                    '-webkit-transition': 'width 2s', /* Safari */
                    'transition': 'width 2s',
                    'box-shadow': '0px 0px 10px'
                });
            }

            /* ------- Scroll to this --------- */
            $('html, body').animate({
                scrollTop: $("div#user-accordion").offset().top
            }, 500);

        }); /** end of click function. */

        /*** ----- End of the User Account functions. ----- ***/


        /*** ----- This function is for the Connections only. ----- ***/
        $("a[href='#conns']").click(function(e) {
            if($('div#conns').hasClass('in')){
                console.log('boos');
                $('div#connection-accordion').css({
                    'width': 'auto',
                    'margin-right': '0px',
                    'margin-left': '0px',
                    '-webkit-transition': 'width 2s', /* Safari */
                    'transition': 'width 2s',
                    'box-shadow': 'none'
                });
            }
            else {
                console.log('naa syay class na in. so naview ni sya.');

                /* Expand the panel to fit the whole screen in mobile. */
                $('div#connection-accordion').css({
                    'width': '360px',
                    'margin-right': '-20px',
                    'margin-left': '-20px',
                    '-webkit-transition': 'width 2s', /* Safari */
                    'transition': 'width 2s',
                    'box-shadow': '0px 0px 10px'
                });
            }

            /* ------- Scroll to this --------- */
            $('html, body').animate({
                scrollTop: $("div#connection-accordion").offset().top
            }, 500);

        }); /** end of click function. */

        /*** ----- This function is for the Calendar only. ----- ***/
        $("a[href='#calendar1']").click(function(e) {
            if($('div#calendar1').hasClass('in')){
                console.log('boos');
                $('div#calendar-accordion').css({
                    'width': 'auto',
                    'margin-right': '0px',
                    'margin-left': '0px',
                    '-webkit-transition': 'width 2s', /* Safari */
                    'transition': 'width 2s',
                    'box-shadow': 'none'
                });
            }
            else {
                console.log('naa syay class na in. so naview ni sya.');

                /* Expand the panel to fit the whole screen in mobile. */
                $('div#calendar-accordion').css({
                    'width': '360px',
                    'margin-right': '-20px',
                    'margin-left': '-20px',
                    '-webkit-transition': 'width 2s', /* Safari */
                    'transition': 'width 2s',
                    'box-shadow': '0px 0px 10px'
                });
            }

            /* ------- Scroll to this --------- */
            $('html, body').animate({
                scrollTop: $("div#calendar-accordion").offset().top
            }, 500);

        }); /** end of click function. */


        /*** ----- This function is for the Food Diary only. ----- ***/
        $("a[href='#food-diary']").click(function(e) {
            if($('div#food-diary').hasClass('in')){
                console.log('boos');
                $('div#food-diary-accordion').css({
                    'width': 'auto',
                    'margin-right': '0px',
                    'margin-left': '0px',
                    '-webkit-transition': 'width 2s', /* Safari */
                    'transition': 'width 2s',
                    'box-shadow': 'none'
                });
            }
            else {
                console.log('naa syay class na in. so naview ni sya.');

                /* Expand the panel to fit the whole screen in mobile. */
                $('div#food-diary-accordion').css({
                    'width': '360px',
                    'margin-right': '-20px',
                    'margin-left': '-20px',
                    '-webkit-transition': 'width 2s', /* Safari */
                    'transition': 'width 2s',
                    'box-shadow': '0px 0px 10px'
                });
            }

            /* ------- Scroll to this --------- */
            $('html, body').animate({
                scrollTop: $("div#food-diary-accordion").offset().top
            }, 500);

        }); /** end of click function. */

        /*** ----- This function is for the Subscription only. ----- ***/
        $("a[href='#subscription']").click(function(e) {
            if($('div#subscription').hasClass('in')){
                console.log('boos');
                $('div#subscription-accordion').css({
                    'width': 'auto',
                    'margin-right': '0px',
                    'margin-left': '0px',
                    'box-shadow': 'none'
                });
            }
            else {
                console.log('naa syay class na in. so naview ni sya.');

                /* Expand the panel to fit the whole screen in mobile. */
                $('div#subscription-accordion').css({
                    'width': '360px',
                    'height': 'auto',
                    'margin-right': '-20px',
                    'margin-left': '-20px',
                    'box-shadow': '0px 0px 10px'
                });
            }

            /* ------- Scroll to this --------- */
            $('html, body').animate({
                scrollTop: $("div#subscription-accordion").offset().top
            }, 500);

        }); /** end of click function. */

        /*** ----- This function is for the Health Report only. ----- ***/
        $("a[href='#health']").click(function(e) {
            if($('div#health').hasClass('in')){
                console.log('boos');
                $('div#health-report-accordion').css({
                    'width': 'auto',
                    'margin-right': '0px',
                    'margin-left': '0px',
                    '-webkit-transition': 'width 2s', /* Safari */
                    'transition': 'width 2s',
                    'box-shadow': 'none'
                });

            }
            else {
                console.log('naa syay class na in. so naview ni sya.');

                /* Expand the panel to fit the whole screen in mobile. */
                $('div#health-report-accordion').css({
                    'width': '360px',
                    'margin-right': '-20px',
                    'margin-left': '-20px',
                    '-webkit-transition': 'width 2s', /* Safari */
                    'transition': 'width 2s',
                    'box-shadow': '0px 0px 10px',
                    "-webkit-transition": "width 2s, height 4s", /* For Safari 3.1 to 6.0 */
                    "transition": "width 2s, height 4s"
                });
            }

            /* ------- Scroll to this --------- */
            $('html, body').animate({
                scrollTop: $("div#health-report-accordion").offset().top
            }, 500);

        }); /** end of click function. */


    } 
}); 