const BotaoAbrir = document.querySelector ("div > .guia");
const BotaoFechar = document.querySelector ("header nav button")

const body = document.querySelector("body");
const nav = document.querySelector("header nav");


BotaoAbrir.addEventListener('click', abrirMenu );
BotaoFechar.addEventListener('click', fecharMenu );

function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu(){
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}


function seta() {
    window.location.href = "../receitas.html";
}

function home() {
    window.location.href = "../../index.html";
}
