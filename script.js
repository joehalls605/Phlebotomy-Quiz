const questions = [
  // ... (unchanged)
];

let currentQuestionIndex = 0;
const score = 0;

// Function to load a new question and hide the hint
function loadQuestion() {
const currentQuestion = questions[currentQuestionIndex];
const questionElement = document.getElementById("question");

// Display the question and hide the hint
if (currentQuestion) {
  questionElement.textContent = currentQuestion.question;
  hideHint();
} else {
  questionElement.textContent = "No more questions";
  hideHint();
}
}

// Function to display the final score
function gameOver() {
const finalScore = `Your final score is ${score}`;
const finalScoreElement = document.getElementById("game-over");
finalScoreElement.textContent = finalScore;
}

// Function to show the hint for the current question
function showHint() {
const currentQuestion = questions[currentQuestionIndex]
const hintElement = document.getElementById("hint-text");
hintElement.textContent = currentQuestion.hint;
}

// Function to hide the hint
function hideHint() {
const hintElement = document.getElementById("hint-text");
hintElement.textContent = "";
}

// Function to check the user's answer
function checkAnswer() {
const userAnswer = document.getElementById("answerInput").value.trim();
const currentQuestion = questions[currentQuestionIndex];

// Check if the answer is correct
if (userAnswer === currentQuestion.correctAnswer.trim()) {
  alert("Correct!");
  score++;
} else {
  alert(`Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`);
}

currentQuestionIndex++;

// Load the next question or end the game
if (currentQuestionIndex < questions.length) {
  loadQuestion();
} else {
  gameOver();
  resetQuiz();
}
}

// Function to handle moving to the next question
function nextQuestion() {
hideHint();
checkAnswer();
}

// Function to reset the quiz
function resetQuiz() {
currentQuestionIndex = 0;
loadQuestion();
}

// Call loadQuestion() after the script has finished loading
loadQuestion();
