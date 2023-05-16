const mensagem = document.querySelector(".mensagem");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const csenha = document.getElementById("csenha");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) => {
 let dados = JSON.parse(localStorage.getItem("dados"));

 dados.forEach((elemento) => {
    if (elemento.email === email.value && elemento.senha ==senha.value){
        evento.preventDefault();
        mensagem.innerHTML="Logado";
        setTimeout(()=>{
            window.location.assign("login.html");
        }, 3000);
        return true;
        
    }
    else{
        evento.preventDefault();
        mensagem.innerHTML = "Senha ou E-mail incorreto"
    }
 });
}

