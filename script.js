// Assignment Code
var generateBtn = document.querySelector("#generate");//this is the id for the button 

function generatePassword() {
  var pwd = ""; //created so that it can easly collect data on a global scale to everythign else 

  var letter = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789"
  var specialChr = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~" //special characters from documentation 
  var upperLetter = letter.toUpperCase(); //making it uppercase 
  var finalPassword = "";

  var entryPrompt1 = prompt("Please enter the amount of characters you would like for your password: (must be between  8- 128)", "enter here");
  console.log(entryPrompt1); //original prompt set up question. 

  if ((parseInt(entryPrompt1) >= 8) && (parseInt(entryPrompt1) <= 128)) { //must meet this criteria to proceed 

    var wantLC = confirm("Would you like to add LowerCase letters to your password?");
    if (wantLC === true) { pwd = pwd + letter; } //confirming the choice to add lower case letters 
    var wantUC = confirm("Would you like to add UpperCase letters to your password?");
    if (wantUC === true) { pwd = pwd + upperLetter; } //confirming the choice to add upper case letters 
    var wantN = confirm("Would you like to add Numbers to your password?");
    if (wantN === true) { pwd = pwd + numbers; } //confirming the choice to add numbers 
    var wantSC = confirm("Would you like to add Special Characters to your password?");//confirming the choice to add special characters 
    if (wantSC === true) { pwd = pwd + specialChr; }

    console.log(pwd);

    for (i = 0; i <= parseInt(entryPrompt1); i++) {
      var randomNum = Math.floor(Math.random() * pwd.length);//pick a random number from the length of the arr and round up.
      finalPassword = finalPassword + pwd.charAt(randomNum);//use that number and find the character at that index the add it to the password 
    }
    return finalPassword;//after all is complete, go ahead and return the final password all together
  }
  else {generatePassword()}//if criteria not matched, re- ask the first question
}

// password to the #password input
function writePassword() {
  var password = generatePassword(); // call function and assign the final password to the following variable
  var passwordText = document.querySelector("#password"); // this is the id from the text area 
  passwordText.value = password; //give the text area the value of the password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when event listener "click" is confirmed, call function writepassword to do it's thing. 
