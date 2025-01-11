const questions = [
  { question: "Who baptized Jesus?", options: ["Peter", "James", "John", "Matthew"], answer: "John" },
  { question: "How many disciples did Jesus have?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "What is the first book of the Bible?", options: ["Genesis", "Exodus", "Leviticus", "Numbers"], answer: "Genesis" },
  { question: "Who was the mother of Jesus?", options: ["Mary", "Martha", "Eve", "Sarah"], answer: "Mary" },
  { question: "Who built the ark?", options: ["Noah", "Moses", "Abraham", "David"], answer: "Noah" },
  { question: "What was Jesus' first miracle?", options: ["Healing a blind man", "Turning water into wine", "Feeding 5,000", "Walking on water"], answer: "Turning water into wine" },
  { question: "What is the last book of the Bible?", options: ["Revelation", "Genesis", "Matthew", "John"], answer: "Revelation" },
  { question: "Who led the Israelites out of Egypt?", options: ["Moses", "Aaron", "Joseph", "Joshua"], answer: "Moses" },
  { question: "Where was Jesus born?", options: ["Nazareth", "Jerusalem", "Bethlehem", "Galilee"], answer: "Bethlehem" },
  { question: "Who was swallowed by a great fish?", options: ["Jonah", "Peter", "Paul", "Daniel"], answer: "Jonah" },
  { question: "What did God create on the first day?", options: ["Light", "Land", "Sky", "Animals"], answer: "Light" },
  { question: "Who was the strongest man in the Bible?", options: ["Samson", "David", "Goliath", "Abraham"], answer: "Samson" },
  { question: "Who betrayed Jesus?", options: ["Peter", "Judas", "John", "Thomas"], answer: "Judas" },
  { question: "What is the longest book in the Bible?", options: ["Genesis", "Psalms", "Isaiah", "Proverbs"], answer: "Psalms" },
  { question: "Who was the first man?", options: ["Adam", "Moses", "Noah", "Abraham"], answer: "Adam" },
  { question: "Who was the first woman?", options: ["Eve", "Mary", "Sarah", "Hannah"], answer: "Eve" },
  { question: "What is the shortest verse in the Bible?", options: ["Jesus wept", "God is love", "Pray without ceasing", "Fear not"], answer: "Jesus wept" },
  { question: "What did David use to defeat Goliath?", options: ["Sword", "Sling", "Spear", "Bow"], answer: "Sling" },
  { question: "Who was thrown into the lion's den?", options: ["Daniel", "David", "Moses", "Paul"], answer: "Daniel" },
  { question: "How many plagues did God send on Egypt?", options: ["5", "7", "10", "12"], answer: "10" },
  { question: "What was the name of the sea that Moses parted?", options: ["Dead Sea", "Red Sea", "Sea of Galilee", "Mediterranean Sea"], answer: "Red Sea" },
  { question: "What is the greatest commandment?", options: ["Love God", "Love others", "Do not steal", "Honor your parents"], answer: "Love God" },
  { question: "Who was the father of Isaac?", options: ["Abraham", "Noah", "Jacob", "Moses"], answer: "Abraham" },
  { question: "Who was the father of Joseph, the husband of Mary?", options: ["Jacob", "David", "Abraham", "Jesse"], answer: "Jacob" },
  { question: "What did God give Moses on Mount Sinai?", options: ["The Ten Commandments", "A staff", "Manna", "The Ark"], answer: "The Ten Commandments" },
  { question: "Who was the first king of Israel?", options: ["David", "Saul", "Solomon", "Samuel"], answer: "Saul" },
  { question: "What is the longest chapter in the Bible?", options: ["Psalm 119", "Psalm 23", "Genesis 1", "John 3"], answer: "Psalm 119" },
  { question: "What did Jesus feed to 5,000 people?", options: ["Bread and wine", "Loaves and fish", "Fruits and honey", "Water and manna"], answer: "Loaves and fish" },
  { question: "Who is known as the Apostle to the Gentiles?", options: ["Paul", "Peter", "James", "John"], answer: "Paul" },
  { question: "What is the fruit of the Spirit?", options: ["Love", "Peace", "Joy", "All of the above"], answer: "All of the above" },
  { question: "What is the Bible often called?", options: ["The Good Book", "The Holy Scroll", "The Law", "The Testament"], answer: "The Good Book" },
  { question: "What river was Jesus baptized in?", options: ["Jordan", "Nile", "Euphrates", "Tigris"], answer: "Jordan" },
  { question: "What city did Jonah preach in?", options: ["Nineveh", "Jerusalem", "Babylon", "Samaria"], answer: "Nineveh" },
  { question: "What did God tell Noah to build?", options: ["An ark", "A temple", "A tower", "An altar"], answer: "An ark" },
  { question: "Who is the author of the Book of Revelation?", options: ["John", "Paul", "Peter", "Matthew"], answer: "John" },
  { question: "Who was the oldest person in the Bible?", options: ["Methuselah", "Noah", "Adam", "Abraham"], answer: "Methuselah" },
  { question: "How many books are in the Bible?", options: ["66", "72", "59", "100"], answer: "66" },
  { question: "What is the name of Jesus' earthly father?", options: ["Joseph", "John", "Zacharias", "James"], answer: "Joseph" },
  { question: "What did God use to create man?", options: ["Dust", "Water", "Air", "Fire"], answer: "Dust" },
  { question: "What did God place at the east of Eden to guard it?", options: ["Cherubim", "A flaming sword", "Angels", "A tree"], answer: "Cherubim" },
  { question: "Who wrote most of the Psalms?", options: ["David", "Moses", "Solomon", "Asaph"], answer: "David" },
  { question: "What city was destroyed by fire and brimstone?", options: ["Sodom", "Jerusalem", "Babylon", "Nineveh"], answer: "Sodom" },
  { question: "Who was the brother of Moses?", options: ["Aaron", "Joshua", "Jacob", "Esau"], answer: "Aaron" },
  { question: "How many days did God take to create the world?", options: ["6", "7", "8", "10"], answer: "6" },
  // Add remaining questions here up to 100
];
   

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const scoreEl = document.getElementById("score");

  scoreEl.style.display = "none";

  if (currentQuestion < questions.length) {
    const current = questions[currentQuestion];
    questionEl.textContent = `Q${currentQuestion + 1}: ${current.question}`;
    optionsEl.innerHTML = "";

    current.options.forEach((option) => {
      const button = document.createElement("button");
      button.classList.add("option");
      button.textContent = option;
      button.onclick = () => checkAnswer(button, current.answer);
      optionsEl.appendChild(button);
    });
  } else {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.style.display = "block";
    scoreEl.textContent = `Your score: ${score} / ${questions.length}`;
  }
}

function checkAnswer(button, correctAnswer) {
  if (button.textContent === correctAnswer) {
    score++;
    button.style.backgroundColor = "#4CAF50";
  } else {
    button.style.backgroundColor = "#f44336";
  }

  Array.from(document.getElementsByClassName("option")).forEach((btn) => {
    btn.disabled = true;
  });
}

function nextQuestion() {
  currentQuestion++;
  loadQuestion();
}

loadQuestion();
  
