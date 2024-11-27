import { veryfyToken } from "../../utils/verify-token.js"

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

let currentIndex = 0;

esquerda.addEventListener('click', () => {
  const carousel = document.querySelector('.carousel-images');
  if (currentIndex > 0) {
      currentIndex--;
  }
  carousel.style.transform = `translateX(-${currentIndex * 220}px)`;
}); 

direita.addEventListener('click', () => {
  const carousel = document.querySelector('.carousel-images');
  const maxIndex = carousel.childElementCount - 1;
  if (currentIndex < maxIndex) {
      currentIndex++;
  }
  carousel.style.transform = `translateX(-${currentIndex * 235}px)`;
}); 

home.addEventListener('click', () => {
  window.location.href = "../../index.html";
}); 

coxinha_de_frango.addEventListener('click', () => {
  window.location.href = "../receitas/coxinha de frango/coxinha.html";
}); 

macarron.addEventListener('click', () => {
  window.location.href = "macarons/macaron.html";
}); 




lasanha.addEventListener('click', () => {
  window.location.href = "lasanha/lasanha.html";
}); 


belem.addEventListener('click', () => {
  window.location.href = "pastelbelem/belem.html";
});

macarrao.addEventListener('click', () => {
  window.location.href = "macarrao/macarrao.html";
});

avocado.addEventListener('click', () => {
  window.location.href = "avocado/avocado.html";
});

mingau.addEventListener('click', () => {
  window.location.href = "mingau/mingau.html";
});

morango_banana.addEventListener('click', () => {
  window.location.href = "morango-banana/morango-banana.html";
});

suco_abacaxi.addEventListener('click', () => {
  window.location.href = "suco-abacaxi/suco-abacaxi.html";
});


tapioca_queijo.addEventListener('click', () => {
  window.location.href = "tapioca-queijo/tapioca-queijo.html";
});


veryfyToken(url)