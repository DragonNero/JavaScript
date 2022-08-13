var tweet = prompt("Your tweet");
tweet.length;
var entered = tweet.length;
var remained = 140 - tweet.length;
if (tweet.length > 140) {
  alert ("Your tweet is too big, we cutted first 140 characters: " + (tweet.slice(0, 139)));
}
else {
  alert ("Your tweet's length is ok");
}
