// Assignment Code
var generateBtn = document.querySelector("#generate");
// var userLength = document.querySelector('#userLength').input;


// Generate a random value from the passwordChars string
function generatePassword() {
  // Create a string for function to pull from
    let passwordChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()?`~_-{}'
    // Set the length of the generated value
    let passwordValue =' ';
    // Generates random values from the described string
    for (let i =0; i < passwordLength; i++) {
        // var randomValue = Math.floor(Math.random() *passwordChars.length);
        passwordValue += passwordChars.charAt(Math.floor(Math.random()*passwordChars.length));
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
generateBtn.addEventListener("click", function() {
  let userLength = document.querySelector('.form-control').value;
  let passwordLength = userLength;
  console.log(passwordLength);
});
