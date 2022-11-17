const senha = document.querySelector('#senha')
const confirmaSenha = document.querySelector('#confirmaSenha')
const form = document.querySelector('.form')
const btnCadastro = document.querySelector('#btnCadastro')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const regex = /^[0-9]+[a-z]$/



// estilos 

btnCadastro.addEventListener('click', e => {
    
    let usernameValue = username.value.trim()
    const senhaValue = senha.value
    const confirmaSenhaValue = confirmaSenha.value

    if(usernameValue === ''){
        Toastify({
            text: "Preencha o nome do seu Usuário",
            className: "info",
            duration: 3000,
            style: {
              background: "linear-gradient(to right, red, red)",
            }
          }).showToast();
        e.preventDefault()
    }
    if(senhaValue && confirmaSenhaValue < 6 ){
        Toastify({
            text: "Senha invalida!",
            className: "info",
            duration: 3000,
            style: {
              background: "linear-gradient(to right, red, red)",
            }
          }).showToast();
           e.preventDefault()
    } else if(senhaValue != confirmaSenhaValue){
        Toastify({
            text: "Senhas incompatíveis ",
            className: "info",
            duration: 3000,
            style: {
              background: "linear-gradient(to right, red, red)",
            }
          }).showToast();
          e.preventDefault()
        }
})
let eyeClosed = document.querySelector('#eye-closed')


eyeClosed.addEventListener('click', e => {
    let typeSenha = senha.type == "password"


    if(typeSenha){
        senha.setAttribute("type", "text")
        eyeClosed.setAttribute("class", "fa-regular fa-eye")
    } else {
        senha.setAttribute("type", "password")
        eyeClosed.setAttribute("class", "fa-solid fa-eye-slash")
    }
   
})



