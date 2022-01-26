# Assignment3-PasswordGenerator

I started by coming up with the string for the characters used in the password

Next was giving the user the ability to select the length of the password, which I achieved through a text input field.

I then created the function to generate the random string by setting the length equal to the user input, and then using "let passwordLength = document.querySelector('.form-control').value;" and using a math.random() * passwordLength to have it randomly select the characters.

The user input fields were pulled from bootstrap.