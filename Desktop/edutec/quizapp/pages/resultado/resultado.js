import { trocarTema, verificarTema } from "../../helpers/tema-helper.js"


const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")
const assunto = localStorage.getItem("assunto")
const botaoJogarNovamente = document.querySelector("main button")

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})

botaoJogarNovamente.addEventListener("click", jogarNovamente)

verificarTema(body, botaoTema)

function alterarAssunto(){
    const divIcon = document.querySelector(".assunto_icon")
    const iconeImg = document.querySelector(".assunto_icon img")
    const assuntoTitulo = document.querySelector(".assunto h1")

    divIcon.classList.add(assunto.toLowerCase())
    iconeImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    iconeImg.setAttribute("alt", `icone de ${assunto}`)
    assuntoTitulo.innerHTML = assunto
}

alterarAssunto()

function inserirResultado (){
    const sectionPontuacao = document.querySelector(".pontuacao")
    const divAssunto = document.querySelector(".assunto")
    const pontos = localStorage.getItem("pontos")

    sectionPontuacao.innerHTML = `
       ${divAssunto.outerHTML}

        <strong>${pontos}</strong>

        <p>de 10</p>
    `
}

function jogarNovamente () {
    localStorage.removeItem("pontos")
    localStorage.removeItem("assunto")

    window.location.href = "../../index.html"
}

inserirResultado()