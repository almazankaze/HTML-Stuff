$(document).ready(function () {
  $("#check").on("click", handleClick);
});

function handleClick() {
  if ($(this).is(":checked")) {
    $(".nav-links-container").css("left", "0%");
  } else {
    $(".nav-links-container").css("left", "-100%");
  }
}
