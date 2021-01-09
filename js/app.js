 
'use strict'

alert('Welcome to my page and let us see if you will know something about me');
alert('I will ask you 5 questions you can answer by yes/no let us start');
var score = 0;


var country=yesNo('I am from a country whose residents love Mansaf and they rarely laugh. Am I Jordanian?');

var gender= yesNo('I have the ability to laugh, cry, anger, be happy, love or hate you within 5 minutes Am I a female?');

var material= yesNo('I am very happy in my life and feel a lot of freedom and have a lot of free time, Am I married ?');

var university= yesNo('I studied in the jewel of Jordanian universities with the kindest doctors and many cooperating students, and I never got tired,  was I in JUST?');

var food= yesNo('Do you think I mentioned my favourit dish within one of the previous question ?');

var age= guessMyAge();

var favoriteCartoon= multiplechoiceq();


function yesNo(answer){
    var answer=prompt(answer);
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes' ){
        alert('Yes, you guess that!');
        score ++;
    }else {
        alert('No, That is wrong!');

    }
    return answer;

}

function guessMyAge() {
    var counter = 1;
    if (counter === 5) {
        alert('Sorry you run out of guesses');
    }
    while (counter < 5 && number !==24) {
        var number = parseInt(prompt('Guess my Age'));
        if (number > 24) {
            alert(' too high! Guess again');
            counter++;
        } else if (number < 24) {
            alert('too low! Guess again');
            counter++;
          
        }
    }
    alert('My age is 24 years old');
    if (number === 24) {
        alert('That is correct! My Age is 24!');
        score++;
        counter = 5;
    }
}


function multiplechoiceq() {
    var myFavCartoon = ['sally', 'remi', 'jodi', 'me and my sister', 'konan'];
    for (var i = 0; i < 6; i++) {
        var userAnsw = prompt('Can you guess my favorite cartoon?');
        var guess = userAnsw.toLowerCase();

        for (var j = 0; j < myFavCartoon.length; j++){
            if (guess === myFavCartoon[j]) {
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

alert('My favorite cartoons are : Sally, Remi,Jodi,Me and my sister, Konan');

alert('Good Job!... You got ' + score + ' correct answers!');

var name = prompt("We hope to know you more,Enter your name: ");

alert( name + ' it is a nice name welcome to my page, I am Baraah bsharat');

