// Ask for length
var passwordLength = parseInt(prompt('Choose a length between 8 and 128 characters.'));

var inputNum = confirm ('Would you like to include numbers?');
var inputUpper = confirm ('Would you like to include uppercase letters?');
var inputLower = confirm ('Would you like to include lowercase letters?');
var inputSpecial = confirm ('Would you like to include special characters?');


var arrUpper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'].split("");
var arrLower = ['abcdefghijklmnopqrstuvwxyz'].split("");
var specChar = ['~!@#$%^&*?><'].split("");

//for loop adding one of each category to the pswrd array until it meets the specified length

  for (var i = 0; i <= passwordLength; i ++){ 
    var pswrd = [];
      if (inputNum = true) {
        pswrd.push(Math.floor(Math.random()*9));
      }
      if (inputUpper = true) {
        pswrd.push(alphaUpper[Math.floor(Math.random()*aplhaUpper.length)]);
      }
      if (inputLower = true) {
        pswrd.push(alphaLower[Math.floor(Math.random()*aplhaLower.length)]);
      }
      if (inputSpecial = true) {
        pswrd.push(special[Math.floor(Math.random()*special.length)]);
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
