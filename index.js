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


var you = prompt("What is your name?")
var heShe = prompt("What is his/her name?")

var n = Math.random();
console.log(n);

if (you === "Katia" && heShe ===  "Vincent") {
  n = 1;
}

var yourMatch = n*100;
alert("Your match is " + Math.round(yourMatch) + "%");
