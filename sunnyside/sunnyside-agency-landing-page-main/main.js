$(document).ready(function () {
  $("#check").on("click", handleClick);
});

function handleClick() {
  if ($(this).is(":checked")) {
    $(".nav-links").css("left", "0");
  } else {
    $(".nav-links").css("left", "-100%");
  }
}
