import {verifyToken} from "../utils/verify-token.js"

const url = "../login/login.html"

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


home.addEventListener('click', () => {
    window.location.href = "../../index.html";
});

avaliacao.addEventListener('click', () => {
    window.location.href = "../avaliacao/avaliacao.html";
});
verifyToken(url)