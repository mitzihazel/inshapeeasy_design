$( document ).ready(function() {

    /**
    * Some CSS.
    */

    $('.panel-group').css('background-color', 'transparent');
    $('.panel-collapse').css('background-color', 'white');

    $("[data-toggle='collapse']").on('click', function(){ 
        var title = $(this).html();
        var href = $(this).attr('href');
        var stateObj = { inshapeeasy: "app" };
        history.pushState(stateObj, title, "/" + href);

        console.log('toggle-clicked.');
    });

    window.onpopstate = function (event) {
      var hash = window.location.hash;
        console.log(hash);
        $(hash).collapse('show');

        if(hash === '') 
        {
            $('.panel-collapse').collapse('hide');
            $('.panel-group').css({
                'opacity': '1',
                'margin-left': '0px',
                'margin-right': '0px',
                'margin-top': '0px',
                'box-shadow': 'none'
            });
            $('div#health-report-accordion > .panel-heading').css({
                'border-bottom-left-radius': '20px',
                'border-bottom-right-radius': '20px'
            });
            $('div#user-accordion > .panel-heading').css({
                'border-top-left-radius': '20px',
                'border-top-right-radius': '20px'
            });
        }
        else {
            $('.panel-group').css('background-color', 'transparent');

            if($('.panel-collapse.collapse.in')) {
                $('.panel-heading').css({
                'border-bottom-left-radius': '0px',
                'border-bottom-right-radius': '0px',
                'border-top-left-radius': '0px',
                'border-top-right-radius': '0px'
                });
            }
        }
    }

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
    
    /**
    * Reloading the chart when slided to the next date in Food Diary Journal.
    */
    $('.journal-date').on('change', function() {
        var glob = this.value;
        //alert( this.value ); // or $(this).val()
        $('canvas#journal-items').remove();
        $('<canvas id="journal-items" width="200" height="200"></canvas>').appendTo('div#journal > .well > .journal-info');
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

        
    }
    else if ((window.matchMedia("(min-width: 320px)").matches) || (window.matchMedia("(min-width: 360px)").matches) || (window.matchMedia("(min-width: 768px)").matches)) /* Width for mobile devices */
    {
        /**
        * Set Tabs to collapse on first load.
        */
        $('.panel-collapse').collapse('hide');
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
                    '-webkit-transition': 'height 2s', /* Safari */
                    'transition': 'height 2s',
                    'box-shadow': 'none'
                });

                /** Hide Effect on the other tabs when this one is clicked. */
                $('div#food-diary-accordion').css('opacity', '1');
                $('div#calendar-accordion').css('opacity', '1');
                $('div#health-report-accordion').css('opacity', '1');
                $('div#connection-accordion').css('opacity', '1');
                $('div#subscription-accordion').css('opacity', '1');
            }
            else {
                console.log('naa syay class na in. so naview ni sya.');

                /* Expand the panel to fit the whole screen in mobile. */
                $('div#user-accordion').css({
                    'max-width': 'auto',
                    'margin-right': '-20px',
                    'margin-left': '-20px',
                    'margin-top': '-20px',
                    '-webkit-transition': 'height 2s', /* Safari */
                    'transition': 'height 2s',
                    'box-shadow': '0px 0px 30px'
                });

                /** Hide Effect on the other tabs when this one is clicked. */
                $('div#food-diary-accordion').css('opacity', '0.2');
                $('div#calendar-accordion').css('opacity', '0.2');
                $('div#health-report-accordion').css('opacity', '0.2');
                $('div#connection-accordion').css('opacity', '0.2');
                $('div#subscription-accordion').css('opacity', '0.2');
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
                    '-webkit-transition': 'height 2s', /* Safari */
                    'transition': 'height 2s',
                    'box-shadow': 'none'
                });

                /** Hide Effect on the other tabs when this one is clicked. */
                $('div#user-accordion').css('opacity', '1');
                $('div#food-diary-accordion').css('opacity', '1');
                $('div#calendar-accordion').css('opacity', '1');
                $('div#health-report-accordion').css('opacity', '1');
                $('div#user-accordion').css('opacity', '1');
                $('div#subscription-accordion').css('opacity', '1');
            }
            else {
                console.log('naa syay class na in. so naview ni sya.');

                /* Expand the panel to fit the whole screen in mobile. */
                $('div#connection-accordion').css({
                    'max-width': 'auto',
                    'margin-right': '-20px',
                    'margin-left': '-20px',
                    '-webkit-transition': 'height 2s', /* Safari */
                    'transition': 'height 2s',
                    'box-shadow': '0px 0px 30px'
                });

                /** Hide Effect on the other tabs when this one is clicked. */
                $('div#user-accordion').css('opacity', '0.2');
                $('div#food-diary-accordion').css('opacity', '0.2');
                $('div#calendar-accordion').css('opacity', '0.2');
                $('div#health-report-accordion').css('opacity', '0.2');
                $('div#user-accordion').css('opacity', '0.2');
                $('div#subscription-accordion').css('opacity', '0.2');
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
                    '-webkit-transition': 'height 2s', /* Safari */
                    'transition': 'height 2s',
                    'box-shadow': 'none'
                });

                /** Hide Effect on the other tabs when this one is clicked. */
                $('div#user-accordion').css('opacity', '1');
                $('div#food-diary-accordion').css('opacity', '1');
                $('div#connection-accordion').css('opacity', '1');
                $('div#health-report-accordion').css('opacity', '1');
                $('div#user-accordion').css('opacity', '1');
                $('div#subscription-accordion').css('opacity', '1');
            }
            else {
                console.log('naa syay class na in. so naview ni sya.');

                /* Expand the panel to fit the whole screen in mobile. */
                $('div#calendar-accordion').css({
                    'max-width': 'auto',
                    'margin-right': '-20px',
                    'margin-left': '-20px',
                    '-webkit-transition': 'height 2s', /* Safari */
                    'transition': 'height 2s',
                    'box-shadow': '0px 0px 30px'
                });

                /** Hide Effect on the other tabs when this one is clicked. */
                $('div#user-accordion').css('opacity', '0.2');
                $('div#food-diary-accordion').css('opacity', '0.2');
                $('div#connection-accordion').css('opacity', '0.2');
                $('div#health-report-accordion').css('opacity', '0.2');
                $('div#user-accordion').css('opacity', '0.2');
                $('div#subscription-accordion').css('opacity', '0.2');
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
                    '-webkit-transition': 'height 2s', /* Safari */
                    'transition': 'height 2s',
                    'box-shadow': 'none'
                });

                /** Hide Effect on the other tabs when this one is clicked. */
                $('div#user-accordion').css('opacity', '1');
                $('div#calendar-accordion').css('opacity', '1');
                $('div#connection-accordion').css('opacity', '1');
                $('div#health-report-accordion').css('opacity', '1');
                $('div#user-accordion').css('opacity', '1');
                $('div#subscription-accordion').css('opacity', '1');
            }
            else {
                console.log('naa syay class na in. so naview ni sya.');

                /* Expand the panel to fit the whole screen in mobile. */
                $('div#food-diary-accordion').css({
                    'max-width': 'auto',
                    'margin-right': '-20px',
                    'margin-left': '-20px',
                    '-webkit-transition': 'height 2s', /* Safari */
                    'transition': 'height 2s',
                    'box-shadow': '0px 0px 30px'
                });

                /** Hide Effect on the other tabs when this one is clicked. */
                $('div#user-accordion').css('opacity', '0.2');
                $('div#calendar-accordion').css('opacity', '0.2');
                $('div#connection-accordion').css('opacity', '0.2');
                $('div#health-report-accordion').css('opacity', '0.2');
                $('div#user-accordion').css('opacity', '0.2');
                $('div#subscription-accordion').css('opacity', '0.2');
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

                /** Hide Effect on the other tabs when this one is clicked. */
                $('div#user-accordion').css('opacity', '1');
                $('div#calendar-accordion').css('opacity', '1');
                $('div#connection-accordion').css('opacity', '1');
                $('div#food-diary-accordion').css('opacity', '1');
                $('div#user-accordion').css('opacity', '1');
                $('div#health-report-accordion').css('opacity', '1');
            }
            else {
                console.log('naa syay class na in. so naview ni sya.');

                /* Expand the panel to fit the whole screen in mobile. */
                $('div#subscription-accordion').css({
                    'max-width': 'auto',
                    'margin-right': '-20px',
                    'margin-left': '-20px',
                    'box-shadow': '0px 0px 30px'
                });

                /** Hide Effect on the other tabs when this one is clicked. */
                $('div#user-accordion').css('opacity', '0.2');
                $('div#calendar-accordion').css('opacity', '0.2');
                $('div#connection-accordion').css('opacity', '0.2');
                $('div#food-diary-accordion').css('opacity', '0.2');
                $('div#user-accordion').css('opacity', '0.2');
                $('div#health-report-accordion').css('opacity', '0.2');
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
                    '-webkit-transition': 'height 2s', /* Safari */
                    'transition': 'height 2s',
                    'box-shadow': 'none'
                });

                /** Hide Effect on the other tabs when this one is clicked. */
                $('div#user-accordion').css('opacity', '1');
                $('div#calendar-accordion').css('opacity', '1');
                $('div#connection-accordion').css('opacity', '1');
                $('div#food-diary-accordion').css('opacity', '1');
                $('div#user-accordion').css('opacity', '1');
                $('div#subscription-accordion').css('opacity', '1');
            }
            else {
                console.log('naa syay class na in. so naview ni sya.');

                /* Expand the panel to fit the whole screen in mobile. */
                $('div#health-report-accordion').css({
                    'max-width': 'auto',
                    'margin-right': '-20px',
                    'margin-left': '-20px',
                    '-webkit-transition': 'height 2s', /* Safari */
                    'transition': 'height 2s',
                    'box-shadow': '0px 0px 30px'
                });

                /** Hide Effect on the other tabs when this one is clicked. */
                $('div#user-accordion').css('opacity', '0.2');
                $('div#calendar-accordion').css('opacity', '0.2');
                $('div#connection-accordion').css('opacity', '0.2');
                $('div#food-diary-accordion').css('opacity', '0.2');
                $('div#user-accordion').css('opacity', '0.2');
                $('div#subscription-accordion').css('opacity', '0.2');
            }

            /* ------- Scroll to this --------- */
            $('html, body').animate({
                scrollTop: $("div#health-report-accordion").offset().top
            }, 500);

        }); /** end of click function. */

    } 
    else {
    }
});