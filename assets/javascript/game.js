var wordList = [
	"aesthetic",
	"af",
	"basic",
	"extra",
	"lit",
	"no chill",
	"salty",
	"savage",
	"shade",
	"squad",
	"yaaaas",
];


var random = wordList[Math.floor(Math.random() * wordList.length)];
var sp;
var count = 0;
var wordBlank = [];
var right = 0;
var wrong = 0;

function startGame() {

	for (var i = 0; i < random.length; i++) {
		
		if (random[i] === " "){
		
		wordBlank[i] = "&nbsp;";
		
		} else {

			wordBlank[i] = "_";
		}
	}

	sp = wordBlank.join(" ");

	document.getElementById("word").innerHTML = sp;
	document.getElementById("wincount").innerHTML = "WINS" + " " + count;
	document.getElementById("man").style.visibility = "hidden";
}
console.log(random);

document.onkeyup = function(event) {

	var userGuess = event.key.toLowerCase();

		for (var i = 0; i < random.length; i++) {

			if (random[i] === userGuess) {

				wordBlank[i] = userGuess;

				right++;

			}
		}

		 //if (random[i] !== userGuess) {
		 	if(random.indexOf(userGuess) === -1){

				wrong++;
		
			}


			if (right === random.length) {
				document.getElementById("winorlose").innerHTML = "YAY!";
				count = 1;

			} 

			if (wrong === 1) {
			document.getElementById("head").style.visibility = "visible";
				
			} if (wrong === 2) {
			document.getElementById("arm").style.visibility = "visible";
				
			} if (wrong === 3) {
			document.getElementById("body").style.visibility = "visible";
				
			} if (wrong === 4) {
			document.getElementById("arm2").style.visibility = "visible";
				
			} if (wrong === 5) {
			document.getElementById("leg").style.visibility = "visible";
			
			} if (wrong === 6) {
			document.getElementById("leg2").style.visiblity = "visible"; 
			document.getElementById("winorlose").innerHTML = "YIKES";
			}

	document.getElementById("wincount").innerHTML = "WINS" + " " + count;	
	document.getElementById("word").innerHTML = wordBlank.join(" ");
}


	