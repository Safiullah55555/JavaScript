/*let name = "safi";
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

// correct code ..............................

/* let name = "shafeeq";
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
} if (age > 18) {
    console.log("sorry bro");
}else {
    console.log("get out");
}
} */
// correct CODE.......................................

/*let firstName = prompt("enter first name : ");
let secondName = prompt("enter second name : ");
let fullName = `how are you dear ${firstName} ${secondName}`;

alert(fullName); */

//

//correct code .........................................

//for (let i = 3; i <=15 ; i = i + 3 )

/*let n = prompt("put number");
 n  = parseInt(n);

 for (let i = n*2; i <= n*3; i = i + n){
  console.log(i);
 }
 correct code .........................................
for( i = 1; i<= 4 ; i++){
  console.log(`part ${i}`);
  for  (let j = 1; j <= 4; j++){
console.log(j);
}}*/
// ....................................
// let s = 1;
//  while(s <= 20){
//   console.log(s);
//   s = s + 2;
//  }
//  "OR add this and remove console inside to get final answer only"
//  console.log(s);

// const favMovie = "titanic";
// let guess = prompt("guess fav movie");

// while((guess !=  favMovie) && (guess != exit)){
//   guess = prompt("wrong guess try again");
// }
// if (guess ==  favMovie){
//   console.log("you are correct");
// }
// if( guess != favMovie) {
//   console.log("you exit");
// }


//  const favMovie = "titanic";
//  let guess;

// while (true) {
//   guess = prompt("Guess my favorite movie (type 'exit' to quit)");
//   if (guess === "exit") {
//     console.log("You exited the game.");
//     break;
//   } else if (guess === favMovie) {
//     console.log("You are correct!");
//     break;
//   } else {
//     console.log("Wrong guess, try again!");
//   }
// }
// cha sheta derna harr kem,hahah 

// const cha_kapa_yee = "kapa";
// const cha_khushala_yee =  "khushala";

// let guess;

// while (true) {
  //   guess = prompt("T kapa ya ka khushala, kana zaa ?");
//     if (guess === "zem bass") {
//     console.log("zre ma n kha kagi, cha har s w kem.");
//     break;
//   } else if ((guess === cha_kapa_yee) || (guess === cha_khushala_yee)) {
  //     console.log("sokee soke t kapa ya ka khushala");
  //     break;
  //   } else{
    //     console.log("za bacha lare sha");
    //     break;
    //   }   
    //   }
    //  ...........correct code ....................................................
    
    // let student = [["talha jhon elia", 75], ["raheel khe alek",15], ["takadar",8]];
    
    // for(let i = 0 ; i <student.length ; i++) {
      //   console.log(`.amalnama of `)
      //   for (let j = 0 ; j <student[i].length; j++ ) {
        //     console.log(student[i][j]);
        //   }
        // }
        
        // correct code ..............................todo...............
        
        // correct code .............................................
// 
//  let college = {
//    student:{ 
//     name:"safi ullah",
//     age: 19,
//     college : "islamia",
//     school:"city",
//    },
//    teacher:{
//     name:"ibrar",
//     age:"55",
//     subject: "physics",
//     education: "PHD in nano tech",
//     post : "PHD scholar",
//    }
// };

//.........with array.........

// let classs = [
//   {
//     name:"safi",
//     age : 18,
//     grade: "O+",
    
//   },
//   {
    
//     name:"talha",
//     age : 18,
//     grade: "A+",
    
//   },
//     {
    
//     name:"muhamad",
//     age : 19,
//     grade: "O+",

//   },
// ];
// let doo = Math.floor(Math.random() * 10) + 1;

// console.log(Math.floor(Math.random() * 10) + 1); ............. corect

//.....................correct guess ...............

// const max = prompt("enter the max number");

// const random = Math.floor(Math.random() * max) + 1 ;

// let guess =  prompt("guess the number");
 
// while(true){
//   if ( guess == "quit"){
//     console.log("user quit");
//     break;
//   }
//   else if (guess == random){
//     console.log("congrates you are right");
//     break;
//   }
//   else{
//      guess  = prompt("wrong guess try again");

//   }
// } 

// ..............with hint ....................

// const max = prompt("enter the max number");

// const random = Math.floor(Math.random() * max) + 1 ;

// let guess =  prompt("guess the number");
 
// while(true){
//   if ( guess == "quit"){
//     console.log("user quit");
//     break;
//   }
//   else if (guess == random){
//     console.log("congrates you are right");
//     break;
//   } else if(guess < random){ ...// this is added .........
//     guess = prompt("numbrt is smaller than guess,please guess again");
//   } else {
//     guess = prompt("guess  is bigger than the number,please guess again");

//   }
//   // else{  ..... // removed........
//   //    guess  = prompt("wrong guess try again");

//   // }
// }
// .........................function ................................... we can also take ...
// let baw = function (n),, and so on
// function baw(n){
//   let sum = 0;
//   for(let i = 1 ;  i<=n ; i++){
//       sum += i; 
//     }
      
//     return sum;
//   }

// ............................

// function doo(func, count){// we play with both func and count count is organized in for ( condition)
//     for(let  i = 1 ; i <= count ; i++){  // 1.1 , this is doo engine and at the bottom it is called already ,
//       func();// this is call function and its a function of variable inside doo.
//     }
// }
//  let greet = function(){ // we are printing this ,, main engine,,greet is variable indicates func,and it canalso be func or whatever
//   console.log("heloo");
// }
// doo(greet, 5);// we are printhing main engine 5 times, greet is func and its output is heloo gona print 5 times,while doo is also function carring greet func inside it ,,look to 1.1
 
// let odd = function(n){
//   console.log(!(n%2 == 0));
// }

// let even = function(n){
//   console.log(n%2 == 0);
// }

// function evenOdd(request){
//   if(request == "odd"){
//     let odd = function(n){
//       console.log(!(n%2 == 0));
//     }
//     return odd;
//   }else if (request == "even"){
//     let even = function(n){
//       console.log(n%2 == 0);
//     }
//     return even;
//   }
//   else {
//     console.log("invalid request"); 
//   }

// }
//  let request = "even";

//......


// function evenOdd(request){
//   if(request == "odd"){
//     return function(n){ // replace with return
//       console.log(!(n%2 == 0));
//     }
    
//   }else if (request == "even"){
//     return function(n){
//       console.log(n%2 == 0);
//     }
    
//   }
//   else {
//     console.log("invalid request"); 
//   }

// }
//  let request = "even";


// arrow func............................and stop watch ........

// let sum = (a, b)  => a + b;
// let squ = (n)  => n*n;
// .....
// let id = setInterval(() => {
//   console.log("hooo");
// }, 2000);//  ....the above hoo will run after every 2 seconds. 

// setTimeout(()=>{
//   clearInterval(id)
// }, 10000);// ... the id will run for 10 second.with out this id will run infinite.(NOTE : all the set interval and timeout and clearinterval are FUNCTIONS)

// 
// ...................................
// let array =[1,2,4,5];

// array.forEach(
//   function print(el){
//     console.log(el)
//   }

// // ); "OR"
//  let arr = [1,2,4,5];
   
//  function print(el){
//   console.log(el)
//  };
//  arr.forEach(print); 

// .........................................

// let arr = [1,2,4,5];

// let square = arr.map((el)=>{return el*el});
// ..............................................

//  let nums = [1,2,3,4,5,6,7,8,9,10];
//  let check = nums.filter((el)=> {return  el%2 == 0});
// ..............................................

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
// ..........................................."last topics of day 21 is very important" ............



// .............."we do some code in: randome color project" .......................

// "in day 23 part 6 is done."

// let btn = document.querySelector("button");
// console.dir(btn);

// let clicked = () => { console.log("clicked"); alert("was clicked")};

// btn.onclick = clicked; // or in another form 

// too many btns.

// let btns = document.querySelectorAll("button");

// for(btn of btns) {
//   btn.onclick = clicked;
// }
// // if we use arrow function it must be on the top before explaining or assigning to btn.onclicked
// function clicked() {
//    console.log("clicked"); 
//    alert("was clicked");
//   }
// ................................event listners.......
//we need them to______ it replace ONclick etc function i.e

// let btn =  document.querySelectorAll("button");

// for(btns of btn ){
//   btns.addEventListener("click", function() { //here click is actully func ( __.onclick ETC), the function can be written seperate

//      alert("cleckerd");
//       console.log("cclick");
//     }) }

// let inp=  document.querySelector("input");

// inp.addEventListener("keydown", function(event){
//   console.log("key:",event.key);
//   console.log("code:",event.code);
//   console.log("key was pressed")
// }
// )

// ...........................................................

// let form = document.querySelector("form");


// form.addEventListener("submit", function(event){
//   event.preventDefault();//bcz we want to stay on the sam page.
  
//   let inp = document.querySelector("input");
//   console.dir(inp)
//   console.log(inp.value)
// })
// .....

// let form = document.querySelector("form");


// form.addEventListener("submit", function(event){
//   event.preventDefault();//bcz we want to stay on the same page.
  
//   let id = document.querySelector("#id");
//   let pass = document.querySelector("#pass");
  
//   console.log("ID:",id.value)
//   console.log("PASS:",pass.value)
// })
// ....................................

// let form = document.querySelector("form");


// form.addEventListener("submit", function(event){
//   event.preventDefault();//bcz we want to stay on the same page.
//   console.dir(form)

//   let id = this.elements[0] // or form.element[0]
//   let pass = this.elements[1]
  
//   console.log("ID:",id.value)
//   console.log("PASS:",pass.value)

//  alert(`Hi ${id.value} your passward is ${pass.value}`);
// })


// let type =  document.querySelector("#type");
// let p =  document.querySelector("p");

// type.addEventListener("input", function(){
//   console.log(type.value) //you can hide it.
//   p.innerText = type.value;
// }) 
// ......
// 

// promiss......... .............................

// function savetoDB(data){
//   return new Promise((resolve,reject)=>{
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if (internetSpeed > 4){
//       resolve("success:  data saved to DB")
//     }else{
//      reject("error: failed to save data to DB")
//     }

//   });
// }

// savetoDB("safi ullah")
//   .then((result)=>{
//     console.log("data1 saved");
//     console.log("result of promise:",result);
//     return  savetoDB("talha samad ");  
//   })
//   .then((result)=>{
//     console.log("data2 saved");
//     console.log("result of promise:",result);
//     return savetoDB("usman ghani")
//   })
//   .then((result)=>{
//     console.log("data saved");
//     console.log("result of promise:",result);
//     return savetoDB("shafeeq sahabzada")
//   })
//   .catch((error)=>{
//     console.log("promise is rejected/error")
//     console.log("error of promise:",error);
//   })
// .............................................................
// h1 = document.querySelector("h1")

// function changeccolor(color,delay){
//      return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         h1.style.color = color;
//         resolve("color changed")
//       },delay)
//      });
// }

// changeccolor("red",1000)
// .then(()=>{
//   console.log("red color was completed")
//   return changeccolor("orange",1000)
// })
// .then(()=>{
//   console.log("orange color was completed")
//   return changeccolor("blue",1000)
// })
// .then(()=>{
//   console.log("green color was completed")
//   return changeccolor("blue",1000)
// })
// .then(()=>{
//   console.log("blue color was completed")
//   // return changeccolor("blue",1000)
// });



// async function some(){
//   // throw"420 not found"
//   return "how are you"
// };
// some()
// .then((result)=> {
//   console.log("hello",result)
// })
// .catch((err)=>{
//   console.log("error",err)
// })

// let demo = async () =>{
//   return 5
// }
// ............................asyncs
// function getNum(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let num =  Math.floor(Math.random()*10) + 1;
//       console.log(num)
//       resolve()
//     },1000)
//   })
// }

// async function getnow(){
//   await getNum()
//   await getNum()
//   await getNum()
//   await getNum()
//         getNum();
// }


// now,,here is the thing.............>>>>>>>>>latest


// h1 = document.querySelector("h1")

// function changeccolor(color,delay){
//      return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         h1.style.color = color;
//         console.log(`color change to ${color} and delay is ${delay}`)
//         resolve("color changed")
//       },delay)
//      });
// }

// async  function changeit(){
//   await changeccolor("blue",1000)
//   await changeccolor("red",1000)
//   await changeccolor("green",1000)
//    changeccolor("brown",1000)
   
// }
// ............................................................close up....BUT..some times error so wee use try like..

// h1 = document.querySelector("h1")

// function changeccolor(color,delay){
//      return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         // we add this to get error , to handle it.
//         let num  = Math.floor(Math.random()*5) + 1;
//         if (num > 3){
//           reject("promise rejected")//we call reject from changeColor .
//         }

//         h1.style.color = color;
//         console.log(`color change to ${color} and delay is ${delay}`)
//         resolve("color changed")
//       },delay)
//      });
// }

// async  function changeit(){
//   try{//we wrap in try 
//   await changeccolor("blue",1000)
//   await changeccolor("red",1000)
//   await changeccolor("green",1000)
//    changeccolor("brown",1000)
//   }
//   catch(err){//we add catch to handle 
//    console.log("error catched")
//    console.log(err)
//   }
// };

// ..................final close up ..............

// speech recognixe ................................

// let element = document.getElementById("text")

// const recognition = new (window.speechRecognition || window.webkitSpeechRecognition );
// recognition.lang = "en-GB";
// recognition.continuous = true

// document.onclick = recognition.start();

// recognition.onresult = (e) => {
//     for(const result of event.results){
//          element.innerText = result[0].transcript;
//       }
//     };
  
