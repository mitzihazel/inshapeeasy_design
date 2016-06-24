$(document).ready(function(){
    $('a[href="#today"]').click(function () {
      $("div#today").show();
    });
    $('a[href="#journal"]').click(function () {
      $("div#today").hide();
    });
}); 