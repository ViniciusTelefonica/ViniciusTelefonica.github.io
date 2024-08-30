// Controle do menu
document.querySelector('.hamburger').addEventListener('click', function() {
    var nav = document.querySelector('nav');
    if (nav.classList.contains('open')) {
        nav.style.transform = 'translateX(-100%)'; // Desliza o menu para fora da tela
        setTimeout(() => {
            nav.classList.remove('open');
        }, 300); // Espera a transição completar antes de mudar a classe
    } else {
        nav.classList.add('open');
        setTimeout(() => {
        nav.style.transform = 'translateX(0)'; // Desliza o menu para dentro da tela
        }, 10); // Pequeno atraso para garantir a animação
    }
});