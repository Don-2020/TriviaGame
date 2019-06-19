// alert('Im linked!');

// $('#start-btn').on('click', function() {
//     alert('Im linked!');
// })

// questions[0] >>>>> { q: , a: }
// questions[0].q >>>>>> the sky is blue

let gameTimer;

const questions = [
    {
        q: "The sky is blue.",
        a: true
    },
    {
        q: "The grass is green.",
        a: true
    },
    {
        q: "The world is flat.",
        a: false
    }
]

function renderQuestions() {
    // alert('Rendering Questions!');

    let $ol = $("<ol>");

    for (let i = 0; i < questions.length; i++) {

        let $li = $('<li>');
        $li.text(questions[i].q);

        let $trueButton = $("<button>");
        $trueButton.text('true');
        $trueButton.attr('data-answer', questions[i].a);
        $trueButton.attr('data-value', 'true')
        $li.append($trueButton);

        let $falseButton = $("<button>");
        $falseButton.text('false');
        $falseButton.attr('data-answer', questions[i].a);
        $falseButton.attr('data-value', 'false');
        $li.append($falseButton);

        $ol.append($li);
    }

    $('.questions').append($ol);
    
}

function stopGame() {
    alert('Game is stopped!')
    clearTimeout(gameTimer);
    
}

// Ensures HTML has rendered to page before logic is applied.
$(document).ready(function() {

    $('#start-btn').on('click', function() {
        $(this).hide();
        renderQuestions();
        gameTimer = setTimeout(stopGame, 5000);
    });


})