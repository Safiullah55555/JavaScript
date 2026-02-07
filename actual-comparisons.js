/*
====================================================
 ACTUAL BAD ? GOOD COMPARISONS
 (Strictly extracted from original learning file)
====================================================

RULE:
If it was NOT explicitly compared by the author,
it does NOT appear here.
*/


// <---------------- 1. IF / ELSE LOGIC STRUCTURE ---------------->

/*
? Earlier attempt (broken structure & logic)

Problems:
- else if placed incorrectly
- assignment used instead of comparison
- unreadable condition chaining
*/

/*
let name = "safi";
let age = 18;

if ( name === "safi" && age === 18 ) {
    console.log("Hello Safi");
   else if ( age === 18 && name != "safi"){
        console.log("you are 18 plus , but you are not allowed")
    }
    else if ( age > 18  && name = "safi"){
     console.log("you are 18 plus , you are allowed");
}
}
else if ( name != "safi" && age != 18 ||  name != "safi" && age > 18 ||  name != "safi" && age < 18 ){
    console.log("get out!")
}
*/


/*
? Corrected version (clear control flow)

Improvements:
- Proper nesting
- Valid if / else structure
- Clear decision branches
*/

let name = "shafeeq";
let age = 17;

if (name === "safi") {
  if (age === 18) {
    console.log("Hello Safi");
  } else if (age > 18) {
    console.log("you are 18 plus , you are allowed");
  } else {
    console.log("OK allowed !");
  }
} else {
  if (age === 18) {
    console.log("you are 18 , but you are not allowed");
  } else if (age > 18) {
    console.log("sorry bro");
  } else {
    console.log("get out");
  }
}


// <---------------- 2. GUESSING GAME LOOP CONTROL ---------------->

/*
? Earlier attempt

Problems:
- Hard-to-read condition
- Exit logic mixed into while condition
*/

const favMovie = "titanic";
let guess = prompt("guess fav movie");

/*
while ((guess != favMovie) && (guess != exit)) {
  guess = prompt("wrong guess try again");
}
*/


/*
? Improved version

Improvements:
- Infinite loop with explicit exit
- Clear break points
- Easier to reason about
*/

while (true) {
  guess = prompt("Guess my favorite movie (type 'exit' to quit)");

  if (guess === "exit") {
    console.log("You exited the game.");
    break;
  } else if (guess === favMovie) {
    console.log("You are correct!");
    break;
  } else {
    console.log("Wrong guess, try again!");
  }
}


// <---------------- 3. NUMBER GUESSING GAME (WITH HINTS) ---------------->

/*
? Earlier version

Problem:
- User only told "wrong"
- No guidance
*/

/*
else {
  guess = prompt("wrong guess try again");
}
*/


/*
? Improved version with hints

Improvement:
- User feedback
- Directional hints
*/

const max = prompt("enter the max number");
const random = Math.floor(Math.random() * max) + 1;
let numGuess = prompt("guess the number");

while (true) {
  if (numGuess === "quit") {
    console.log("user quit");
    break;
  } else if (numGuess == random) {
    console.log("congrats you are right");
    break;
  } else if (numGuess < random) {
    numGuess = prompt("number is smaller than guess");
  } else {
    numGuess = prompt("guess is bigger than number");
  }
}


// <---------------- 4. PROMISE CHAINING ? ASYNC / AWAIT ---------------->

/*
? Earlier approach

Issue:
- Readability decreases as chain grows
*/

function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

/*
savetoDB("safi")
  .then(() => savetoDB("talha"))
  .then(() => savetoDB("usman"))
  .catch((err) => console.log(err));
*/


/*
? Improved approach

Improvement:
- Sequential flow
- Looks synchronous
*/

async function saveAll() {
  try {
    await savetoDB("safi");
    await savetoDB("talha");
    await savetoDB("usman");
  } catch (err) {
    console.log("promise rejected", err);
  }
}


// <---------------- 5. ASYNC ERROR HANDLING ---------------->

/*
? Async logic without protection

Problem:
- Any rejection crashes flow
*/

/*
await changeccolor("blue",1000);
await changeccolor("red",1000);
*/


/*
? Protected async flow using try / catch

Improvement:
- Errors handled gracefully
*/

async function changeit() {
  try {
    await changeccolor("blue", 1000);
    await changeccolor("red", 1000);
    await changeccolor("green", 1000);
  } catch (err) {
    console.log("error caught");
    console.log(err);
  }
}
