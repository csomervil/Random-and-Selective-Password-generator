// Assignment code here


// Get references to the #generate element


var generateBtn = document.querySelector("#generate");

var charlower = "abcdefghijklmnopqrstuvwxyz"

var numbers = "0123456789"

var special = "`<>/?}{[]\.~!@#$%^&*()_-+=|,.:;'"

var charupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function generatePassword() {

  var mini = prompt("Desired MINIMUM length of password");

  var maxi = prompt("Desired MAXIMUM length of password");

  var passlower= confirm("Should there be LOWERCASE?");

  var passupper = confirm("Should there be UPPERCASE?");

  var passnumber = confirm("Should there be NUMBERS?");

  var passspecial = confirm("Should there be SPECIAL CHARACTERS?");

  var randomint = (Math.random() * (parseInt(maxi) - parseInt(mini)) + parseInt(mini))

    if (passlower + passupper + passnumber + passspecial === 0) {
      window.alert("You have selected no character types. Please try again.")
      return null;
    }

    if ((passlower + passupper + passnumber + passspecial === 4) && mini < 4) {
      window.alert("Your range is not possible with your requests. Please try again.")
      return null;
    }
    var pool = "";
      while (pool.length < randomint) {
    
        if (passlower === true && pool.length < randomint) {
          pool += charlower.charAt(Math.floor(Math.random() * charlower.length));

        } if (passupper === true && pool.length < randomint) {
          pool += charupper.charAt(Math.floor(Math.random() * charupper.length));

        } if (passnumber === true && pool.length < randomint) {
          pool += numbers.charAt(Math.floor(Math.random() * numbers.length));

        } if (passspecial === true && pool.length < randomint) {
          pool += special.charAt(Math.floor(Math.random() * special.length));
        }

      } 

    

    return pool;
  // for ( var i = 0; i < (Math.random() * (parseInt(maxi) - parseInt(mini)) + parseInt(mini)); i++ ) {
  //   newpool += pool.charAt(Math.floor(Math.random() * pool.length));
  
  // }
  // return newpool;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
