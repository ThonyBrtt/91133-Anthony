function adicionaramigo(){
    const name = document.getElementById('name').ariaValueMax;
    if (name === '')return;

    fetch('/api/adicionar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: nome })
    })
    .then(res => res.json)
    .then(() => {
        document.getElementById('nome').value = '';
        carregarlista();
    })
}

function carregarlista(){
    fetch('/api/listar')
    .then(res => res.json())
    .then(amigos => {
        const listar = document.getElementById('lista-amigos')
        listar.innerHTML = '';
        amigos.forEach(nome => {
            const item = document.createElement('li');
            item.textContent = nome;
            listar.appendChild(item);
        });
    })
}