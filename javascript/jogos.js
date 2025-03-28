document.addEventListener("DOMContentLoaded", function() {
    function mostrarDetalhes(jogo) {
        const detalhes = document.getElementById(`${jogo}-detalhes`);
        detalhes.classList.toggle("visible");
    }

    // Adiciona evento a cada jogo-card
    document.querySelectorAll(".jogo-card").forEach(card => {
        card.addEventListener("click", function() {
            const id = this.querySelector("h3").textContent.toLowerCase().replace(/\s+/g, '');
            mostrarDetalhes(id);
        });
    });

    // Botão de Voltar ao Topo
    const backToTopButton = document.createElement("button");
    backToTopButton.id = "back-to-top";
    backToTopButton.innerHTML = "↑";
    document.body.appendChild(backToTopButton);

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});