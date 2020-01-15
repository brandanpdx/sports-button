$(document).ready(function() {
  $(".beavers").click(function() {
    $("body").removeClass("duckstheme");
    $("body").addClass("beaverstheme");
  })
  $(".ducks").click(function() {
    $("body").removeClass("beaverstheme");
    $("body").addClass("duckstheme");
  })
});

