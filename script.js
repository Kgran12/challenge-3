var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var symbols = "!@#$%^&*".split("")
var numbers = "0123456789".split("")
//var passwordLength = "128".split("")

function generatePassword() {
  var password = [];
  var pool = [];

  var passwordLength = window.prompt("What is the length of the desired password? (8-128)");

  if (passwordLength < 8) {
    alert("Your password must be between 8 and 128 characters")
    return null
  } else if (passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters")
    return null
  }

  var hasLower = window.confirm("Would you like to include lowercase characters inside your password?")
  var hasUpper = window.confirm("Would you like to include uppercase characters inside your password?")
  var hasSymbols = window.confirm("Would you like to include symbols inside your password?")
  var hasNumbers = window.confirm("Would you like to include numbers inside your password?")

  if (hasLower === false && hasUpper === false && hasSymbols === false && hasNumbers === false) {
    alert("Your password must contain one sets of characters")
    return null
  }

  if (hasLower === true) {
    for (i = 0; i < passwordLength; i++){
      var randomIndex = Math.floor(Math.random() * lowerCase.length);
      var ranChar = lowerCase[randomIndex]
      pool.push(ranChar)
    }
  }

  if (hasUpper === true) {
    for (i = 0; i < passwordLength; i++){
      var randomIndex = Math.floor(Math.random() * upperCase.length);
      var ranChar = upperCase[randomIndex]
      pool.push(ranChar)
    }

  }
  
  if (hasSymbols === true) {
    for (i = 0; i < passwordLength; i++){
      var randomIndex = Math.floor(Math.random() * symbols.length);
      var ranChar = symbols[randomIndex]
      pool.push(ranChar)
    }
  }

  if (hasNumbers === true) {
    for (i = 0; i < passwordLength; i++){
      var randomIndex = Math.floor(Math.random() * numbers.length);
      var ranChar = numbers[randomIndex]
      pool.push(ranChar)
    }
  }

  for (i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * pool.length);
    var ranChar = pool[randomIndex]
    password.push(ranChar)
  }

  return password.join("")

}


// Assignment Codes
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

