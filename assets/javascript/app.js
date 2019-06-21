

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
            
            // btn.attr('data-answer', questions[i].a);

            list.append(btn);
        }
        $('input:btn').click(function() {
            
            $("#input").val(btn); 
            console.log(this)
            })

        order.append(list);
    }
    qDiv.append(order);
    $("#questionDisplay").append(qDiv);
}








function checkAnswer() {
    var correctAnswer;
    var userAnswer;
    var numCorrect = 0;
    var numIncorrect = 0;


    // loop through to compare the text of the label with the user answers
    // increment score counts appropriately
    for (var i = 0; i < questions.length; i++) {
        correctAnswer = questions[i].correct;
       console.log(correctAnswer)
      
        

        if (userAnswer === correctAnswer) {
            numCorrect++;

        } else if (userAnswer !== correctAnswer) {
            {
                numIncorrect++;
            }
        }
    }
    console.log(userAnswer);
}

function gameTimer() {
    var timeLeft = 30;
    $("#countdown").text("Time remaining: " + timeLeft);
    setInterval(function () {
        timeLeft--;
        $("#countdown").text("Time remaining: " + timeLeft);

        if (timeLeft === 0) {
            stopGame();
            $("#countdown").empty();
        }
    }, 1000)

}


function stopGame() {
    clearInterval();
   
    checkAnswer(q, a)
}
function startGame() {
    var contentDisplay = $("#questionDisplay");
    $(this).hide();
    renderQuestions(questions);
    gameTimer();
    checkAnswer();
    $('div.Heading').append(contentDisplay);

}



// Ensures HTML has rendered to page before logic is applied.
$(document).ready(function () {
    $('#start-btn').on('click', startGame);
    // if(gameTimer() === 0){
    //     //run stopGame();
    // }
})