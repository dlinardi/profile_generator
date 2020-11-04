const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = [
  'What\'s your name? Nicknames are also acceptable :)?',
  'What\'s your favourite hobby?',
  'What do you listen to while doing that?',
  'Which meal is your favourite (eg: dinner, brunch, etc.)',
  'What\'s your favourite thing to eat for that meal?',
  'Which sport is your absolute favourite?',
  'What is your superpower? In a few words, tell us what you are amazing at!',
];

let person = {};
let assignAnswer = {
  0: 'name',
  1: 'hobby',
  2: 'music',
  3: 'favMeal',
  4: 'favFood',
  5: 'sport',
  6: 'superpower'
};

const printDescription = () => {
  console.log(`${person.name} loves listening to ${person.music} while ${person.hobby}, devouring ${person.favFood} for ${person.favMeal}, prefers ${person.sport} over any other sport, and is amazing at ${person.superpower}.`)
};

let questionCount = 0;

// used recursion to iterate through questions and assign
// keys/values to person object.

const recursivelyReadLine = () => {

  // new question each time function is called recursively,
  // questionCount is incremented by 1 and next question will be
  // asked to user

  let question = questions[questionCount];

  rl.question(`${question} `, (answer) => {

    // using assignAnswer object, when questionCount
    // matches a key in assignArray, take that keys value
    // and create a new key/value pair in person object using
    // the answer that the user inputs based on each question.

    person[assignAnswer[questionCount]] = answer;
    
    // increment our question counter each time function is called recursively.
    questionCount++;

    // call function again nested within rl.question's callback function
    

    if (questionCount > questions.length - 1) {
      // once questions are done 
      rl.close();

      printDescription();
    } else {
      recursivelyReadLine();
    }
  });
};

recursivelyReadLine();