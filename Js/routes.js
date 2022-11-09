function redirectLogin(){
    const loginRedirect = document.getElementById('loginRedirect')
    loginRedirect.onclick = window.location.href = "../pages/telaLogin.html"
}

function redirectCadastro(){
    const cadastroRedirect = document.getElementById('cadastroRedirect')
    cadastroRedirect.onclick = window.location.href = "../pages/telaCadastro.html"
}