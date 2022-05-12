'use strict';

console.log('Howdy Partner!');

function q6() {
let answerZero = prompt('What is your name?');

alert('Welcome ' + answerZero + '!');

let score = 0;
let answerOne = prompt('Am I over 30 years old?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  alert('You are correct!');
  score++;
}
else if (answerOne === 'no' || answerOne === 'n') {
  alert('Sorry I am older.');
}

let answerTwo = prompt('Did I ever serve in the Military?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('You are correct!');
  score++;
}
else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Sorry that is incorrect.');
}

let answerThree = prompt('Do i play D&D').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  alert('You are correct!');
  score++;
}
else if (answerThree === 'no' || answerThree === 'n') {
  alert('Sorry that is incorrect.');
}

let answerFour = prompt('Do I play VideoGames?').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
  alert('You are correct!');
  score++;
}
else if (answerFour === 'no' || answerFour === 'n') {
  alert('Sorry that is incorrect.');
  score++;
}

let answerFive = prompt('Do I like to Hike?').toLowerCase();
if (answerFive === 'yes' || answerFive === 'y') {
  alert('You are correct!');
  score++;
}
else if (answerFive === 'no' || answerFive === 'n') {
  alert('Sorry that is incorrect.');
}

let GuessingGame = prompt('How much Bacon do I have? Pick a numnber 1-100');
let correctAnswer = 55;
let attempts = 5;

for (let i = 0; i < attempts; i++) {
  while (GuessingGame < 1 || GuessingGame > 100) {
    GuessingGame = prompt('Please try again...! Pick again.');
  }
  if (GuessingGame == correctAnswer) {
    alert('WE HAVE A WINNER!!');
    document.write('The Champ!');
    score++;
    break;
  }
  else if (GuessingGame > correctAnswer) {
    GuessingGame = prompt('Sorry too high. Try again.');
  }
  else if (GuessingGame < correctAnswer) {
    GuessingGame = prompt('Sorry too low. Try again.');
  }
  if (i === 4) {
    alert('sorry no dice.');
  }
}


let MyArr = ['tasty', 'red', 'fruit'];
let attemptsOne = 6;

for (let t = 0; t < attemptsOne; t++) {
  let GuessingGameOne = prompt('what is a apple').toLowerCase();
  for (let a = 0; a < MyArr.length; a++) {
    if (GuessingGameOne === MyArr[a]) {
      alert('WE HAVE A WINNER!!');
      score++;
      t = 6;
      break;
    }
  }
}
alert('answer were tasty, red, and fruit');

alert('score = '+ score + '/7');

}

q6();