// JOE GO OVER THIS.

function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const questions = [
  {
    question: "What does CBC stand for in phlebotomy?",
    correctAnswer: "Complete Blood Count",
    hint: "Hint: Complete B..."
  },
  {
    question: "Which vein is commonly used for venipuncture?",
    correctAnswer: "Median cubital vein",
    hint: "Hint: Median c..."
  },
  {
    question: "What is the purpose of using a tourniquet during venipuncture?",
    correctAnswer: "To make veins more visible and easier to access",
    hint: "Hint: To enhance vein visibility..."
  },
  {
    question: "Which anticoagulant is commonly used in blood collection tubes for coagulation studies?",
    correctAnswer: "Sodium citrate",
    hint: "Hint: Sodium c..."
  },
  {
    question: "What is the purpose of the Order of Draw in venipuncture?",
    correctAnswer: "To prevent cross-contamination of additives between tubes",
    hint: "Hint: Prevents cross-contamination..."
  },
  {
    question: "Which color-coded tube is commonly used for serum tests in phlebotomy?",
    correctAnswer: "Red",
    hint: "Hint: Red tube for serum tests..."
  },
  {
    question: "What is the term for the liquid portion of blood that remains after clotting?",
    correctAnswer: "Serum",
    hint: "Hint: Liquid portion after clotting..."
  },
  {
    question: "Why is it important to label blood collection tubes accurately?",
    correctAnswer: "To ensure proper patient identification and sample integrity",
    hint: "Hint: Ensures patient identification..."
  },
  {
    question: "What is the purpose of the basilic vein in venipuncture?",
    correctAnswer: "It is a common site for blood collection in the antecubital area",
    hint: "Hint: Common site in antecubital area..."
  },
  {
    question: "What is the recommended angle for needle insertion during routine venipuncture?",
    correctAnswer: "15 to 30 degrees",
    hint: "Hint: 15-30 degrees for routine venipuncture..."
  },
  {
    question: "Which test requires the use of a fasting blood sample?",
    correctAnswer: "Glucose tolerance test",
    hint: "Hint: Requires fasting blood sample..."
  },
  {
    question: "What is the primary purpose of warming the site before capillary puncture?",
    correctAnswer: "To increase blood flow and improve sample collection",
    hint: "Hint: Increases blood flow for sample collection..."
  },
  {
    question: "Which blood component is primarily responsible for oxygen transport?",
    correctAnswer: "Red blood cells",
    hint: "Hint: Carries oxygen..."
  },
  {
    question: "What is the recommended technique for cleaning the venipuncture site?",
    correctAnswer: "Use a circular motion from the center to the periphery",
    hint: "Hint: Clean in a circular motion..."
  },
  {
    question: "Which vein is often used for venipuncture in pediatric patients?",
    correctAnswer: "Dorsal hand veins",
    hint: "Hint: Used for venipuncture in pediatric patients..."
  },
  {
    question: "What is the term for the process of stopping bleeding following venipuncture?",
    correctAnswer: "Hemostasis",
    hint: "Hint: Process of stopping bleeding..."
  },
  {
    question: "Why is it important to invert blood collection tubes after filling them?",
    correctAnswer: "To ensure proper mixing of the blood with additives",
    hint: "Hint: Ensures proper mixing with additives..."
  },
  {
    question: "Which organization provides guidelines for phlebotomy practices?",
    correctAnswer: "Clinical and Laboratory Standards Institute (CLSI)",
    hint: "Hint: Provides phlebotomy guidelines..."
  },
  {
    question: "What is the purpose of a chain of custody form in specimen collection?",
    correctAnswer: "To document and track the handling of forensic specimens",
    hint: "Hint: Documents handling of forensic specimens..."
  },
  {
    question: "Which color-coded tube is typically used for complete blood count (CBC) tests?",
    correctAnswer: "Lavender",
    hint: "Hint: Lavender tube for CBC tests..."
  },
  {
    question: "What is the primary purpose of a tourniquet during venipuncture?",
    correctAnswer: "To restrict venous blood flow and make veins more visible",
    hint: "Hint: Restricts blood flow for better visibility..."
  },
  {
    question: "Why is it important to check the expiration date of blood collection tubes?",
    correctAnswer: "To ensure the integrity of additives in the tube",
    hint: "Hint: Ensures additive integrity..."
  },
  {
    question: "Which antiseptic is commonly used for cleaning the venipuncture site?",
    correctAnswer: "Isopropyl alcohol",
    hint: "Hint: Common antiseptic for venipuncture site..."
  },
  // Add more questions as needed
];

shuffleQuestions(questions);

let currentQuestionIndex = 0;
let score = 0;

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

function gameOver() {
  const finalScore = `Your final score is ${score}`;
  const finalScoreElement = document.getElementById("game-over");
  finalScoreElement.textContent = finalScore;
}

function showHint() {
  const currentQuestion = questions[currentQuestionIndex]
  const hintElement = document.getElementById("hint-text");
  hintElement.textContent = currentQuestion.hint;
}

function hideHint() {
  const hintElement = document.getElementById("hint-text");
  hintElement.textContent = "";
}



function checkAnswer() {
  const userAnswer = document.getElementById("answerInput").value.trim();
  const currentQuestion = questions[currentQuestionIndex];
  const headerInfo = document.getElementById("header-info");

  if (userAnswer === currentQuestion.correctAnswer.trim()) {
    headerInfo.textContent = "Correct";
    score++;
  } else {
    headerInfo.textContent = "Incorrect";
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    gameOver();
    resetQuiz();
  }
}

function nextQuestion() {
  hideHint();
  checkAnswer();
}

function resetQuiz() {
  currentQuestionIndex = 0;
  loadQuestion();
}

loadQuestion();
