let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigos');
    let amigoUsuario = inputAmigo.value.trim();

    if (amigoUsuario === '') {
        alert('Debes ingresar un nombre válido');
    } else if (amigos.includes(amigoUsuario)) {
        alert('Este nombre ya fue registrado! Indica otro nombre');
    } else {
        amigos.push(amigoUsuario); // Agrega el nombre al array
        inputAmigo.value = ''; // Limpia el campo de texto
        inputAmigo.focus(); // Después de limpiar, permite volver a escribir sin hacer clic
        listaAmigos(); // Muestra la lista de amigos
    }  
}

function listaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, agrega al menos dos amigos antes de sortear');
        return;
    }
    
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amigo sorteado es ${amigoSorteado}`;

    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
}