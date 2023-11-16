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
    document.getElementById("question").innerText = currentQuestion.question;
  }
  
  function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
    const currentQuestion = questions[currentQuestionIndex];
  
    if (userAnswer === currentQuestion.correctAnswer.toLowerCase()) {
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
  