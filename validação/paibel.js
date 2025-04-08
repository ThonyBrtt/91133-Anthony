const username = localStorage.getItem("username",username);

if (username){
    document.getElementById("UserWelcome").textContent =`Bem-vindo,${username}`;
}else{
    document.getElementById("UserWelcome").textContent = `Usuário não encontrato.`;
}

document.getElementById("logoutBtn").addEventListener("click"),function(){
    localStorage.removeItem(`username`);
    window.location.href = `index.html`;
};