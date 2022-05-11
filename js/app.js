'use strict';

console.log('Howdy Partner!');

let answerZero = prompt('What is your name?');

alert('Welcome ' + answerZero + '!');

let answerOne = prompt('Am I over 30 years old?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y'  ){
  alert('You are correct!');
}
else if(answerOne === 'no' || answerOne ==='n'){
  alert('Sorry I am older.');
}

let answerTwo = prompt('Did I ever serve in the Military?').toLowerCase();

if(answerTwo === 'yes' || answerTwo === 'y'){
  alert('You are correct!');
}
else if(answerTwo === 'no' || answerTwo ==='n'){
  alert('Sorry that is incorrect.');
}

let answerThree = prompt('Do i play D&D').toLowerCase();

if(answerThree === 'yes' || answerThree === 'y'){
  alert('You are correct!');
}
else if(answerThree === 'no' || answerThree ==='n'){
  alert('Sorry that is incorrect.');
}

let answerFour = prompt('Do I play VideoGames?').toLowerCase();
if(answerFour === 'yes' || answerFour === 'y'){
  alert('You are correct!');
}
else if(answerFour === 'no' || answerFour ==='n'){
  alert('Sorry that is incorrect.');
}
 
let answerFive = prompt('Do I like to Hike?').toLowerCase();
if(answerFive === 'yes' || answerFive === 'y'){
    alert('You are correct!');}
  else if(answerFive === 'no' || answerFive ==='n'){
    alert('Sorry that is incorrect.');
  }