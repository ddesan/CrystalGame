//Define the variables for the game
var win = 0;
var loose = 0;

var compScore;
var totalScore;

var crystalone;
var crystaltwo;
var crystalthree;
var crystalfour;

//When the window upload all the game resets
reset();

//Function to reset the variables when the game finish
function reset() {
    compScore = (Math.floor(Math.random() * 102) + 19);
    console.log(compScore);
    totalScore = 0;

    crystalone = (Math.floor(Math.random() * 12) + 1);
    console.log(crystalone);
    crystaltwo = (Math.floor(Math.random() * 12) + 1);
    console.log(crystaltwo);
    crystalthree = (Math.floor(Math.random() * 12) + 1);
    console.log(crystalthree);
    crystalfour = (Math.floor(Math.random() * 12) + 1);
    console.log(crystalfour);

    $("#computer").text(compScore);
    $("#player").text(totalScore);
};

//Game start when the user click on any image
$("#cOne").click(function (){
    totalScore += crystalone
    console.log(totalScore);
    $("#player").text(totalScore);
    console.log(totalScore);
    validation();
});

$("#cTwo").click(function (){
    totalScore += crystaltwo;
    $("#player").text(totalScore);
    validation();
});

$("#cThree").click(function (){
    totalScore += crystalthree;
    $("#player").text(totalScore);
    validation();
});

$("#cFour").click(function (){
    totalScore += crystalfour;
    $("#player").text(totalScore);
    validation();
});

//Function to validate if the SUM is equal to COMPUTER, if equal WIN++ else LOOSE++
function validation(){
    if (totalScore === compScore) {
        win++;
        alert("You Won!");
        $("#Wins").text("Wins: " + win);
        reset();
    }

    else if (totalScore >= compScore) {
        loose++;
        alert("You Loose!");
        $("#Losses").text("Losses: " + loose);
        reset();
    }
};