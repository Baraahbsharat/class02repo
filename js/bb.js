// Guess Question 6
function guessFavNumber() {
    var counter = 1;
    if (counter === 5) {
        alert('Sorry you run out of guesses');
    }
    while (counter < 5 && number !==33) {
        var number = parseInt(prompt('Guess my favorite number'));
        if (number > 33) {
            alert('You guessed too high! Guess again');
            counter++;
        } else if (number < 33) {
            alert('You guessed too low! Guess again');
            counter++;
        }
    }
    if (number === 33) {
        alert('That is correct! My favorite number is 33!');
        score++;
        counter = 5;
    }
}

guessFavNumber();

function questionSeven() {
    var userFavFruit = ['apple', 'strawberry', 'orange', 'grape', 'watermelon'];

    for (var i = 0; i < 6; i++) {
        var userAnsw = prompt('Can you guess my favorite fruit?');
        var guess = userAnsw.toLowerCase();

        for (var j = 0; j < userFavFruit.length; j++){
            if (guess === userFavFruit[j]) {
                alert('Congrats you got it right!!!');
                score++;
                i = 6;
                break;
            }
        }
        if (i !==6){
            alert('Sorry wrong answer, try again');
        }
    }
}

questionSeven();

alert('My favorite fruits are: apple, strawberry, orange, grape and watermelon');

alert('Good Job!... You got ' + score + ' correct answers!');