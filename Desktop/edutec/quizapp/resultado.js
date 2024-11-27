document.addEventListener("DOMContentLoaded", function() {
    const score = localStorage.getItem('quizScore');
    const totalQuestions = localStorage.getItem('totalQuestions');

    if (score && totalQuestions) {
        document.getElementById('final-result').textContent = `Sua pontuação: ${score} de ${totalQuestions}`;
    }

    const retryButton = document.getElementById('retry-btn');
    retryButton.addEventListener('click', function() {
        window.location.href = 'quiz.html';
    });
});
const resultado = localStorage.getItem("quizResult");
document.querySelector("h2").textContent = resultado;
