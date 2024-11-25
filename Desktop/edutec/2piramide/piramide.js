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


function base() {
    window.location.href = "./carboidratos/carboidratos.html";
}

function t1() {
    window.location.href = "./frutas e vegetais/frutasevegetais.html";
}

function t2() {
    window.location.href = "./proteinas/proteinas.html";
}

function t3() {
    window.location.href = "./gorduras/gorduras.html";
}

function home() {
    window.location.href = "../../index.html";
}