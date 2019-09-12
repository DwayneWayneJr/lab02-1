'use strict'
//Asks the user thier name.
var name = prompt('What is your name?');

alert('Hello ' + name + '!  Welcome to my bio! How about a quiz?'); //returns greeting to user
console.log('Your name is ' + name + '.');
//begining of the score keeping tally to be calculated at the end of the ?s
var finalScore = 0; 

var kids = prompt('Yes or no: Do I have 5 kids?');

if (kids.toLowerCase() === 'yes' || kids.toLowerCase() === 'y') {
    alert('Yep! Crazy, right?');
    //if answer is correct, score tally is increased by 1
    finalScore++; 
} else if (kids.toLowerCase() === 'no' || kids.toLowerCase() === 'n') {
    alert('Wrong! I do indeed have 5 kids.');
} else {
    //if user does not input correct options, 'invalid answer' is returned.
    alert('Invalid Answer.');
}
// this console.log statement keeps track of user answers and correct answers
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
//asks user to guess a number with 10 possible answers.
var numGuess = parseInt(prompt('I am thinking of a number between 1-10.  What is it?  You have 4 guesses!'));
//this specifies that the user has 5 chances to get this right.
for (var i = 0; i < 4; i++) {
    if (numGuess === num) {
        alert('Great guess!');
        finalScore++;
        //if the guess is correct let the user know and end the code block.
        break;
        //if the guess is too high, let the user know
    } else if (numGuess > num) {
        numGuess = parseInt(prompt('Not quite! Too high. Try again.'));
        // if the guess is too low, let the user know
    } else if (numGuess < num) {
        numGuess = parseInt(prompt('Not quite! Too low. Try again.'));
    } else {
        // if the user inputs anything but a number, this is triggered.
        numGuess = parseInt(prompt('Invalid answer. You must enter a number.  Try again.'));
    }
}
alert('The number is 6!');
console.log(name + ' guessed ' + numGuess + ' The correct answer is 6.');

//an array of my kids names
var myAnswer = ['isabella', 'sophia', 'jackson', 'ali', 'ava'];
//guess counter
var guessNum = 0;
//if either of these statements (whileStop or correct) do not equate to true, the loop will stop.
var whileStop = false;
var correct = false;

while (guessNum <= 5 && whileStop == false) {
    // user inputs guess
    var guess = prompt('Can you guess any of my kids\' names?');
    // this makes the user input not case sensitive.
    guess = guess.toLowerCase();
    //this runs through each item in the array to check if it matches what the user input.
    for (var c = 0; c < myAnswer.length; c++) {
    //if the user guesses correctly, whileStop changes to true and stops the loop from running again.  Score is increased by 1 and the correct condition for the next block of code is changed.
        if (myAnswer[c] === guess) {
            alert('Congratulations!');
            whileStop = true;
            correct = true;
            c = myAnswer.length;
            finalScore++;
        }
    }
    // if the answer is wrong. (not correct)
    if (!correct) {
        //if they are on the final guess, do this next line of code.
        if (guessNum === 5) {
            alert('Wrong Answer. This message will self-destruct! (KAPOW!)')
        }
         // they still have guesses remaining.... 
        else {
            alert('Definitely wouldn\'t name my kid that. Try again');
        }
    }
    // increment their guess count
    guessNum++;
}
//telling user the possible answers
alert('My kids names are Isabella, Sophia, Jackson, Ali and Ava.');
console.log(name + ' guessed ' + guess + '. The correct answer is any of the following: ' + myAnswer + '.');

//tells user the final score and prints it to the console.
alert('Congratulations!  Your final score is ' + finalScore + ' out of 7. Thanks for playing!');
console.log('final score is ' + finalScore + ' out of 7.');
