'use strict'

var answer = confirm('Are you ready?')
if(answer === true){
    alert('Yay!');
} else {
    alert('Hurry!');
}

var lunch = confirm('Did you eat lunch?');
var hungry = confirm('Are you hungry?');

if (lunch && hungry){
    alert('Eat some more!');
} else {
    alert ('Good!');
}

var iceCream = ['chocolate', 'vanilla', 'strawberry'];
iceCream [1] = 'cherry';
console.log(iceCream);