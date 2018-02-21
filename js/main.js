console.log("The answer is: 'Run'");

//Let's get things started by making a variable to hold the user's name.
var roadToBabel = 0;
var userName = prompt("Who are you who seeks enlightment?"); 

function testSubmit() {

//First we check if the user answered 'enlightment'. If so, we add +1 to their score.
var quest01 = document.querySelector("input[name='enlightment']").value;
if (quest01 == "enlightment") {
	roadToBabel = roadToBabel + 1;
} else {
		roadToBabel = roadToBabel + 0;
	console.log("Failed01")
}

//We check if the user checked the correct answer[3], if so we add +1 to their score.
var quest02 = document.querySelector("input[name='chosen']:checked").value;

if (quest02 == 1) {
	roadToBabel = roadToBabel + 1;
} else {
	roadToBabel = roadToBabel + 0;
	console.log("Failed02")
}

//We check if the user checked the correct answer[3], if so we add +1 to their score.
var quest03 = document.querySelector("input[name='form']:checked").value;

if (quest03 == 1) {
	roadToBabel = roadToBabel + 1;
} else {
	roadToBabel = roadToBabel + 0;
	console.log("Failed03")
}

//We check if the user checked the correct answer[3], if so we add +1 to their score.
var quest04 = document.querySelector("input[name='daddy']:checked").value;

if (quest04 == 1) {
	roadToBabel = roadToBabel + 1;
} else {
	roadToBabel = roadToBabel + 0;
	console.log("Failed04")
}

//We check if the user checked the correct answer[3], if so we add +1 to their score.
var quest06 = document.querySelector("input[name='blue']:checked").value;

if (quest06 == 1) {
	roadToBabel = roadToBabel + 1;
} else {
	roadToBabel = roadToBabel + 0;
	console.log("Failed06")
}

//We check if the user checked the correct answer (a variation of "my ass"), if so we add +1 to their score.
var quest07 = document.querySelector("input[name='rectum']").value;

if (quest07 == "my ass" || "My Ass" || "My ass") {
	roadToBabel = roadToBabel + 1;
} else {
	roadToBabel = roadToBabel + 0;
	console.log("Failed07")
}

//We check if the user checked the correct answer (1), if so we add +1 to their score.
var quest08 = document.querySelector("input[name='mathy']").value;

if (quest08 == 1) {
	roadToBabel = roadToBabel + 1;
} else {
	roadToBabel = roadToBabel + 0;
	console.log("Failed08")
}

//We check if the user checked the correct answer (Run), if so we add +1 to their score.
var quest09 = document.querySelector("input[name='loggin']").value;

if (quest09 == "Run") {
	roadToBabel = roadToBabel + 1;
} else {
	roadToBabel = roadToBabel + 0;
	console.log("Failed09")
}

//We check if the user checked the correct answer[YES], if so we add +1 to their score.
var quest10 = document.querySelector("input[name='chosenOne']:checked").value;

if (quest10 == 1) {
	roadToBabel = roadToBabel + 1;
} else {
	roadToBabel = roadToBabel + 0;
	console.log("Failed10")
}


//Using getElementById, we check the results of the user's answers and output their results.
//Note: Originally I had tried (roadToBabel == 5 || 6 || 7) but that didn't work. So, I wrote them individually to get them to run properly. However, I'm still unsure if I used || incorrectly, of if the issue was with a different part of the code.
document.getElementById("button").onclick = function() {
	
	if (roadToBabel == 9) {
		location.href = "pass.html";
	} else if (roadToBabel == 8){
		location.href = "finalend01.html";
	} else if (roadToBabel == 7){
		location.href = "finalend01.html";
	} else if (roadToBabel == 6){
		location.href = "finalend01.html";
	} else if (roadToBabel == 5){
		location.href = "goodend01.html";
	} else if (roadToBabel == 4){
		location.href = "goodend01.html";
	}else if (roadToBabel == 1){
		location.href = "youtried.html";
	} else if (roadToBabel == 2){
		location.href = "goodend01.html";
	}else if (roadToBabel == 3){
		location.href = "goodend01.html";	
	} else {
		location.href = "badEnd01.html";
	}

}

}

//If username to make the person feel special.. else, for whatever reason, the result is null give the user a special message.
if (userName !== null) {
document.querySelector(".sacrifice").innerHTML = "Welcome, " + userName + ", to the beginning of you new life. Before we can begin your journey, we must test your soul and find the root of your impurities. This test, crafted by our most ENLIGHTENED scholars, will serve as the foundation of your rebirth.";
} else {
	document.querySelector(".sacrifice").innerHTML = "WELL, GOLLY, AREN'T YOU SPECIAL? You think you're SO cool, just because you refused to offer up your name. Well, guess what? We've got it covered, smart guy. That's right. WE(me) PLANNED IT OUT. SO, YOU CAN SIT YOUR TOOSHIE RIGHT THERE AND PARTAKE IN THIS ENLIGHTMENT TEST. WHO KNOW? YOU MIGHT LEARN SOMETHING. LIKE MANNERS!";
}

//location.href = "badEnd01.html";