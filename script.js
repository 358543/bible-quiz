const questions = [
  { question: "Who baptized Jesus?", options: ["Peter", "James", "John", "Matthew"], answer: "John" },
  { question: "How many disciples did Jesus have?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "What is the first book of the Bible?", options: ["Genesis", "Exodus", "Leviticus", "Numbers"], answer: "Genesis" },
  { question: "What did God use to speak to Moses in the wilderness?", options: ["A burning bush", "A cloud", "A vision", "An angel"], answer: "A burning bush" },
  { question: "Who was the first murderer in the Bible?", options: ["Cain", "Abel", "Esau", "Lamech"], answer: "Cain" },
  { question: "What was the Tower of Babel built for?", options: ["Reaching heaven", "Storing food", "Protection", "A palace"], answer: "Reaching heaven" },
  { question: "Who interpreted Pharaoh's dreams in Egypt?", options: ["Joseph", "Daniel", "Moses", "Aaron"], answer: "Joseph" },
  { question: "Who was turned into a pillar of salt?", options: ["Lot's wife", "Sarah", "Rebekah", "Leah"], answer: "Lot's wife" },
  { question: "What food did God provide in the wilderness for the Israelites?", options: ["Manna", "Bread", "Meat", "Quail"], answer: "Manna" },
  { question: "Who was known for his great wisdom?", options: ["Solomon", "David", "Elijah", "Samuel"], answer: "Solomon" },
  { question: "What was the name of Abraham's wife?", options: ["Sarah", "Hagar", "Rebekah", "Leah"], answer: "Sarah" },
  { question: "What was the first plague of Egypt?", options: ["Water turned to blood", "Frogs", "Locusts", "Darkness"], answer: "Water turned to blood" },
  { question: "Who defeated the prophets of Baal on Mount Carmel?", options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"], answer: "Elijah" },
  { question: "Who was the disciple who walked on water with Jesus?", options: ["Peter", "John", "Andrew", "James"], answer: "Peter" },
  { question: "What did the prodigal son waste his inheritance on?", options: ["Wild living", "Gambling", "Drinking", "Charity"], answer: "Wild living" },
  { question: "What is the name of the place where Jesus was crucified?", options: ["Golgotha", "Bethlehem", "Nazareth", "Mount Sinai"], answer: "Golgotha" },
  { question: "How many days did Jesus fast in the wilderness?", options: ["40", "7", "12", "30"], answer: "40" },
  { question: "Who was the Roman governor who sentenced Jesus to death?", options: ["Pontius Pilate", "Herod", "Caesar", "Nero"], answer: "Pontius Pilate" },
  { question: "Which book of the Bible is known as the 'Love Chapter'?", options: ["1 Corinthians 13", "Romans 5", "John 3", "Ephesians 4"], answer: "1 Corinthians 13" },
  { question: "What is the first commandment?", options: ["You shall have no other gods before me", "Do not steal", "Honor your father and mother", "Do not kill"], answer: "You shall have no other gods before me" },
  { question: "Who wrote the Book of Acts?", options: ["Luke", "Paul", "Peter", "John"], answer: "Luke" },
  { question: "Who dreamed of a ladder reaching to heaven?", options: ["Jacob", "Joseph", "Abraham", "Isaac"], answer: "Jacob" },
  { question: "Who was the only female judge of Israel?", options: ["Deborah", "Esther", "Ruth", "Hannah"], answer: "Deborah" },
  { question: "Who succeeded Moses as the leader of Israel?", options: ["Joshua", "Caleb", "Aaron", "Elijah"], answer: "Joshua" },
  { question: "Who was the giant slain by David?", options: ["Goliath", "Og", "Samson", "Absalom"], answer: "Goliath" },
  { question: "What book of the Bible comes after Proverbs?", options: ["Ecclesiastes", "Psalms", "Isaiah", "Song of Solomon"], answer: "Ecclesiastes" },
  { question: "Who was the first Christian martyr?", options: ["Stephen", "Peter", "James", "Paul"], answer: "Stephen" },
  { question: "What is the Golden Rule?", options: ["Do unto others as you would have them do unto you", "Love your neighbor as yourself", "Honor your father and mother", "Turn the other cheek"], answer: "Do unto others as you would have them do unto you" },
  { question: "Who was the tax collector that climbed a tree to see Jesus?", options: ["Zacchaeus", "Matthew", "Simon", "Andrew"], answer: "Zacchaeus" },
  { question: "What does 'Emmanuel' mean?", options: ["God with us", "Prince of Peace", "Lord of Lords", "Savior"], answer: "God with us" },
  { question: "Which book has the story of the Good Samaritan?", options: ["Luke", "John", "Mark", "Matthew"], answer: "Luke" },
  { question: "Who interpreted King Nebuchadnezzar's dream?", options: ["Daniel", "Joseph", "Jeremiah", "Isaiah"], answer: "Daniel" },
  { question: "How many days was Jonah in the belly of the fish?", options: ["3", "2", "7", "40"], answer: "3" },
  { question: "What was Paul's original name?", options: ["Saul", "Peter", "James", "John"], answer: "Saul" },
  { question: "Which prophet was taken up to heaven in a chariot of fire?", options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"], answer: "Elijah" },
  { question: "What is the second book of the Bible?", options: ["Exodus", "Genesis", "Leviticus", "Numbers"], answer: "Exodus" },
  { question: "What did Jesus say was the greatest commandment?", options: ["Love God", "Love your neighbor", "Do not kill", "Keep the Sabbath"], answer: "Love God" },
  { question: "What happened on the Day of Pentecost?", options: ["The Holy Spirit came", "Jesus ascended", "The Ten Commandments were given", "The walls of Jericho fell"], answer: "The Holy Spirit came" },
  { question: "Who killed Abel?", options: ["Cain", "Seth", "Adam", "Noah"], answer: "Cain" },
  { question: "What did Jesus do at the Last Supper?", options: ["Washed feet", "Broke bread", "Drank wine", "All of the above"], answer: "All of the above" },
  { question: "What was the name of Moses' sister?", options: ["Miriam", "Rebekah", "Deborah", "Hannah"], answer: "Miriam" },
  { question: "What was written above Jesus on the cross?", options: ["King of the Jews", "Savior", "Son of God", "Messiah"], answer: "King of the Jews" },
  { question: "Who was the father of King David?", options: ["Jesse", "Boaz", "Obed", "Saul"], answer: "Jesse" },
  { question: "Which disciple doubted Jesus' resurrection?", options: ["Thomas", "Peter", "John", "Andrew"], answer: "Thomas" },
  { question: "How many times did Peter deny Jesus?", options: ["3", "1", "5", "7"], answer: "3" },
  { question: "What is the first book in the New Testament?", options: ["Matthew", "Mark", "Luke", "John"], answer: "Matthew" },
  { question: "Who wrote the majority of the New Testament?", options: ["Paul", "Peter", "John", "Luke"], answer: "Paul" },
  { question: "What is the Bible's primary language?", options: ["Hebrew", "Greek", "Latin", "Aramaic"], answer: "Hebrew" },
  { question: "How many days did it rain during the flood?", options: ["40", "7", "100", "150"], answer: "40" }
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
  nextButton.style.display = "block"; // Show the next button after selecting an answer
}

nextButton.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    // End of the quiz
    questionElement.textContent = `Quiz finished! Your score: ${score}/${questions.length}`;
    optionsElement.innerHTML = "";
    nextButton.style.display = "none"; // Hide the next button after the quiz end
s
  }
};

// Initialize the first question
showQuestion();
