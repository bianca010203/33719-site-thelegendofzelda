// Expandir e recolher eventos da linha do tempo
function mostrarEvento(elemento) {
    let detalhes = elemento.querySelector('.evento-detalhes');
    detalhes.style.display = detalhes.style.display === "block" ? "none" : "block";
}

// Criar partículas mágicas
function criarParticulas() {
    for (let i = 0; i < 20; i++) {
        let particula = document.createElement('div');
        particula.classList.add('particle');
        particula.style.left = `${Math.random() * 100}%`;
        particula.style.top = `${Math.random() * 100}%`;
        document.body.appendChild(particula);
        setTimeout(() => particula.remove(), 1500);
    }
}
setInterval(criarParticulas, 3000);

