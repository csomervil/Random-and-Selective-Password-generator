// Assignment code here


// Get references to the #generate element


var generateBtn = document.querySelector("#generate");

/* Variables for Each Character Type */
var charlower = "abcdefghijklmnopqrstuvwxyz"

var numbers = "0123456789"

var special = "`<>/?}{[]\.~!@#$%^&*()_-+=|,.:;'"

var charupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


function generatePassword() {

  /* Prompts */
  var mini = prompt("Desired MINIMUM length of password");

  var maxi = prompt("Desired MAXIMUM length of password");

  var passlower= confirm("Should there be LOWERCASE?");

  var passupper = confirm("Should there be UPPERCASE?");

  var passnumber = confirm("Should there be NUMBERS?");

  var passspecial = confirm("Should there be SPECIAL CHARACTERS?");

  /* Random Range */
  var randomint = Math.round((Math.random() * (parseInt(maxi) - parseInt(mini)))) + parseInt(mini)
  
  /* Making boolean Values Numberical for Future Use */
  var choicenumber = passlower + passupper + passnumber + passspecial;

    /* Validation */
    if (choicenumber === 0) {
      window.alert("You have selected no character types. Please try again.")
      return null;
    }

    if (parseInt(mini) < choicenumber || parseInt(maxi) < parseInt(mini)) {
      window.alert("Your range is not possible with your requests. Please try again.")
      return null;
    }
    
  /* Amalgimated String for True Randomness */
  var prepool = "";

    if (passlower === true) {
      prepool += charlower;

    } if (passupper === true) {
        prepool += charupper;

    } if (passnumber === true) {
        prepool += numbers;

    } if (passspecial === true) {
      prepool += special;

    }

  var pool = "";

      /* While Loop to Pass Each Character Type at Least once and then Pull Random Values From total String pool */
    while (pool.length < randomint) {
    
      if (passlower === true && pool.length < choicenumber) {
        pool += charlower.charAt(Math.floor(Math.random() * charlower.length));

      } if (passupper === true && pool.length < choicenumber) {
        pool += charupper.charAt(Math.floor(Math.random() * charupper.length));

      } if (passnumber === true && pool.length < choicenumber) {
        pool += numbers.charAt(Math.floor(Math.random() * numbers.length));

      } if (passspecial === true && pool.length < choicenumber) {
        pool += special.charAt(Math.floor(Math.random() * special.length));

      } if (pool.length < randomint) {
        pool += prepool.charAt(Math.floor(Math.random() * prepool.length));
          
      }
      
    } 

      /* Suffle function after the creation of string */
  function shuffleWord (word){
    word = word.split("")
    for (var i = word.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temporary = word[i];
      word[i] = word[j];
      word[j] = temporary;
    }

    return word.join("");

  }

  return shuffleWord(pool);
  
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);
