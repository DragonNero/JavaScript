function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  var buyMilk = Math.floor(money/1.5);
  console.log("I will buy with this money "+ buyMilk +" bottles of milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return money % 1.5;  // Remainder of this division
}

let change = getMilk(4);
console.log("There is "+change+ " of change");


// function lifeInWeeks(age) {
//   var lifeInYears = (90 - age);
//   var lifeInDays = (lifeInYears * 365);
//   var lifeInWeeks = (lifeInYears * 52);
//   var lifeInMonths = (lifeInYears/12);
//   console.log("You have" + lifeInDays + " days, " +  lifeInWeeks + "weeks, and " + lifeInMonths +" months left. ");
// }

lifeInWeeks(31)
// Example Input
//
// e.g. If you are 56 years old:
//
// lifeInWeeks(56)
// Example Output
//
//
// Hint
var n = Math.random();
console.log(n);


var you = prompt("What is your name?");
var heShe = prompt("What is his/her name?");

var n = Math.random();
console.log(n);
var yourMatch = (n*100) + 1;

if (yourMatch > 80 ) {
  alert("Your match is " + Math.round(yourMatch) + "%. It's a miracle!");
}

if (yourMatch < 80 && yourMatch >= 30 ) {
  alert("Your match is " + Math.round(yourMatch) + "%. Bon!");
}

if (yourMatch < 30 ) {
  alert("Your match is " + Math.round(yourMatch) + "%. It's Ok. ");
  };



  function bmiCalculator (weight, height) {
  var BMI = Math.round(weight / (height*height) );
  if (BMI <18.5) {
  return "Your BMI is "+ BMI + ", so you are underweight."}

if (BMI > 18.5 && BMI < 24.9) {
  return "Your BMI is " + BMI + ", so you have a normal weight."}

if (BMI > 24.9) {
  return "Your BMI is " + BMI + ", so you are overweight."
} }

 bmiCalculator(65,1.6);




 function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);

let fruits = ["Apple", "Orange", "Plum"];


var guestList = ["Angela", "Josh", "Vincent", "Dragon", "Gui", "Marko"];
var you = prompt("What is your name?");
var yes = guestList.includes(you);
if (yes === true ) {
  alert("You are welcome ");
}
else {
  alert("Maybe next time ");
};

//

// fizzBuzz solution
var output = [];

function fizzBuzz() {
    output.push(output.length + 1);
    console.log(output);
}
fizzBuzz();

// fizzBuzz solution 2
let output = [];
let count = 1;

function fizzBuzz() {
  while(count<= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0 ) {
      output.push("Fizz");
    } else if (count % 5 === 0 ) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}

fizzBuzz();

var numberOfBottles = 99;
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
