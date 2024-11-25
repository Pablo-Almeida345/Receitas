const BotaoAbrir = document.querySelector ("div > .guia")
const BotaoFechar = document.querySelector ("header nav button")

const body = document.querySelector("body")
const nav = document.querySelector("header nav")

BotaoAbrir.addEventListener('click', abrirMenu )
BotaoFechar.addEventListener('click', fecharMenu )

function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu(){
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}

function seta() {
    window.location.href = "../piramide.html";
}


function mais(){
    if (confirm("Atenção Você será direcionado para uma página do YouTube com conteúdos exclusivos e dicas incríveis! Deseja continuar?")) {
        
        window.location.href = "https://www.youtube.com/watch?feature=shared&v=kE46ae34IR0";
    } else {
        console.log("O usuário decidiu não ir para o site.");
    }
    
}

function home() {
    window.location.href = "../../index.html";
}