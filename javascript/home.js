console.log("Bem-vindo ao site de The Legend of Zelda!");

let currentIndex = 0;
const charactersPerPage = 3; // Exibir 3 personagens ao mesmo tempo

function showCharacters() {
    const characters = document.querySelectorAll(".character");
    characters.forEach((char, index) => {
        if (index >= currentIndex && index < currentIndex + charactersPerPage) {
            char.style.display = "block"; // Exibe os personagens atuais
        } else {
            char.style.display = "none"; // Esconde os demais
        }
    });
}

function nextCharacter() {
    const characters = document.querySelectorAll(".character");
    if (currentIndex + charactersPerPage < characters.length) {
        currentIndex += charactersPerPage;
    } else {
        currentIndex = 0; // Volta para o início se chegar ao final
    }
    showCharacters();
}

function prevCharacter() {
    const characters = document.querySelectorAll(".character");
    if (currentIndex - charactersPerPage >= 0) {
        currentIndex -= charactersPerPage;
    } else {
        currentIndex = characters.length - charactersPerPage; // Volta para o final
    }
    showCharacters();
}

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

// Criar partículas automaticamente a cada 3 segundos
setInterval(criarParticulas, 3000);


// Iniciar o carrossel com os primeiros 3 personagens visíveis
document.addEventListener("DOMContentLoaded", showCharacters);

