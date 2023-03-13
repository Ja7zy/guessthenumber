const secretNmuberEl = document.querySelector(".number");
const checkBtnEl = document.querySelector(".check");
const guessInputEl = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const resetBtnEL = document.querySelector(".again");
const containerEl = document.querySelector(".container");

// initialize all values and generating a random number btw 1 and 20

let score, highscore, secretNumber, playing;
highscore = 0;

const displayMessage = function (message) {
  messageEl.textContent = message;
};

const init = function () {
  playing = true;
  score = 20;
  scoreEl.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  containerEl.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  secretNmuberEl.style.width = "10rem";
  guessInputEl.value = "";
  secretNmuberEl.textContent = "?";
  document.querySelector(".overlay").classList.add("hidden");
  document.querySelector(".game-over").classList.add("hidden");
};
init();

checkBtnEl.addEventListener("click", function () {
  if (playing) {
    let guess = Number(guessInputEl.value);
    if (!guess) {
      messageEl.textContent = "Enter a number between 1 and 20 to start!";
    } else if (guess === secretNumber) {
      secretNmuberEl.textContent = secretNumber;
      displayMessage("🎉 Correct Number");
      containerEl.style.backgroundColor = "rgba(96, 179, 71, 0.4)";
      secretNmuberEl.style.width = "15rem";
      if (score > highscore) {
        highscore = score;
        highscoreEl.textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      score--;
      scoreEl.textContent = score;
      displayMessage(`${guess > secretNumber ? "📈 Too high" : "📉 Too low"}`);
      if (score < 1) {
        playing = false;
        score = 0;
        displayMessage("😢 Game Over");
        scoreEl.textContent = score;
        guessInputEl.value = "";
        document.querySelector(".overlay").classList.remove("hidden");
        document.querySelector(".game-over").classList.remove("hidden");
      }
    }
  }
});

console.log(secretNumber);

resetBtnEL.addEventListener("click", init);
