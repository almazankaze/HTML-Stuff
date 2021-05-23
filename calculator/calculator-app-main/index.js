let num1 = null;
let num2 = null;
let op = null;
let deciCount = 0;
let newNum = true;
let isNegative = false;
let currTheme;

// Check browser support
if (typeof Storage !== "undefined") {
  // Retrieve
  currTheme = localStorage.getItem("myTheme");

  if (currTheme === null) {
    currTheme = "1";

    // Store
    localStorage.setItem("myTheme", "1");
  }
} else {
  //document.getElementById("result").innerHTML =
  //"Sorry, your browser does not support Web Storage...";
  currTheme = "1";
}

$(function () {
  $(".numBtn").on("click", handleNumKey);
  $(".resetBtn").on("click", handleRes);
  $(".delBtn").on("click", handleDel);
  $(".equalsBtn").on("click", handleEq);
  $(".symBtn").on("click", handleSym);
  $(".input-btn").on("click", handleTheme);

  $("body").addClass("theme" + currTheme);
  $("#" + currTheme).addClass("active");
});

function handleTheme() {
  const theme = $(this).text();

  if (theme != currTheme) {
    $("body")
      .removeClass("theme" + currTheme)
      .addClass("theme" + theme);

    $("#" + currTheme).removeClass("active");
    $("#" + theme).addClass("active");
    currTheme = theme;

    localStorage.setItem("myTheme", currTheme);
  }
}

function handleNumKey() {
  const keyVal = $(this).text();
  const display = $("#display-num").text();

  // max characters in display
  if (display.length >= 10) return;

  // do nothing if user presses 0 when there is only 1 on screen
  if (keyVal === "0" && display === "0") {
    newNum = true;
    return;
  }

  // change display
  if (!newNum) {
    $("#display-num").text(display + keyVal);
  } else {
    $("#display-num").text(keyVal);

    if (isNegative) {
      $("#display-num").text("-" + keyVal);
      isNegative = false;
    }
    newNum = false;
  }
}

// reset everything
function handleRes() {
  num1 = null;
  num2 = null;
  op = null;
  newNum = true;
  deciCount = 0;
  $("#display-num").text("0");
}

function handleDel() {
  const display = $("#display-num").text();
  const lastChar = display.charAt(display.length - 1);
  const newDisplay = display.slice(0, -1);

  if (lastChar === ".") deciCount = 0;

  // handles deleting the last number in display
  if (newDisplay.length === 0 || newDisplay === "0") {
    $("#display-num").text("0");
    newNum = true;
  }
  // deleting when there is more than one character
  else {
    // if user presses delete after getting an answer
    if (newNum) newNum = false;

    $("#display-num").text(newDisplay);
  }
}

function handleEq() {
  doCalc();

  deciCount = 0;
  num1 = null;
  num2 = null;
  newNum = true;
}

function handleSym() {
  const symbol = $(this).text();
  const display = $("#display-num").text();

  if (symbol === ".") {
    if (deciCount === 0) {
      if (newNum) $("#display-num").text("0.");
      else $("#display-num").text(display + ".");
      newNum = false;
      deciCount = 1;
    }
  } else {
    op = symbol;

    // do calculation if user presses op key instead of equals
    if (num1) {
      doCalc();
    } else {
      num1 = display;

      // add a zero if user forgets to after decimal
      if (display === "0.") {
        num1 = "0.0";
        $("#display-num").text("0.0");
      }
    }
    deciCount = 0;
    newNum = true;
  }
}

function doCalc() {
  num2 = $("#display-num").text();

  if (!num1 && !num2) return;

  if (op === "+") {
    num1 = maxDecimals(Number(num1) + Number(num2), 6);
  } else if (op === "-") {
    num1 = maxDecimals(Number(num1) - Number(num2), 6);
  } else if (op === "x") {
    num1 = maxDecimals(Number(num1) * Number(num2), 6);
  } else {
    if (num2 === "0") num1 = 0;
    else num1 = maxDecimals(Number(num1) / Number(num2), 6);
  }

  $("#display-num").text(num1);
}

function maxDecimals(value, dp) {
  return +parseFloat(value).toFixed(dp);
}
