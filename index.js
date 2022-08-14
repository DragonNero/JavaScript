// var name = prompt("What is your name?");
// var newName = name.toUpperCase();
// var firstLetter = newName.slice(0,1);
// var restOfTheName = name.slice(1,name.length);
// restOfTheName = restOfTheName.toLowerCase();
// alert("Hello "+ firstLetter+restOfTheName+" !")
//

// humanAge = (dogAge - 2)*4 + 21
function isPositiveInteger(str) {
  if (typeof str !== 'string') {
    return false;
  }

  const num = Number(str);

  if (Number.isInteger(num) && num > 0) {
    return true;
  }

  return false;
}

var yourDogAge = prompt("What is the age of your dog?");
if (!isPositiveInteger(yourDogAge)) {
  alert("It must be a number");
}
var humanAgeOfTheDog = (yourDogAge -2)*4+21;
alert("The human age of your dog is " + humanAgeOfTheDog +" years.");




// var entered = tweet.length;
// var remained = 140 - tweet.length;
// if (tweet.length > 140) {
//   alert ("Your tweet is too big, we cutted first 140 characters: " + (tweet.slice(0, 139)));
// }
// else {
//   alert ("Your tweet's length is ok");
// }
