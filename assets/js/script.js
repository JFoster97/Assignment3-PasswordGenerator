// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create strings with characters used for different parameters
var passwordValue =''

const passwordChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()?'


var generatePassword= function() {
    var passwordLength = 12;
    for (var i =0; i < passwordLength; i++) {
        var randomValue = Math.floor(Math.random() * passwordChars.length);
        passwordValue += passwordChars.substring(randomValue);
        console.log (passwordValue);
    }
    return passwordValue;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)

  passwordText.value = password;

}
console.log(generatePassword);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
