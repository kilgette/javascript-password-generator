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

//generate new password
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

//ask user how many characters the password should be

//what types of characters - uppercase, lowercase, numbers, special chars

//prompt computer to chose random from available list



