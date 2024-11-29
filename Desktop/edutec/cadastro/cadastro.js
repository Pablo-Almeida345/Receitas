async function register(){
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const passworsConfirmation = document.querySelector("#password-confirmation").value

    if (name === "" || email === "" || password === "" || passworsConfirmation === "" ){
        alert("Preencha todas as informações")
        return
    }

    if (password !== passworsConfirmation){
        alert("As senhas não conferem. Digite as senhas novamente")
        const password = document.querySelector("#password").value = ""
        passworsConfirmation = document.querySelector("#password-confirmation").value = ""
        return
    }

    const user = {
        name,
        email,
        password
    }

    const response = await fetch("http://edutec-back-end.vercel.app/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({user})
    }).then(response => response.json())

    alert(response.message)

    if(response.userExists){
        window.location.reload()
        return
    }

    window.location.href = "./login/login.html"
}

const button = document.querySelector("form button")
button.addEventListener("click", (event) =>{
    event.preventDefault()
    register()
})