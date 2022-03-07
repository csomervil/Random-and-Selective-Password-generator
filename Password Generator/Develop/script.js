// Assignment code here


// Get references to the #generate element


var generateBtn = document.querySelector("#generate");

var charlower = "abcdefghijklmnopqrstuvwxyz"

var numbers = "0123456789"

var special = "`<>/?}{[]\.~!@#$%^&*()_-+=|,.:;'"

var charupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function generatePassword() {

  var min = window.prompt("Desired MINIMUM length of password")

  var max = window.prompt("Desired MAXIMUM length of password")

  var passlower= confirm("Should there be LOWERCASE?")

  var passupper = confirm("Should there be UPPERCASE?")

  var passnumber = confirm("Should there be NUMBERS?")

  var passspecial = confirm("Should there be SPECIAL CHARACTERS?")

    if (passlower + passupper + passnumber + passspecial === 0) {
      window.alert("You have selected no character types. Please refresh the page.")

    } if (passlower === true) {
    var pool = pool + charlower

    } if (passupper === true) {
      var pool = pool + charupper

    } if (passnumber === true) {
      var pool = pool + numbers

    } if (passspecial === true) {
      var pool = pool + special

    }
  newpool = ""
  for ( var i = 0; i < max; i++ ) {
    newpool += pool.charAt(Math.floor(Math.random() * (max - min + 1) + min));
  
  }
  return newpool;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
