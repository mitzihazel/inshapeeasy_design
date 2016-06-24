(function ($) {
	$('a[href="#today"]').click(function () {
	  $("div#today").hide();
	});
	$('a[href="#journal"]').click(function () {
	  $("div#today").show();
	});
});