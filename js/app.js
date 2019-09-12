'use strict'

var name = prompt('What is your name?');

alert('Hello ' + name + '!  Welcome to my bio! How about a quiz?');
console.log('Your name is ' + name + '.');

var finalScore = 0;

var kids = prompt('Yes or no: Do I have 5 kids?');

if (kids.toLowerCase() === 'yes' || kids.toLowerCase() === 'y') {
    alert('Yep! Crazy, right?');
    finalScore++;
} else if (kids.toLowerCase() === 'no' || kids.toLowerCase() === 'n') {
    alert('Wrong! I do indeed have 5 kids.');
} else {
    alert('Invalid Answer.');
}
console.log(name + ' guessed ' + kids + '. The correct answer is yes, I have 5 kids.');

var coffee = prompt('Yes or no: Do I like coffee?');

if (coffee.toLowerCase() === 'yes' || coffee.toLowerCase() === 'y') {
    alert('More like "Hell to the yes!"');
    finalScore++;
} else if (coffee.toLowerCase() === 'no' || coffee.toLowerCase() === 'n') {
    alert('Are you crazy? I am probably on cup 5!');
} else {
    alert('Invalid Answer.');
}
console.log(name + ' guessed ' + coffee + '. The correct answer is yes, Coffee is life.');

var travel = prompt('Yes or no: Have I been to Spain?');

if (travel.toLowerCase() === 'yes' || travel.toLowerCase() === 'y') {
    alert('Not yet! Goals!');
} else if (travel.toLowerCase() === 'no' || travel.toLowerCase() === 'n') {
    alert('Sad, right?');
    finalScore++;
} else {
    alert('Invalid Answer.');
}
console.log(name + ' guessed ' + travel + '. The correct answer is no, I have yet to go to Spain. :(');

var height = prompt('Yes or no: Am I afraid of heights?');

if (height.toLowerCase() === 'yes' || height.toLowerCase() === 'y') {
    alert('True, but for some reason I love scaring the shiz out of myself by jumping from high places.');
    finalScore++;
} else if (height.toLowerCase() === 'no' || height.toLowerCase() === 'n') {
    alert('Wrong answer, ' + name + '.');
} else {
    alert('Invalid Answer.');
}
console.log(name + ' guessed ' + height + '. The correct answer is yes, I am afraid of heights.');

var drums = prompt('Yes or no: Am I a drummer?');

if (drums.toLowerCase() === 'yes' || drums.toLowerCase() === 'y') {
    alert('Yep!');
    finalScore++;
} else if (drums.toLowerCase() === 'no' || drums.toLowerCase() === 'n') {
    alert('I have been playing since I was 12!');
} else {
    alert('Invalid Answer.');
}
console.log(name + ' guessed ' + drums + '. The correct answer is yes, I am a drummer');

var num = 6;
var numGuess = parseInt(prompt('I am thinking of a number between 1-10.  What is it?  You have 4 guesses!'));


for (var i = 0; i < 4; i++) {
    if (numGuess === num) {
        alert('Great guess!');
        finalScore++;
        break;
    }else if (numGuess > num) {
        numGuess = parseInt(prompt('Not quite! Too high. Try again.'));
    } else if (numGuess < num) {
        numGuess = parseInt(prompt('Not quite! Too low. Try again.'));
    } else {
        numGuess = parseInt(prompt('Invalid answer. Must be a number.  Try again.'));
    }
}
alert('The number is 6!');
console.log(name + ' guessed '+ numGuess + ' The correct answer is 6.');

var myAnswer = ['isabella', 'sophia', 'jackson', 'ali', 'ava'];

var guessNum = 0;
var whileStop = false;
var correct = false;
// 1 is less than or equal to 5 OR
// false === false
while (guessNum <= 5 && whileStop == false) {
    var guess = prompt('Can you guess any of my kids\' names?') // JOSIE
    guess = guess.toLowerCase(); // josie
    for (var c = 0; c < myAnswer.length; c++) {
        if (myAnswer[c] === guess) {
            alert('Congratulations!');
            whileStop = true;
            correct = true;
            finalScore++;
        }   
    }
    // if the answer is wrong....
    if(!correct){
        // They are on their last guess....
        if(guessNum === 5){
            alert('Wrong Answer. This message will self-destruct! (KAPOW!)')
        } // they still have guesses remaining.... 
        else{ 
            alert('wrong, try again');
        }
    }
    // incrament their guess count
    guessNum ++;
}

    alert('Congratulations!  Your final score is ' + finalScore + ' out of 7. Thanks for playing!');
