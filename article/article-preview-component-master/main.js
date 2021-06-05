$(function () {
  $(".icon-btn").on("click", showDeskIcons);
  $(".icon-mobile-btn").on("click", showMobileIcons);
  $(".other-mobile-btn").on("click", hideMobileIcons);
});

function showDeskIcons() {
  if ($(".social-box").hasClass("hide")) {
    $(".social-box").removeClass("hide");
  } else {
    $(".social-box").addClass("hide");
  }
}

function showMobileIcons() {
  if ($(".social-box-mobile").hasClass("hide")) {
    $(".social-box-mobile").removeClass("hide");
    $(".profile-container").css("display", "none");
  }
}

function hideMobileIcons() {
  $(".social-box-mobile").addClass("hide");
  $(".profile-container").css("display", "flex");
}
