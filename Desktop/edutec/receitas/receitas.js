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

let currentIndex = 0;

function esquerda() {
    const carousel = document.querySelector('.carousel-images');
    if (currentIndex > 0) {
        currentIndex--;
    }
    carousel.style.transform = `translateX(-${currentIndex * 220}px)`;
}

function direita() {
    const carousel = document.querySelector('.carousel-images');
    const maxIndex = carousel.childElementCount - 1;
    if (currentIndex < maxIndex) {
        currentIndex++;
    }
    carousel.style.transform = `translateX(-${currentIndex * 235}px)`;
}


function home() {
  window.location.href = "../../index.html";
}

function coxinha_de_frango(){
  window.location.href = "../receitas/coxinha de frango/coxinha.html";
}


function macarron(){
  window.location.href = "macarons/macaron.html";
}

function lasanha(){
  window.location.href = "lasanha/lasanha.html";
}

function belem(){
  window.location.href = "pastelbelem/belem.html";
}

function macarrao(){
  window.location.href = "macarrao/macarrao.html";
}


function avocado(){
  window.location.href = "avocado/avocado.html";
}

function mingau(){
  window.location.href = "mingau/mingau.html";
}

function morango_banana(){
  window.location.href = "morango-banana/morango-banana.html";
}

function suco_abacaxi(){
  window.location.href = "suco-abacaxi/suco-abacaxi.html";
}

function tapioca_queijo(){
  window.location.href = "tapioca-queijo/tapioca-queijo.html";
}