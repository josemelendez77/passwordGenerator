
var specialChar = "!%&,*+-./<>?~";
var number = "0123456789";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomChar(charSet) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet.charAt(randomIndex);
}
function generatePassword() {
    var confirmLength = parseInt(prompt("How many characters do you want your password to have."));

    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 120) {
        alert("Password length must be between 8 and 120 characters. Please try again.");
        confirmLength = parseInt(prompt("How many characters would you like your password to contain?"));
    }
    alert(`Your password will have ${confirmLength} characters`);
    var confirmSpecialCharacter = confirm("Click OK to include special characters");
    var confirmNumericCharacter = confirm("Click OK to include numeric characters");
    var confirmLowerCase = confirm("Click OK to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to include uppercase characters");
    while (!(confirmSpecialCharacter || confirmNumericCharacter || confirmLowerCase || confirmUpperCase)) {
        alert("Must choose at least one character type.");
        confirmSpecialCharacter = confirm("Click OK to include special characters");
        confirmNumericCharacter = confirm("Click OK to include numeric characters");
        confirmLowerCase = confirm("Click OK to include lowercase characters");
        confirmUpperCase = confirm("Click OK to include uppercase characters");
    }

    var passwordCharacters = '';

    if (confirmSpecialCharacter) {
        passwordCharacters += specialChar;
    }

    if (confirmNumericCharacter) {
        passwordCharacters += number;
    }

    if (confirmLowerCase) {
        passwordCharacters += lowerChar;
    }

    if (confirmUpperCase) {
        passwordCharacters += upperChar;
    }

    var randomPassword = '';

    for (var i = 0; i < confirmLength; i++) {
        randomPassword += getRandomChar(passwordCharacters);
    }

    return randomPassword;
}
document.querySelector("#generate").addEventListener("click", function () {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
});


  