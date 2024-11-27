const quizData = [
    {
        question: "O que é a pirâmide alimentar e qual é seu objetivo?",
        options: [
            "Organizar alimentos de acordo com seu valor nutricional",
            "Ajudar a escolher alimentos ricos em carboidratos",
            "Excluir alimentos com gorduras",
            "Priorizar alimentos doces e salgados"
        ],
        answer: "Organizar alimentos de acordo com seu valor nutricional"
    },
    {
        question: "Qual grupo alimentar ocupa a base da pirâmide alimentar, indicando que deve ser consumido em maior quantidade?",
        options: [
            "Frutas e legumes",
            "Proteínas",
            "Carboidratos",
            "Doces e gorduras"
        ],
        answer: "Carboidratos"
    },
    {
        question: "Qual desses alimentos é uma fonte rica em proteínas?",
        options: [
            "Batata",
            "Frutas",
            "Feijão",
            "Arroz"
        ],
        answer: "Feijão"
    },
    {
        question: "Qual dos grupos alimentares deve ser consumido com moderação, pois está no topo da pirâmide alimentar?",
        options: [
            "Legumes e verduras",
            "Carnes e ovos",
            "Óleos, gorduras e açúcares",
            "Pães e massas"
        ],
        answer: "Óleos, gorduras e açúcares"
    },
    {
        question: "As fibras são nutrientes encontrados principalmente em:",
        options: [
            "Frutas e vegetais",
            "Doces e refrigerantes",
            "Óleos e gorduras",
            "Leite e derivados"
        ],
        answer: "Frutas e vegetais"
    },
    {
        question: "Verdadeiro ou falso: A água é uma parte essencial de uma dieta equilibrada e deve ser consumida em abundância.",
        options: [
            "Verdadeiro",
            "Falso"
        ],
        answer: "Verdadeiro"
    },
    {
        question: "Qual grupo da pirâmide alimentar é a principal fonte de energia para o corpo?",
        options: [
            "Carboidratos",
            "Proteínas",
            "Vitaminas",
            "Fibras"
        ],
        answer: "Carboidratos"
    },
    {
        question: "Qual a recomendação diária de frutas e verduras para manter uma alimentação saudável?",
        options: [
            "Pelo menos 2 porções",
            "Pelo menos 5 porções",
            "Nenhuma recomendação",
            "1 porção por semana"
        ],
        answer: "Pelo menos 5 porções"
    },
    {
        question: "Qual desses alimentos faz parte do grupo de laticínios?",
        options: [
            "Pão",
            "Frango",
            "Leite",
            "Alface"
        ],
        answer: "Leite"
    },
    {
        question: "Verdadeiro ou falso: Consumir uma grande quantidade de alimentos ricos em açúcar e gordura é recomendado para uma alimentação saudável.",
        options: [
            "Verdadeiro",
            "Falso"
        ],
        answer: "Falso"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const submitBtn = document.getElementById("submit-btn");
const scoreDisplay = document.getElementById("score-display");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionTitle.innerText = `Pergunta ${currentQuestionIndex + 1}`;
    questionText.innerText = currentQuestion.question;

    optionsList.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement("li");
        optionElement.innerText = option;
        optionElement.classList.add("option");
        optionsList.appendChild(optionElement);
        optionElement.addEventListener("click", () => selectOption(optionElement, option));
    });
}

function selectOption(optionElement, option) {
    const selectedOption = document.querySelector(".selected");
    if (selectedOption) {
        selectedOption.classList.remove("selected");
    }
    optionElement.classList.add("selected");
}

submitBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector(".selected");
    if (!selectedOption) return;

    const currentQuestion = quizData[currentQuestionIndex];
    const userAnswer = selectedOption.innerText;

    if (userAnswer === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    document.querySelector(".quiz-container").style.display = "none";
    const resultPage = document.createElement("div");
    resultPage.classList.add("result-page");
    resultPage.innerHTML = `
        <h2>Resultado</h2>
        <p>${score} de ${quizData.length}</p>
        <button onclick="retryQuiz()">Refazer Quiz</button>
    `;
    document.body.appendChild(resultPage);
}

function retryQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.querySelector(".quiz-container").style.display = "block";
    document.body.querySelector(".result-page").remove();
    loadQuestion();
}

loadQuestion();
localStorage.setItem("quizResult", "Você acertou 7 de 10");
