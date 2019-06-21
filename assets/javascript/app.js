
var numCorrect = 0;
var contentDisplay = $("#questionDisplay");
var timeLeft = 5;
var gameTimer;

const questions = [
    {
        q: "Who was the very first black super to hit mainstream comics?",
        a: ["Black Panther", "Falcon", "Green Latern", "Luke Cage"],
        correct: "Black Panther"
    },
    {
        q: "Which color was the Hulk orignally printed in?",
        a: ["Green", "Black", "Gray", "Pink"],
        correct: "Gray"
    },
    {
        q: "What is Captain America's real name?",
        a: ["Steve Rogers", "Micheal Hammer", "Clark Kent", "Mattew Heart"],
        correct: "Steve Rogers"
    },
    {
        q: "Who is the fastest superhero?",
        a: ["Quicksilver", "Superman", "Flash", "Speedy"],
        correct: "Flash"
    },
    {
        q: "What year did the first Avenger movie come out?",
        a: ["2010", "2012", "2011", "2014"],
        correct: "2012"
    },
    {
        q: "What Bruce wayne's superhero name?",
        a: ["Hawk", "Batman", "Nightwing", "Darkwing"],
        correct: "Batman"
    },
    {
        q: "Who is the strongest?",
        a: ["Hulk", "Thor", "Captian Marvel", "Squirrel Girl"],
        correct: "Squirrel Girl"
    },
    {
        q: "Who played Ironman?",
        a: ["Robert Downey Jr", "Zane Thomas", "Christian Bale", "Mark Hamil"],
        correct: "Robert Downey Jr"
    },
    {
        q: "What is the color of Hal Jordan's ring?",
        a: ["Green", "Red", "Blue", "Yellow"],
        correct: "Green"
    },
    {
        q: "Which of these characters is a DC superhero?",
        a: ["Spawn", "Major X", "Blue Beetle", "Spider-man"],
        correct: "Blue Beetle"
    }


]

function renderQuestions(questions) {
    // alert('Rendering Questions!');

    var qDiv = $("<div>");
    var order = $("<ol>");

    for (var i = 0; i < questions.length; i++) {

        var list = $("<li>");
        list.text(questions[i].q);

        // console.log(questions[i].q)
        for (var j = 0; j < questions[i].a.length; j++) {
            // console.log(questions[i].a);
            var btn = $("<button>");
            var answer = questions[i].a[j];
            btn.text(answer).val(answer);
            list.append(btn);
        }

        order.append(list);
    }
    qDiv.append(order);
    $("#questionDisplay").append(qDiv);
}

function checkAnswer(userAnswer) {
    var correctAnswer;
    // loop through to compare the text of the label with the user answers
    // increment score counts appropriately
    for (var i = 0; i < questions.length; i++) {
        correctAnswer = questions[i].correct;
        //    console.log(correctAnswer)
        if (userAnswer === correctAnswer) {
            numCorrect++;
            console.log(numCorrect)
        }
        
    
    console.log(userAnswer);
}
}

function displayScore(numCorrect) {
    if(numCorrect === 10){
        // $('#winorlose').text("YOU WON!!");
        $("#score").text("Your score: " + numCorrect + "/ 10 You Won");

    }
    else if(numCorrect === 0){
        // $('#winorlose').text("LOSER!!!");
        $("#score").text("Your score: " + numCorrect + "/ 10 You Lost");

    }
    else{
        // $('#winorlose').text("Your did aight");
        $("#score").text("Your score: " + numCorrect + "/ 10 You did aight");

    }
}



function startTimer() {
   timeLeft=5
    $("#countdown").text("Time remaining: " + timeLeft);
    gameTimer = setInterval(function () {
        timeLeft--;
        $("#countdown").text("Time remaining: " + timeLeft);

        if (timeLeft === 0) {
            
            $("#countdown").empty();
            clearInterval(gameTimer);
            stopGame();
    
        }
    }, 1000)

}


function stopGame() {   
    contentDisplay.hide();
    displayScore(numCorrect);
}

function startGame() {
    contentDisplay
    $('#start-btn').hide();
    renderQuestions(questions);
    startTimer();
    $('div.Heading').append(contentDisplay);

}
function resetGame(){
    contentDisplay.show();
   
    
    // renderQuestions(questions);
    startTimer();
    numCorrect = 0;
    
    $('div.Heading').append(contentDisplay);

}



// Ensures HTML has rendered to page before logic is applied.
$(document).ready(function () {
    $('#start-btn').on('click', startGame);
    $('#reset-btn').on('click', resetGame);
   
   
    $('#questionDisplay').on('click', 'button', function () {
        var userAnswer = ($(this).attr('value'));
        checkAnswer(userAnswer);
    }); // event delegation

})
