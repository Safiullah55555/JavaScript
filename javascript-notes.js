// <---------------- IF / ELSE & LOGICAL CONDITIONS ---------------->

/*
? Incorrect logic attempt (kept for comparison & learning)
let name = "safi";
let age = 18;
if ( name  === "safi" && age === 18 ) {
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

// ? Corrected logic version
/*
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
  } 
  if (age > 18) {
    console.log("sorry bro");
  } else {
    console.log("get out");
  }
}
*/


// <---------------- USER INPUT & TEMPLATE LITERALS ---------------->

/*
let firstName = prompt("enter first name : ");
let secondName = prompt("enter second name : ");
let fullName = `how are you dear ${firstName} ${secondName}`;
alert(fullName);
*/


// <---------------- LOOPS (FOR / WHILE / NESTED) ---------------->

/*
// for (let i = 3; i <=15 ; i = i + 3 )

let n = prompt("put number");
n = parseInt(n);

for (let i = n*2; i <= n*3; i = i + n){
  console.log(i);
}
*/

/*
for (let i = 1; i <= 4; i++) {
  console.log(`part ${i}`);
  for (let j = 1; j <= 4; j++) {
    console.log(j);
  }
}
*/

/*
let s = 1;
while (s <= 20) {
  console.log(s);
  s = s + 2;
}
// OR remove console inside to get final answer only
*/


// <---------------- WHILE LOOP GAMES ---------------->

/*
const favMovie = "titanic";
let guess = prompt("guess fav movie");

while ((guess != favMovie) && (guess != "exit")) {
  guess = prompt("wrong guess try again");
}

if (guess == favMovie) {
  console.log("you are correct");
}
if (guess != favMovie) {
  console.log("you exit");
}
*/

/*
Improved infinite-loop version
const favMovie = "titanic";
let guess;

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
*/
/*
 const cha_kapa_yee = "kapa";// const cha_khushala_yee =  "khushala";

// let guess;

 while (true) {
   guess = prompt("T kapa ya ka khushala, kana zaa ?");
     if (guess === "zem bass") {
    console.log("zre ma n kha kagi, cha har s w kem.");
     break;
  } else if ((guess === cha_kapa_yee) || (guess === cha_khushala_yee)) {
     console.log("sokee soke t kapa ya ka khushala");
  break;
  } else{
         console.log("za bacha lare sha");
 break;
     }   
  }
    */


// <---------------- ARRAYS & NESTED ARRAYS ---------------->

/*
let student = [
  ["talha samad loki", 75],
  ["raheel khe alek", 15],
  ["Aimal wali", 8]
];

for (let i = 0; i < student.length; i++) {
  console.log("amalnama of");
  for (let j = 0; j < student[i].length; j++) {
    console.log(student[i][j]);
  }
}
*/


// <---------------- OBJECTS ---------------->

/*
let college = {
  student: {
    name: "safi ullah",
    age: 19,
    college: "islamia",
    school: "city",
  },
  teacher: {
    name: "ibrar",
    age: "55",
    subject: "physics",
    education: "PHD in nano tech",
    post: "PHD scholar",
  }
};
*/


// <---------------- ARRAY OF OBJECTS ---------------->

/*
let classs = [
  { name: "safi", age: 18, grade: "O+" },
  { name: "talha", age: 18, grade: "A+" },
  { name: "muhammad", age: 19, grade: "O+" }
];
*/


// <---------------- MATH & RANDOM ---------------->

/*
let doo = Math.floor(Math.random() * 10) + 1;
console.log(Math.floor(Math.random() * 10) + 1);
*/


// <---------------- NUMBER GUESSING GAME ---------------->

/*
const max = prompt("enter the max number");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("guess the number");

while (true) {
  if (guess == "quit") {
    console.log("user quit");
    break;
  } else if (guess == random) {
    console.log("congrates you are right");
    break;
  } else if (guess < random) {
    guess = prompt("number is smaller than guess");
  } else {
    guess = prompt("guess is bigger than number");
  }
}
*/


// <---------------- FUNCTIONS ---------------->

/*
function baw(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
*/

/*
Higher-order function example
function doo(func, count) {// we play with both func and count count is organized in for ( condition)
  for (let i = 1; i <= count; i++) {// 1.1 , this is doo engine and at the bottom it is called already ,
    func();// this is called function and its a function of variable inside doo.
  }
}

let greet = function () {
  console.log("heloo");
};

doo(greet, 5);
*/


// <---------------- FUNCTION RETURNING FUNCTION ---------------->

/*
function evenOdd(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("invalid request");
  }
}
*/


// <---------------- ARROW FUNCTIONS & TIMERS ---------------->

/*
let sum = (a, b) => a + b;
let squ = (n) => n * n;

let id = setInterval(() => {
  console.log("hooo");
}, 2000);//  ....the uper hoo will run after every 2 seconds.

setTimeout(() => {
  clearInterval(id);
}, 10000);// ... the id will run for 10 second.with out this id will run infinite.(NOTE : all the set interval and timeout and clearinterval are FUNCTIONS)
*/


// <---------------- ARRAY METHODS ---------------->

/*
let arr = [1, 2, 4, 5];

arr.forEach(function print(el) {
  console.log(el);
});

let square = arr.map((el) => el * el);

let nums = [1,2,3,4,5,6,7,8,9,10];
let check = nums.filter((el) => el % 2 == 0);

//let red = [1,2,3,4];
// letreducie = red.reduce((res,el) => (res+el)); //..(0 + 1 = 1 ),(1 + 2 =3)...., (_ + _= 10)..(res,el)...its actuly sum off all numbers

// let arr = [1, 2, 3, 4, 11, 25, 38, 19, 40];

// let max = arr.reduce((res, el) => {
//   return Math.max(res, el);
// }, -Infinity); // initialize res to -Infinity
// .......wrong code down...
// console.log(max); // outputs 40
// let arr = [1, 2, 3, 4, 11, 25, 38, 19, 40];
// let max = arr.reduce((res,el)=>{
//   if ( el > max){
//     return  el;
//  } else{ return max;
// }
// });
// console.log(max);


*/


// <---------------- DOM EVENTS ---------------->

/*
let btn = document.querySelector("button");
btn.onclick = () => {
  console.log("clicked");
  alert("was clicked");
};
*/

/*
Multiple buttons
let btns = document.querySelectorAll("button");
for (btn of btns) {
  btn.onclick = clicked;
}
function clicked() {
  alert("was clicked");
}
*/


// <---------------- EVENT LISTENERS ---------------->

/*
let inp = document.querySelector("input");
inp.addEventListener("keydown", function (event) {
  console.log(event.key);
  console.log(event.code);
});
*/


// <---------------- FORMS ---------------->

/*
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let id = this.elements[0];
  let pass = this.elements[1];
  alert(`Hi ${id.value} your password is ${pass.value}`);
});
*/


// <---------------- PROMISES ---------------->

/*
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
*/


// <---------------- ASYNC / AWAIT ---------------->

/*
async function some() {
  return "how are you";
}
*/

/*
Color change using promises + async/await
*/


// <---------------- SPEECH RECOGNITION ---------------->

/*
let element = document.getElementById("text");

const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();

recognition.lang = "en-GB";
recognition.continuous = true;

document.onclick = recognition.start;

recognition.onresult = (event) => {
  for (const result of event.results) {
    element.innerText = result[0].transcript;
  }
};
*/


// <---------------- BEST PRACTICES (ALREADY USED) ---------------->

/*
 Learning via incorrect ? correct comparison
 Heavy use of comments for self-explanation
Strict equality (===)
Functions before advanced concepts
Gradual complexity increase
Reuse of logic with functions
Higher-order functions
Event listeners
Promise chaining
async / await
Real browser APIs usage
*/
