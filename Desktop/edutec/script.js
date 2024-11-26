const BotaoAbrir = document.querySelector (".dados > .guia")
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

function piramide() {
    window.location.href = "./2piramide/piramide.html";
}

planejamento.addEventListener('click', () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScIwhAJgX330aeNJ3HpVC5sYQgKR8aS2ktE1IOHyYi2vq2Qyg/viewform?embedded=true';
});

function memoria() {
    window.location.href = "memoria/memoria.html";
}

function receita() {
    window.location.href = "receitas/receitas.html";
}

function inicial(){
    window.location.href = "receitas/receitas.html  "
}

async function veryfyToken() {
    const token = localStorage.getItem("token")

    if(!token){
        window.location.href = "login/login.html"
        return
    }

    /*verificar se o token e valido*/
    const response = await fetch("http://localhost:3000/verify", {
        method: "POST",
        headers: {
         "Authorization": token
        }
    }).then(response => response.json())
}

veryfyToken()