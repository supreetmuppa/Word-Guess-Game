
//globals
var word = ["Zedd", "Chainsmokers","Blink 182","Beatles","Nirvana"];
var actualWord = "";
var letters= [];
var output = [];
var wrongLetters = [];

var num = 0;
var guessesLeft = 12;
var losses = 0;
var wins= 0;


function gameStart() {
  actualWord = word[Math.floor(Math.random() * word.length)];
  letters = actualWord.split("");
  num = letters.length;
  console.log(gameStart)

  // console.log(num);
  // console.log(letters);
  // console.log(actualWord)

  guessesLeft = 12;
  wrongLetters = [];
  output = [];

  for(var i = 0; i < num; i++) {
    output.push("_")
    console.log(output)
  }
         
  document.getElementById("secretAnswer").innerHTML = output.join(" ");
  document.getElementById("game").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;

};
  

function checkAnswer (letter) {

var letterInWord = false;

for(var j = 0; j < num; j++) {

  if (letter == actualWord[j]) {
    letterInWord = true;
  }
}

if (letterInWord) {
  for(var j = 0; j < num; j++) {
    if (actualWord[j] == letter) {
      output[j] = letter;
      console.log(output)
    }         
  }
} else {
    wrongLetters.push(letter);
    guessesLeft--;
}

};


gameStart();


function rounds() {
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("answersGuessed").innerHTML = wrongLetters;
document.getElementById("secretAnswer").innerHTML = output.join(" ");
document.getElementById("button") .addEventListener("click", userguess);
 
if(letters.toString() == output.toString()) {
  wins++
  document.getElementById("game").innerHTML = wins;
  play();
} else if (guessesLeft===0) {
    losses++
    document.getElementById("losses").innerHTML = losses;
    gameStart();
}
};

//event listener
document.onkeypress = function(event) {
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
console.log(userGuess);
checkAnswer(userGuess);
rounds();
};


//music works!

function play(){
if (actualWord=="Zedd"){
   var picture = "<img src='/Users/supreetmuppavarapu/Desktop/Word-Guess-Game/assets/images/A12L7td6VYL._CR0,0,3840,2880_._SL1000_.jpg'>"
  document.querySelector("#picture").innerHTML = picture; 
  gameStart();
} else if (actualWord == "Chainsmokers") {
    var picture = "/Users/supreetmuppavarapu/Desktop/Word-Guess-Game/assets/images/download 2.jpeg'>"
    document.querySelector("#picture").innerHTML = picture;               
    gameStart();
} else if (actualWord == "Blink 182") {
    var picture = "/Users/supreetmuppavarapu/Desktop/Word-Guess-Game/assets/images/download (1).jpeg'>"
    document.querySelector("#picture").innerHTML = picture; 
    gameStart();
} else if (actualWord.toString() == "Beatles") {
    var picture = "/Users/supreetmuppavarapu/Desktop/Word-Guess-Game/assets/images/2016%2F06%2F17%2Fad%2F482bf1ae3cdb4fab8644076aedb99e13.94ae4.jpg'>"
    document.querySelector("#picture").innerHTML = picture; 
    gameStart(); 
} else if (actualWord== "Nirvana") {
    var picture = "<img src='/Users/supreetmuppavarapu/Desktop/Word-Guess-Game/assets/images/download.jpeg'>"
    document.querySelector("#picture").innerHTML = picture; 
    gameStart();       
}

};
// //end
