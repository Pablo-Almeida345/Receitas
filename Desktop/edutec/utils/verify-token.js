export async function veryfyToken(url) {
    const token = localStorage.getItem("token")

    if(!token){
        window.location.href = url
        return
    }

    /*verificar se o token e valido*/
    const response = await fetch("https://edutec-back-end.vercel.app/verify", {
        headers: {
            "Authorization": token
        }
    }).then(response => response.json())

    if(!response.ok){
        alert(response.message)
        window.location.href = url

    }
}
