$(function () {
  $(".btn").on("click", handleBtn);

  $("#firstName").append(
    "<span class='error-message'>First Name cannot be empty</span>"
  );
});

function handleBtn() {
  const firstName = $("#firstName input").first().val();
  const lastName = $("#lastName input").first().val();
  const email = $("#email input").first().val();
  const password = $("#password input").first().val();

  let allFilled = true;

  // check for empty inputs
  if (jQuery.trim(firstName).length === 0) {
    allFilled = false;
    $("#firstName input").css("border", "2px solid hsl(0, 100%, 74%)");
    $("#firstName .error-message").css("display", "block");
  } else {
    $("#firstName input").css("border", "1px solid hsl(246, 25%, 77%)");
    $("#firstName .error-message").css("display", "none");
  }

  if (jQuery.trim(lastName).length === 0) {
    allFilled = false;
    $("#lastName input").css("border", "2px solid hsl(0, 100%, 74%)");
    $("#lastName .error-message").css("display", "block");
  } else {
    $("#lastName input").css("border", "1px solid hsl(246, 25%, 77%)");
    $("#lastName .error-message").css("display", "none");
  }

  if (jQuery.trim(email).length === 0) {
    allFilled = false;
    $("#email input").css("border", "2px solid hsl(0, 100%, 74%)");
    $("#email .error-message").css("display", "block");
    $("#email .error-message").text("Email cannot be empty");
  } // check if email is good
  else if (!IsEmail(email)) {
    allFilled = false;
    $("#email input").css("border", "2px solid hsl(0, 100%, 74%)");
    $("#email .error-message").css("display", "block");
    $("#email .error-message").text("Looks like this is not an email");
  } else {
    $("#email input").css("border", "1px solid hsl(246, 25%, 77%)");
    $("#email .error-message").css("display", "none");
  }

  if (jQuery.trim(password).length === 0) {
    allFilled = false;
    $("#password input").css("border", "2px solid hsl(0, 100%, 74%)");
    $("#password .error-message").css("display", "block");
  } else {
    $("#password input").css("border", "1px solid hsl(246, 25%, 77%)");
    $("#password .error-message").css("display", "none");
  }

  if (allFilled) {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
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
