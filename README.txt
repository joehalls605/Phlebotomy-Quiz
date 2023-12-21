Welcome to the Phlebotomy Quiz! Test your knowledge of phlebotomy procedures with a set of randomized questions. The quiz covers various aspects of blood collection and related practices.

How to Play
The quiz consists of multiple-choice questions.
Choose the correct answer from the options provided.
If you need assistance, use the "Hint" button for a helpful clue.
After answering, click "Next" to move to the next question.
Your score will be displayed throughout the quiz.
The game ends after reaching the maximum question limit.
Technical Details
Script.js
The JavaScript file (script.js) contains functions for shuffling questions, loading questions, checking answers, and managing the quiz flow. It uses an array of questions with associated hints and correct answers.

Functions:
shuffleQuestions(array): Shuffles an array of questions randomly.
shuffleArray(array): Shuffles the order of elements in an array.
loadQuestion(): Loads the current question and answer options.
getIncorrectAnswers(currentQuestion): Generates incorrect answers related to the current question.
hideQuestion(): Hides the quiz container.
gameOver(): Displays the game-over message and final score.
showHint(): Displays a hint for the current question.
hideHint(): Hides the hint.
checkAnswer(userAnswer): Checks the user's answer and updates the score.
nextQuestion(): Moves to the next question.
resetQuiz(): Resets the quiz to the initial state.
generateRelatedIncorrectAnswers(currentQuestion): Generates incorrect answers related to specific keywords in the question.
HTML Structure
The HTML file (index.html) defines the structure of the quiz interface, including question display, answer buttons, and game-over messages. It links to an external CSS file (style.css) for styling.

Elements:
main-container: Main container for the quiz.
header-container: Container for the quiz header.
quiz-container: Container for displaying questions and answers.
button-container: Container for the "Next" and "Hint" buttons.
game-over-container: Container for the game-over message.
reset-btn: Button to reset the game.
Styling (Style.css)
The CSS file (style.css) provides styling for the quiz interface, ensuring a visually appealing and responsive design. It includes styles for different screen sizes using media queries.