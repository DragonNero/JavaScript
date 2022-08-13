var tweet = prompt("Your tweet");
tweet.length;
var entered = tweet.length;
var remained = 280 - tweet.length;
alert("You entered " + tweet.length + " characters, " + remained + " characters remained." );
