// Ask for length
var passwordLength = Number(prompt('Choose a length between 8 and 128 characters.'));

var inputNum = confirm ('Would you like to include numbers?');
var inputALHPA = confirm ('Would you like to include uppercase letters?');
var inputAplhaL = confirm ('Would you like to include lowercase letters?');
var inputSpecial = confirm ('Would you like to include special characters?');

var num = [0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9]
var alphaUpper = []
//for loop adding one of each category to the pswrd array until it meets the specified length

function password (passwordLength){
  var pswrd = [];
  for (var i = 0; i <= passwordLength; i ++){ 
      if (inputNum = true) {
        var numbers = Math.floor(Math.random()*9);
        pswrd.push(numbers);
      }
      if (inputALPHA = true) {
        var upperCase = ['A', 'B', 'C', 'D', 'E', 'F'];
        var bigLetters = upperCase[Math.floor(Math.random()*upperCase.length)];
        pswrd.push(bigLetters);
      }

  }
}
//shuffle the final array to generate the password





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
