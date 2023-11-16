const questions = [
    {
      question: "What does CBC stand for in phlebotomy?",
      correctAnswer: "Complete Blood Count"
    },
    {
      question: "Which vein is commonly used for venipuncture?",
      correctAnswer: "Median cubital vein"
    },
    // Add more questions as needed
  ];
  
  let currentQuestionIndex = 0;
  
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
  
    if (currentQuestion) {
      questionElement.textContent = currentQuestion.question;
    } else {
      questionElement.textContent = "No more questions";
    }
    console.log(questionElement);
  }
  
  
  function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.trim();
    const currentQuestion = questions[currentQuestionIndex];
  
    if (userAnswer === currentQuestion.correctAnswer.trim()) {
      alert("Correct!");
    } else {
      alert(`Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`);
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      alert("Quiz completed!");
      resetQuiz();
    }
  }
  
  function nextQuestion() {
    checkAnswer();
  }
  
  function resetQuiz() {
    currentQuestionIndex = 0;
    loadQuestion();
  }
  