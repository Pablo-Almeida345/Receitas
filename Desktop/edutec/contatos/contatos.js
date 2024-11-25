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


function home() {
    window.location.href = "../../index.html";
}

function desing(){
    window.location.href = "https://www.instagram.com/vic.aquui/";
}

function programador(){
    window.location.href = "https://www.instagram.com/pablo3.fxp/";
}

function imagem(){
    window.location.href = "https://www.instagram.com/brsl.brian/";
}

function midia(){
    window.location.href = "https://www.instagram.com/_santosmiiguel/";
}

function insta(){
    window.location.href = "https://www.instagram.com/alwaysfresh.unasp/";
}