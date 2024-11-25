function home() {
    window.location.href = "../index.html";
}

function pegarNota(){
    
    let nota = localStorage.getItem("nota")
    let paragrafoNota = document.querySelector(".paragrafo_nota")

    paragrafoNota.innerHTML = `Você selecionou ${nota} de 5`
}

pegarNota()

function seta(){
    window.location.href = "../faq/faq.html";
}