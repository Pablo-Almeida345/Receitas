import { veryfyToken } from "../../utils/verify-token.js";
import { getname } from "../../utils/get-name.js";
import { logout } from "../../utils/logout.js";

const url = "../../login/login.html"

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


seta.addEventListener('click', () => {
    window.location.href = '../receitas.html';
});

home.addEventListener('click', () => {
    window.location.href = '../../index.html';
});


veryfyToken(url)
getname()
logout()