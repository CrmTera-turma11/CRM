function redirectLogin(){
    const loginRedirect = document.getElementById('loginRedirect')
    loginRedirect.onclick = window.location.href = "../pages/telaLogin.html"
}

function redirectCadastro(){
    const cadastroRedirect = document.getElementById('cadastroRedirect')
    cadastroRedirect.onclick = window.location.href = "../pages/telaCadastro.html"
}

function redirectTelaInicial() {
    const telaInicial = document.getElementById('telaInicial')
    telaInicial.onclick = window.location.href = "../pages/index.html"     
}

// function redirectTelaProdutos() {
//     const telaProdutos = document.getElementById('telaProdutos')
//     telaProdutos.onclick =window.location.href =
// }

// function redirectTelaPrecos() {
//     const telaPrecos = document.getElementById('telaPrecos')
//     telaPrecos.onclick =window.location.href =
// }

// function redirectTelaFerramentas() {
//     const telaFerramentas = document.getElementById('telaFerramentas')
//     telaFerramentas.onclick =window.location.href =
// }

// function redirectTelaEmpresa() {
//     const telaEmpresa = document.getElementById('telaEmpresa')
//     telaEmpresa.onclick =window.location.href =
// }