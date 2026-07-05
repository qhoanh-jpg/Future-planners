// ===============================
// FIND 5 DIFFERENCES GAME
// ===============================

let score = 0;
let hints = 3;
let time = 90;
let wrong = 0;
let timer;

// Elements
const scoreDisplay = document.getElementById("score");
const hintDisplay = document.getElementById("hints");
const timeDisplay = document.getElementById("time");
const message = document.getElementById("message");
const progress = document.getElementById("progressFill");

const buttons = document.querySelectorAll(".buttons button");

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

const hintBtn = document.getElementById("hintBtn");
const restartBtn = document.getElementById("restartBtn");
const playAgainBtn = document.getElementById("playAgain");

// ===============================
// Shuffle Answers
// ===============================

shuffleButtons();

function shuffleButtons(){

    const container = document.getElementById("buttonContainer");

    const arr = [...buttons];

    arr.sort(()=>Math.random()-0.5);

    arr.forEach(btn=>container.appendChild(btn));

}

// ===============================
// Start Timer
// ===============================

startTimer();

function startTimer(){

timer = setInterval(function(){

time--;

timeDisplay.innerHTML = time;

if(time<=20){

timeDisplay.style.color="orange";

}

if(time<=10){

timeDisplay.style.color="red";

}

if(time<=0){

clearInterval(timer);

gameOver();

}

},1000);

}

// ===============================
// Button Click
// ===============================

buttons.forEach(button=>{

button.addEventListener("click",function(){

if(button.disabled) return;

button.disabled=true;

const answer = button.dataset.answer;

if(answer==="true"){

button.classList.add("correct");

score++;

scoreDisplay.innerHTML=score;

updateProgress();

showSentence(button.innerText);

if(score===5){

winGame();

}

}else{

button.classList.add("wrong");

wrong++;

}

});

});

// ===============================
// Progress Bar
// ===============================

function updateProgress(){

progress.style.width=(score*20)+"%";

}

// ===============================
// Example Sentences
// ===============================

function showSentence(text){

let sentence="";

switch(text){

case "🌳 Green spaces":
sentence="✔ City A has more green spaces than City B.";
break;

case "🚌 Public transportation":
sentence="✔ Public transportation is better in City A.";
break;

case "🏫 School system":
sentence="✔ City A has a better school system.";
break;

case "🗑 Rubbish":
sentence="✔ There is less rubbish in City A.";
break;

case "🚗 Traffic jams":
sentence="✔ Traffic jams are much worse in City B.";
break;

default:
sentence="Correct!";
}

message.innerHTML=sentence;

}

// ===============================
// Hint
// ===============================

hintBtn.addEventListener("click",function(){

if(hints<=0) return;

const wrongButtons=[...buttons].filter(btn=>

btn.dataset.answer==="false" &&

!btn.disabled

);

if(wrongButtons.length===0) return;

const random=wrongButtons[Math.floor(Math.random()*wrongButtons.length)];

random.disabled=true;

random.style.opacity=".3";

random.style.cursor="default";

hints--;

hintDisplay.innerHTML=hints;

});

// ===============================
// Restart
// ===============================

restartBtn.addEventListener("click",restartGame);

playAgainBtn.addEventListener("click",restartGame);

function restartGame(){

location.reload();

}

// ===============================
// Win
// ===============================

function winGame(){

clearInterval(timer);

popup.style.display="flex";

popupTitle.innerHTML="🎉 Congratulations!";

popupText.innerHTML=

`
You found all 5 differences.<br><br>

⭐ Score: ${score}/5

<br><br>

❌ Wrong answers: ${wrong}

<br><br>

⏰ Time left: ${time} seconds
`;

launchConfetti();

}

// ===============================
// Time Over
// ===============================

function gameOver(){

buttons.forEach(btn=>btn.disabled=true);

popup.style.display="flex";

popupTitle.innerHTML="⌛ Time's Up!";

popupText.innerHTML=

`
You found ${score} of 5 differences.<br><br>

Try again!
`;

}

// ===============================
// Simple Confetti
// ===============================

function launchConfetti(){

for(let i=0;i<150;i++){

let conf=document.createElement("div");

conf.style.position="fixed";

conf.style.width="10px";

conf.style.height="10px";

conf.style.background=

`hsl(${Math.random()*360},100%,50%)`;

conf.style.left=Math.random()*100+"vw";

conf.style.top="-20px";

conf.style.borderRadius="50%";

conf.style.zIndex="9999";

conf.style.transition="all 4s linear";

document.body.appendChild(conf);

setTimeout(()=>{

conf.style.transform=

`translateY(${window.innerHeight+100}px)
rotate(${Math.random()*720}deg)`;

},50);

setTimeout(()=>{

conf.remove();

},4500);

}

}