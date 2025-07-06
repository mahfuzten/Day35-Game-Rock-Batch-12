(function () {
  const playerScore = document.getElementById("player-score");
  const computerScore = document.getElementById("computer-score");
  const btnChoice = document.querySelectorAll("choce-btn");
  const resetBtn = document.getElementById("reset");
  let result = document.getElementById("result");
  const choiceButtons = document.querySelectorAll(".choice-btn");
  let countP = 0;
  let countC = 0;

  function rockScissorPaper(playerChoice) {
    const things = ["rock", "paper", "scissors"];
    const computerRandomChoice = things[Math.floor(Math.random() * 3)];

    if (playerChoice === computerRandomChoice) {
      result.textContent = "It's a draw!";
    } else if (playerChoice === "rock" && computerRandomChoice === "scissors") {
      result.textContent = "You wins!. Rock beats Scissors.";
      countP++;
    } else if (playerChoice === "paper" && computerRandomChoice === "rock") {
      result.textContent = "You wins!. Papper beats Rock.";
      countP++;
    } else if (
      playerChoice === "scissors" &&
      computerRandomChoice === "paper"
    ) {
      result.textContent = "You wins!. Scissors beats Papper.";
      countP++;
    } else if (computerRandomChoice === "rock" && playerChoice === "scissors") {
      result.textContent = "Computer wins!. Rock beats Scissors.";
      countC++;
    } else if (computerRandomChoice === "paper" && playerChoice === "rock") {
      result.textContent = "Computer wins!. Papper beats Rock.";
      countC++;
    } else if (
      computerRandomChoice === "scissors" &&
      playerChoice === "paper"
    ) {
      result.textContent = "Computer wins!. Scissors beats Papper.";
      countC++;
    }
    // else {
    //   result.textContent = "Computer wins!";
    //   countC++;
    // }
    playerScore.textContent = countP;
    computerScore.textContent = countC;
  }
  function resetGame() {
    countP = 0;
    countC = 0;
    result.textContent = "";

    playerScore.textContent = 0;
    computerScore.textContent = 0;
  }

  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerChoiceI = button.getAttribute("data-choice");
      rockScissorPaper(playerChoiceI);
    });
  });

  resetBtn.addEventListener("click", () => {
    resetGame();
  });
})();
