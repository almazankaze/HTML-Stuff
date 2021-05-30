$(function () {
  $(".drop--clickable").on("click", handleClick);
});

function handleClick() {
  if ($(this).next().hasClass("hide")) $(this).next().removeClass("hide");
  else $(this).next().addClass("hide");
}
