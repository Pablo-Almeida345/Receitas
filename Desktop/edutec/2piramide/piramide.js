import { veryfyToken } from "../../utils/verify-token.js"
import {getname} from "../utils/getname.js"
import { logout } from "../utils/logout.js"


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

base.addEventListener('click', () => {
    window.location.href = "./carboidratos/carboidratos.html";
});


home.addEventListener('click', () => {
    window.location.href = "../../index.html";
});

t1.addEventListener('click', () => {
    window.location.href = "./frutas e vegetais/frutasevegetais.html";
});

t2.addEventListener('click', () => {
    window.location.href = "./proteinas/proteinas.html";
});

t3.addEventListener('click', () => {
    window.location.href = "./gorduras/gorduras.html";
});


home.addEventListener('click', () => {
    window.location.href = "../../index.html";
});

veryfyToken(url)

getname()

logout()
