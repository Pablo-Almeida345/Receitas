import { veryfyToken } from "../../utils/verify-token.js"
const url = "../../login/login.html"

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

seta.addEventListener('click', () => {
    window.location.href = '../piramide.html';
});


mais.addEventListener('click', () => {
    if (confirm("Atenção Você será direcionado para uma página do YouTube com conteúdos exclusivos e dicas incríveis! Deseja continuar?")) {
        
        window.location.href = "https://www.youtube.com/watch?feature=shared&v=s3dmb-zOX7c";
    } else {
        console.log("O usuário decidiu não ir para o site.");
    }
});

home.addEventListener('click', () => {
    window.location.href = '../../index.html';
});

veryfyToken(url)