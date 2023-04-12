// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];

function numberOfCharacters(){
  var numCharacters = 
  (prompt("How many characters do you want your password to be?"));
  if (numCharacters < 8 || numCharacters > 128 ){
  alert ("you must chose a number between 8 and 128")
  }

  return numCharacters
}

function generatePassword(){
  var allCharacters = [];
  var characterLength = numberOfCharacters();
  console.log(characterLength)

  var upperCase = (confirm("Should it include upper case letters?"));
  console.log(upperCase)
  if (upperCase === true){
    allCharacters = allCharacters.concat (upperCaseArray)
    console.log(allCharacters)
  }
  var lowerCase = (confirm("Should it include lower case letters?"));
  if (lowerCase === true){
    allCharacters = allCharacters.concat (lowerCaseArray)
    console.log(allCharacters)
  }
  var special = (confirm("Should it include special characters?"))
  if (special === true){
    allCharacters = allCharacters.concat (specialArray)
    console.log(allCharacters)
  }

  var numbers = (confirm("Should it include numbers?"));
  if (numbers === true){
    allCharacters = allCharacters.concat (numbersArray)
    console.log(allCharacters)
  }

  var PassWord = ""

  //create forloop that will loop over all characters array and generate random indexes using math.floor and math.random
for (var i = 0; i <characterLength; i++) {
  var randomIndex = Math.floor(Math.random() * allCharacters.length);
  PassWord += allCharacters[randomIndex];
}

  return PassWord;
}




