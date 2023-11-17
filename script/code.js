
// let btnSubmit = document.querySelector('[data-submit]')
// // Create a function
// function displayMarks() {
//     let marks = +document.querySelector('[data-marks]').value
//     // Label's reference
//     let output = document.querySelector('[data-output]')
    // switch
//     switch (true) {
//         case marks < 50:
//             output.textContent =  `Sorry, but you failed. Try again next time`;
//         break;
//         case marks <= 59:
//             output.textContent =  `You passed`;
//         break;
//         case marks <= 69:
//             output.textContent =  `C+`;
//         break;
//         case marks <= 79:
//             output.textContent =  `Distinction`;
//         break;
//         case marks <= 89:
//             output.textContent =  `B+`;
//         break;
//         case marks <= 99:
//             output.textContent =  `A`;
//         break;
//         case marks == 100:
//             output.textContent =  `A+`;
//         break;
//         default:
//             output.textContent =  `You are a ghost`;
//         break;
//     }
// }
// btnSubmit.addEventListener('click', displayMarks)

//loops:for,whilr,for while,for in,for off

// ternary operator => ? :
// for(let i=0; i<= 10; i++) {
//         console.log(i);
//         if(i == 5){
//             break
//         }
    
        
//     }
    // console.log(i % 2 == 0 ? `${i} its an even number` : `${i} its an odd number`)
    // if(i % 2 == 0)

//break and continue difference
//

// let numbers = [12, 18, 11, 5, 8, 2];
// for(let i=0; i<= 18; i++){
//     console.log(i);
//     if(i == 18){
//         break
//     }
// }

// let numbers = [10, 9 ,8 ,6 ,7 ,13];
// console.log(numbers)
// for(let i=0; i<= 18; i++){
//     console.log(i)
// }

// let a = 3
// console.log(++a);
// console.log(a)


// for(let i = 0; i<=10; i++){
//     if(i == 5) {
//         continue
//     }
//     console.log(i)
// }



// let cnt = 0
// do{
//     console.log(cnt);
//     cnt++
// }while(cnt <=10)



// let numbers = [12, 18, 12, 11, 5, 18, 2, 8, 2];
// console.log(Array.from(new Set(numbers)));

// let unique = []
// numbers.forEach((number)=>{
//     if(!unique.includes(number)) {
//         unique.push(number);
//     }

// })


// for(let i =0; i<numbers.length; i++){
//     console.log
//     (`${i} => ${numbers[i]}`);
// }

// numbers.forEach((number)=>{
//     console.log(number);
// })

// numbers.forEach(display)
// function display(number) {
//     console.log(number);
// }

// numbers.forEach(display)
// function display(numbers){
    
// }


// for(let i in numbers) {
//     console.log(i, numbers[i]);
// }


//for of loop
// for(let number of numbers) {
//     console.log(number);
// }


// function constName() {
//     console.log("Name is Unathi");
// }
// constName()
    
// function constName(firstName) {
//     console.log(`firstName is ${firstName || 'Unathi'}`);

// }
// constName()
// constName("Seka")

//function expression
// let test =function(numb1, numb2) {
//     return numb1 + numb2
// }
// console.log(test(10, 11))

// (function(numb1, numb2) {
//     console.log(numb1 + numb2)
// })(3, 4)


//Object basics







//examples.
// function greeting() {
//     document.write("Hello there")
//     console.log("Hello there")
//     document.querySelector('#output'.style.backgroundColor = '#B4FBA1')
//     document.querySelector('#output').textContent = "from code.js"

// }

// setTimeout(
//     function(){
//         console.log("after 5 seconds")
//     },
//     5000
// )



//Challange
//Anonymous function

// let greeting = (funtion){
//     console.log("hello Unathi")
// }

// let addition = function(x, y) {
//     return x + y
// }
// console.log(addition(3, 2));

// (
//     function(x) {
//         console.log(x*x);
//     }
// )(2)

// setTimeout(
//     function(){
//         console.log("After 5 seconds");
//     },
//     5000
// )

//the below example will create an error,JS only hoist variable after it was decleared but not a function.
// multiplication(3, 2)
// let multiplication = function(x, y){
//     console.log(x*y);
// }

//Arrow function
//-for a single statement

// let calculateSalary=
// (reate, hrsWorked)=>
// console.log(rate * hrsWorked);
// calculateSalary(600, 40)

//-for more than one statement

// let calculateSalary= (rate, hrsWorked)=> {
//     if(hrsWorked > 0) {
//         console.log(rate * hrsWorked)
//     }
// }
// calculateSalary(600, 40)

//-immediately inviked arrow function

// ((firstName)=> {
//     console.log(`Hello ${firstname}`)
// })('Unathi')

//Recursive function  (calls itself and creates a loop)

// let cnt = 1
// function repeat(limit) {
//     if(cnt <= limit) {
//         console.log(cnt);
//         cnt++
//         repeat(limit)
//     }
// }
// repeat(10)

// function display() {
//     let numb1 = 9
//     console.log(`Inside of a function: ${numb1}`);
// }
// display()
// console.log(`Outside a function ${numb1}`);








// function repeat(limit) {
//     let cnt = 1;
//     if (cnt <= limit) {
//         console.log(cnt);
//         cnt++;
//         repeat(limit - 1); // Corrected the decrement operation here
//     }
// }

// repeat(10);

// let greeting = "Hello World";
// let spacedGreeting = greeting.split("").join(" ");

// console.log(spacedGreeting);







// let greeting = "Hello World";
// console.log(greeting.split(""))
// //Remove space before and after a string.
// console.log(greeting.trim('').split(''));





// let person = {
//     name: "Unathi",
//     age: "19",
//     occupation: "Web Developer"
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.occupation);

// setTimeout(
//     function(){
//         console.log("after 5 seconds")
//     },
//     5000
// )





// let calculateSalary=
// (rate,hrsWorked )=> 
// console.log(rate * hrsWorked);
// calculateSalary(600, 40)


// function add(first, second) {
//     return first+second
// }
// var sum = add(1, 2);
// alert (sum);

// function data(name, age) {
//     if (age < 24) {
//         return name + '!';
//     }else {
//         return name;
//     }
// }
// console.log(data)

// debugger
// console.log("Accesing a value");
// x = 3
// console.log(x);
// console.log("Create a variable");
// var x;




//Litteral object

// Literal object
// console.log("Object literal");
// let person = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// console.log(person);
// console.log("Object.create()");
// let smartPhone = Object.create(
//     {
//         make: "Samsung",
//         model: "A 51"
//     }
// )
// console.log(smartPhone);
// console.log("new keyword | Object constructor");
// let computer = new Object({
//     brand: "Dell",
//     amount: 18000
// })
// console.log(computer);



//factory function (allows us to create and return an object)
//when creating a variable we need to use a camelCase
//create a factory function
// function person(firstName, lastName, age, hrs, rate) {
//     return {
//         firstName, lastName, age, hrs, rate 
//     }
// }
// let person1 = person('Unathi', 'Gcetywa', 19, 40, 400)
// let person2 = person('Vuyiseka', 'Njovane', 26, 30, 500)
// console.log(person1);
// console.log(person2);

//constructure function allows us to create an object,then returns "this" (makes use of "this")
//we don't have to make use of "return this" because JS already knows that it is going to return when we use "this" to our functions.
//it starts with a PascalCase,the first character of every word must be a upperCase
function Laptop(make, amount) {
    this.make = make
    this.amount = amount
}
let laptop1 = new Laptop('HP', 18000)
let laptop2 = new Laptop('Dell', 20000)
console.log(laptop1);
console.log(laptop2);
console.log(laptop2 instanceof Object);