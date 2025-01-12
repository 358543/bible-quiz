const questions = [
  { question: "Who baptized Jesus?", options: ["Peter", "James", "John", "Matthew"], answer: "John" },
  { question: "How many disciples did Jesus have?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "What is the first book of the Bible?", options: ["Genesis", "Exodus", "Leviticus", "Numbers"], answer: "Genesis" },
  // Add all your other questions here...
  { question: "How many days did it rain during the flood?", options: ["40", "7", "100", "150"], answer: "40" },
  { question: "Who was the mother of Jesus?", options: ["Mary", "Martha", "Eve", "Sarah"], answer: "Mary" },
  { question: "Who built the ark?", options: ["Noah", "Moses", "Abraham", "David"], answer: "Noah" },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = ""; // Clear previous options

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => selectAnswer(option);
    optionsElement.appendChild(button);
  });

  nextButton.style.display = "none"; // Hide the next button
}

function selectAnswer(option) {
  const currentQuestion = questions[currentQuestionIndex];
  if (option === currentQuestion.answer) {
    score++;
    alert("Correct!");
  } else {
    alert(`Wrong! The correct answer is: ${currentQuestion.answer}`);
  }

  nextButton.style.display = "block"; // Show the next button
}

nextButton.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    // End of the quiz
    questionElement.textContent = `Quiz finished! Your score: ${score}/${questions.length}`;
    optionsElement.innerHTML = "";
    nextButton.style.display = "none"; // Hide the next button after the quiz ends
  }
};

// Initialize the first question
showQuestion();
