document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // impede o envio do formulario

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

// Validação de campos

if(!username || !password){
    alert("Por favor, preencha todos os campos.");
    return;
}

if(password.length < 8){
    alert("A senha deve ter pelo menos 8 caracteres.");
    return;
}

// Salvar nome do usuário no localstorage
localStorage.setItem("username",username);

window.location.href = "painel.html"; //Abre uma nova pagina chamada
alert("Lofin bem sucedido!"); // Pop-up de sucesso
});


