$(function () {
  $(".btn").on("click", handleBtn);
});

function handleBtn() {
  const email = $(".myInput").val();

  if (email === "") {
    $(".error-message").css("visibility", "visible");
    $(".error-icon").css("visibility", "visible");
  } else if (!IsEmail(email)) {
    $(".error-message").css("visibility", "visible");
    $(".error-icon").css("visibility", "visible");
  } else {
    $(".error-message").css("visibility", "hidden");
    $(".error-icon").css("visibility", "hidden");
  }
}

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,6})+$/;
  if (!regex.test(email)) {
    return false;
  } else {
    return true;
  }
}
