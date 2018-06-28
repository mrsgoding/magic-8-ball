$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listOfAnswers = ["It is certain", "Without a doubt", "Ask again later", "Outlook not so good"];

$("#answer").hide();

//Answering function
magic8Ball.askQuestion = function(question) {

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

$("#answer").fadeIn(4000);

var randomNumber = Math.random();
console.log("var randomNumber = " + randomNumber);

var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
console.log("var randomNumberForListOfAnswers = " + randomNumberForListOfAnswers);

var randomIndex = Math.floor(randomNumberForListOfAnswers);
console.log("var randomIndex = " + randomIndex);

var answer = this.listOfAnswers[randomIndex];
console.log("var answer = " + answer);

$("#answer").text(answer);

console.log(question);
console.log(answer);

};

//Function for button
var onClick = function() {

    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

//wait half a second before showing prompt
    setTimeout (
      function() {
         //show prompt
         var question = prompt("ASK A YES/NO QUESTION!");
         $("#8ball").effect("shake");
         magic8Ball.askQuestion(question);
      }, 500);

};

$("#questionButton").click(onClick);

});
