export async function getname() {
    const token = localStorage.getItem("token")

    if(!token){
        return
    }

    const response = await fetch("https://edutec-back-end.vercel.app/getname", {
        headers: {
            "Authorization": token
        }
    }).then(response => response.json())

    const nameP = document.querySelector(".user p")
    nameP.innerText = `Usuário: ${response.name}`
}