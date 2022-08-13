var name = prompt("What is your name?");
var newName = name.toUpperCase();
var firstLetter = newName.slice(0,1);
var restOfTheName = name.slice(1,name.length);
restOfTheName = restOfTheName.toLowerCase();
alert("Hello "+ firstLetter+restOfTheName+" !")






// var entered = tweet.length;
// var remained = 140 - tweet.length;
// if (tweet.length > 140) {
//   alert ("Your tweet is too big, we cutted first 140 characters: " + (tweet.slice(0, 139)));
// }
// else {
//   alert ("Your tweet's length is ok");
// }
