$(function () {
  $(".btn").on("click", handleBtn);
});

function handleBtn() {
  const email = $(".myInput").val();

  if (email === "") {
    $(".error-message").css("display", "block");
  } else if (!IsEmail(email)) {
    $(".error-message").css("display", "block");
  } else {
    $(".error-message").css("display", "none");
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
