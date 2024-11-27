let quizData = [];
let currentQuestionIndex = 0;
let score = 0;

fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    quizData = data.quizzes[0].questions;
    loadQuestion();
  })
  .catch(error => {
    console.error("Erro ao carregar o JSON:", error);
  });

function loadQuestion() {
  if (currentQuestionIndex < quizData.length) {
    const question = quizData[currentQuestionIndex];
    document.getElementById('question-title').innerText = `Pergunta ${currentQuestionIndex + 1}`;
    document.getElementById('question-text').innerText = question.question;
    
    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = '';
    question.options.forEach(option => {
      const li = document.createElement('li');
      li.innerText = option;
      li.onclick = () => checkAnswer(option);
      optionsList.appendChild(li);
    });
  } else {
    showResult();
  }
}

function checkAnswer(selectedOption) {
  const correctAnswer = quizData[currentQuestionIndex].answer;
  if (selectedOption === correctAnswer) {
    score++;
  }
  currentQuestionIndex++;
  loadQuestion();
}

function showResult() {
  const result = document.createElement('div');
  result.innerText = `Você acertou ${score} de ${quizData.length} perguntas!`;
  document.body.appendChild(result);
}
