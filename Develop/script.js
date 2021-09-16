// Assignment Code
var generateBtn = document.querySelector("#generate");

//creating a user promt- to help with security and fit the needs of our client better
var entryPrompt1 = Number (window.prompt ("Please enter the amount of characters you would like for your password: (must be between  8- 128)", " "));
var pwd =[]; //created so that it can easly collect data. 

// Defining Variables 
var minPWL = 8; 
var maxPWL = 128; 
var letter = "abcdefghijklmnopqrstuvwxyz";
var numbers ="0123456789"
var specialChr =" !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var lcC = 0, ucC = 0, nC = 0, scC = 0; //counters
var lcChar = "", ucChar = "", nChar = "", sChar = ""; //actual character
var ranNum = 0;

function wantLCF(){
    //lcC = pwd.length(Math.floor(Math.random()));
    var numL = letter.length(Math.floor(Math.random()));
    letter.charAt(numL);
}//lower character picking function 

function wantUCF(){
    var numL = letter.length(Math.floor(Math.random()));
    letter.toUpperCase.charAt(numL);
}//upper Character picking function 

function wantNF(){
    var numL = numbers.length(Math.floor(Math.random()));
    numbers.charAt(numL);
}// nuber picking function 

function wantSCF(){
    var numL = specialChr.length(Math.floor(Math.random()));
    specialChr.charAt(numL);
}// special character picking function 

function randomGen(){
  if      (ranNum === 0){wantLCF();}
  else if (ranNum === 1){wantUCF();}
  else if (ranNum === 2){wantNF();}
  else {wantSCF();}
} //  random array to call on functions 

if (entryPrompt1 >= minPWL && entryPrompt1<= maxPWL) {
  pwd.length = entryPrompt1; 
} //This will make it so that the length will be this amount. 
else {
  alert ("Invalide response, please try reload and try again.");
  return null; 
} //asking users for length details 

var wantLC = confirm("Would you like to add LowerCase letters to your password?");
if (wantLC === true ){} else {wantLCF(ranNum = null);}
var wantUC = confirm("Would you like to add UpperCase letters to your password?");
if (wantUC === true){} else {wantUCF(ranNum = null);}
var wantN  = confirm("Would you like to add Numbers to your password?");
if (wantN === true){} else {wantNF(ranNum = null);}
var wantSC = confirm("Would you like to add Special Characters to your password?");
if (wantSC === true){} else {wantSCF(ranNum = null);}

function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = string; //object.value seems to return an array. 
}
generateBtn.addEventListener('click', writePassword)

for(i = 0; i <= pwd.length; i++)
{ var arr = [0,1,2,3];
  ranNum = arr.length(Math.floor(Math.random())); 
  pwd [i] = randomGen(ranNum);
  i++
}// generate pass word 
var string = pwd.toString();

