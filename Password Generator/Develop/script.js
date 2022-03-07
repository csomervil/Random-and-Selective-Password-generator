// Assignment code here


// Get references to the #generate element

var charlower = "abcdefghijklmnopqrstuvwxyz"

var numbers = "0123456789"

var special = "`<>/?}{[]\.~!@#$%^&*()_-+=|,.:;'"

var charupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"





var generateBtn = document.querySelector("#generate");

var passlenmin = window.prompt("Desired MINIMUM length of password")

var passlenmax = window.prompt("Desired MAXIMUM length of password")

var passlower= confirm("Should there be LOWERCASE?")

var passupper = confirm("Should there be UPPERCASE?")

var passnumber = confirm("Should there be NUMBERS?")

var passspecial = confirm("Should there be SPECIAL CHARACTERS?")

if (passlower + passupper + passnumber + passspecial === 0) {
  window.alert("You have selected no character types. Please refresh the page.")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
