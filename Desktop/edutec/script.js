import { veryfyToken } from "./utils/verify-token.js"
import { getname } from "./utils/get-name.js"
import {logout} from "./utils/logout.js"

const BotaoAbrir = document.querySelector (".dados > .guia")
const BotaoFechar = document.querySelector ("header nav button")

const body = document.querySelector("body")
const nav = document.querySelector("header nav")

const url = "login/login.html"

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



piramide.addEventListener('click', () => {
    window.location.href = './2piramide/piramide.html';
});

planejamento.addEventListener('click', () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScIwhAJgX330aeNJ3HpVC5sYQgKR8aS2ktE1IOHyYi2vq2Qyg/viewform?embedded=true';
});

memoria.addEventListener('click', () => {
    window.location.href = 'quizapp/quiz.html';
});

receita.addEventListener('click', () => {
    window.location.href = 'receitas/receitas.html';
});

inicial.addEventListener('click', () => {
    window.location.href = 'receitas/receitas.htmll';
});


veryfyToken(url)
getname()   
logout()
