
// Assignment Code
var generateBtn = document.querySelector("#generate");

//split the arrays to elements in an array instead of one long string
var arrUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
var arrLower = 'abcdefghijklmnopqrstuvwxyz'.split("");
var specChar = '~!@#$%^&*?><'.split("");

function getInfo() {
      // Ask for length
      var passwordLength = parseInt(prompt('Choose a length between 8 and 128 characters.'));
        while(isNaN(passwordLength) === true || passwordLength < 8 || passwordLength > 128){
          alert('Please enter only numbers between 8 and 128');
          passwordLength = parseInt(prompt('Choose a length between 8 and 128 characters.'));
      }
      // confirm each input type
      var inputNum = confirm ('Would you like to include numbers?');
      var inputUpper = confirm ('Would you like to include uppercase letters?');
      var inputLower = confirm ('Would you like to include lowercase letters?');
      var inputSpecial = confirm ('Would you like to include special characters?');

      var userInfo = {
        inputNum: inputNum,
        inputUpper: inputUpper,
        inputLower: inputLower,
        inputSpecial: inputSpecial,
        passwordLength: passwordLength
      };
      return userInfo;
}

//for loop adding one of each category to the pswrd array until it meets the specified length
function generatePassword(userInfo){
  var pswrd = [];
  for (var i = 0; i <= userInfo.passwordLength; i ++){ 
      if (userInfo.inputNum === true && pswrd.length < userInfo.passwordLength) {
        pswrd.push(Math.floor(Math.random()*9));
      }
      if (userInfo.inputUpper === true && pswrd.length < userInfo.passwordLength) {
        pswrd.push(arrUpper[Math.floor(Math.random()*arrUpper.length)]);
      }
      if (userInfo.inputLower === true && pswrd.length < userInfo.passwordLength) {
        pswrd.push(arrLower[Math.floor(Math.random()*arrLower.length)]);
      }
      if (userInfo.inputSpecial === true && pswrd.length < userInfo.passwordLength) {
        pswrd.push(specChar[Math.floor(Math.random()*specChar.length)]);
      }
      if (pswrd.length === userInfo.passwordLength){
        break;
      }
  } 
  return shuffle(pswrd).join("");
  }

//shuffle the final array to generate the password
function shuffle(arr){
  for ( var i= arr.length-1; i>0; i--){
    var j = Math.floor(Math.random()*(i+1));
    var temp =arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

// Write password to the #password input
function writePassword() {
  var userInfo = getInfo();
  var password = generatePassword(userInfo);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
