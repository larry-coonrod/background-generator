var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");
console.log(random);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function isUserValid(bool) {
	return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer =
"Your account # is "
+ (isUserValid(false)? "1234" : "not available");



function moveCommand(direction){
	var whatHappens;
	switch(direction){
		case "forward": 
		whatHappens = "You encounter a monster";
		break;

		case "forward": 
		whatHappens = "You encounter a monster";
		break;

		case "forward": 
		whatHappens = "You encounter a monster";
		break;

		case "forward": 
		whatHappens = "You encounter a monster";
		break;
		default:
		whatHappens = "Please enter a valid direction";
	}
	return whatHappens;
} 



// random code generator:
// 'rgb(' + (Math.floor(Math.random() * 256))
// + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';