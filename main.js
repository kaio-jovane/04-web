document.addEventListener('DOMContentLoaded', () => {
    // Adiciona uma saudação estilizada no console do navegador, bom para estudantes de SI.
    console.log('%c Bem-vindo ao site Viagens BR! ', 'background: #005f73; color: #fff; font-size: 16px; font-weight: bold; border-radius: 4px;');

    // Animação de opacidade nas imagens para deixar interativo
    const cards = document.querySelectorAll('.card-destino');
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 150 * (index + 1));
    });
});
