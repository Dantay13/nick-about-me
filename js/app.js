'use strict';

let count = 0;

function askAgain(entry){
  while(!entry){
    entry = prompt('Let\'s try that again? Shall we?');
  }
  return entry;
}

let userName = prompt('What is your name?');
askAgain(userName);
console.log('user name',userName);
alert('Welcome to my website ' + userName + ', It\'s so nice to have you here. I\'d love to ask you a few questions. Please answer Yes or No to the following questions.');



let answer1 = prompt('Do you think I\'ve lived in more than 6 states? Yes or No or y/n.');
answer1 = askAgain(answer1);

console.log('Q1 Answer: ', answer1);
answer1 = answer1.toLowerCase();
if(answer1 === 'yes' || answer1 === 'y'){
  alert ('Thats correct! I\'ve lived in 7 States. Florida, Illinois, Maryland, New York, Rhode Island, Boston & Washinton.');
  count = count + 1;
}
else if(answer1 === 'no' || answer1 === 'n'){
  alert('I\'ve lived in 7 States. Florida, Illinois, Maryland, New York, Rhode Island, Boston & Washinton.');
}
else {
  alert('Thats not a valid answer.');
}

let answer2 = prompt('Do you think I\'ve ever skydived before? Yes or No or y/n.');
answer2 = askAgain(answer2);
console.log('Q2 Answer: ', answer2);
answer2 = answer2.toLowerCase();
if(answer2 === 'yes' || answer2 === 'y'){
  alert ('Absolutely not that\'s terrifying.');
}
else if(answer2 === 'no' || answer2 === 'n'){
  alert('I see you also like two feet on the ground. Good choice');
  count = count + 1;
}
else {
  alert('Thats not a valid answer.');
}

let answer3 = prompt('Do you think I\'ve ever been published? Yes or No or y/n.');
answer3 = askAgain(answer3);
console.log('Q3 Answer: ',answer3);
answer3 = answer3.toLowerCase();
if(answer3 === 'yes' || answer3 === 'y'){
  alert ('I am currently working on it, but I\'m not published yet, I\'ll let you know when my fantasy novel is complete and up.');
}
else if(answer3 === 'no' || answer3 === 'n'){
  alert('Good Guess! I am currently working on it, but I\'m not published yet, I\'ll let you know when my fantasy novel is complete and up.');
  count = count + 1;
}
else {
  alert('Thats not a valid answer.');
}

let answer4 = prompt('Have I ever taken coding classes before? Yes or No or y/n.');
answer4 = askAgain(answer4);
console.log('Q4 Answer: ',answer4);
answer4 = answer4.toLowerCase();
if(answer4 === 'yes' || answer4 === 'y'){
  alert ('I actually have, I took a few classes at South Seattle College during the pandemic. Great guess!');
  count = count + 1;
}
else if(answer4 === 'no' || answer4 === 'n'){
  alert('Good guess, but I actually have, I took a few classes at South Seattle College during the pandemic.');
}
else {
  alert('Thats not a valid answer.');
}

let answer5 = prompt('Do you think I got married by the water? Yes or No or y/n.');
answer5 = askAgain(answer5);
console.log('Q5 Answer: ',answer5);
answer5 = answer5.toLowerCase();
if(answer5 === 'yes' || answer5 === 'y'){
  alert ('I have almost always lived by the water but I actually got married at the base of Mt Tahoma(Mt Rainier) in the woods.');
}
else if(answer5 === 'no' || answer5 === 'n'){
  alert('Great guess, I got married at the base of Mt Tahoma(Mt Rainier) in the woods.');
  count = count + 1;
}
else {
  alert('Thats not a valid answer.');
}

// Look at this and think about a while loop or why this one isn't scanning through. 
//
let answer6 = 4;
for(let i = 0; i < 4; i++){
  let guess6 = prompt('I know you are getting tired of this, but we only have one more question left. I need you to guess a number between 1 and 10. You get 4 guesses to get it right.');
  guess6 = askAgain(guess6);
  if (guess6 < answer6){
    alert('You guessed a little low. Try again');
  }
  else if(guess6 > answer6){
    alert('You guessed a little high. Try again');
  }
  else{
    alert(answer6 + ' was correct. Congrats you guessed it correctly!');
    count = count + 1;
    break;
  }
}


//Count tally
if(count >= 4){
  alert('Great job on the Quiz ' + userName + '! You got ' +count+ '/6!');
}
else if (count === 3){
  alert('Nice job on the Quiz ' + userName + ', you got ' +count+ '/6!');
}
else if (count === 1 || count === 2){
  alert('You didn\'t do so well on the Quiz ' + userName + ', you got ' +count+ '/6.');
}
else{
  alert('Well a ' +count+ '/6, I\'m not even mad ' + userName + '!, I\'m impressed');
}


// Stack Overflow helped with building this
const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/7008');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    audio.play();
  });
});
