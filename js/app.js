'use strict'

var name = prompt('What is your name?'); //Asks the user thier name.

alert('Hello ' + name + '!  Welcome to my bio! How about a quiz?'); //returns greeting to user
console.log('Your name is ' + name + '.');

var finalScore = 0; //begining of the score keeping tally to be calculated at the end of the ?s

var kids = prompt('Yes or no: Do I have 5 kids?');

if (kids.toLowerCase() === 'yes' || kids.toLowerCase() === 'y') {
    alert('Yep! Crazy, right?');
    finalScore++; //if answer is correct, score tally is increased by 1
} else if (kids.toLowerCase() === 'no' || kids.toLowerCase() === 'n') {
    alert('Wrong! I do indeed have 5 kids.');
} else {
    alert('Invalid Answer.'); //if user does not input correct options, 'invalid answer' is returned.
}
console.log(name + ' guessed ' + kids + '. The correct answer is yes, I have 5 kids.');
// this console.log statement keeps track of user answers and correct answers
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
//asks user to guess a number with 10 possible answers.

for (var i = 0; i < 4; i++) {//this specifies that the user has 5 chances to get this right.
    if (numGuess === num) {
        alert('Great guess!');
        finalScore++;
        break;  //if the guess is correct let the user know and end the code block.
    } else if (numGuess > num) {
        numGuess = parseInt(prompt('Not quite! Too high. Try again.'));
        //if the guess is too high, let the user know
    } else if (numGuess < num) {
        numGuess = parseInt(prompt('Not quite! Too low. Try again.'));
        // if the guess is too low, let the user know
    } else {
        numGuess = parseInt(prompt('Invalid answer. You must enter a number.  Try again.'));
    } // if the user inputs anything but a number, this is triggered.
}
alert('The number is 6!');
console.log(name + ' guessed ' + numGuess + ' The correct answer is 6.');

var myAnswer = ['isabella', 'sophia', 'jackson', 'ali', 'ava']; //an array of my kids names

var guessNum = 0; //guess counter
var whileStop = false;
var correct = false;

//if either of these statements do not equate to true, the loop will stop.
while (guessNum <= 5 && whileStop == false) {
    var guess = prompt('Can you guess any of my kids\' names?') // user inputs guess
    guess = guess.toLowerCase(); // this makes the user input not case sensitive.
    for (var c = 0; c < myAnswer.length; c++) { //this runs through each item in the array to check if it matches what the user input.
        if (myAnswer[c] === guess) {
            alert('Congratulations!');
            whileStop = true;
            correct = true;
            finalScore++; //if the user guesses correctly, whileStop changes to true and stops the loop from running again.  Score is increased by 1 and the correct condition for the next block of code is changed.
        }
    }
    if (!correct) { // if the answer is wrong. (not correct)
        if (guessNum === 5) { //if they are on the final guess, do this next line of code.
            alert('Wrong Answer. This message will self-destruct! (KAPOW!)')
        } // they still have guesses remaining.... 
        else {
            alert('wrong, try again');
        }
    }
    // incrament their guess count
    guessNum++;
}
alert('My kids names are ' + myAnswer + '.');//telling user the possible answers
console.log(name + ' guessed ' + guess + '. The correct answer is any of the following: ' + myAnswer + '.');

alert('Congratulations!  Your final score is ' + finalScore + ' out of 7. Thanks for playing!');
console.log('final score is ' + finalScore + ' out of 7.');
//tells user the final score and prints it to the console.