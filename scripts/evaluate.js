document.querySelectorAll('.star').forEach((star, index) => {
    star.addEventListener('click', () => {
        // Remove a classe 'star-filled' de todas as estrelas
        document.querySelectorAll('.star').forEach(star => {
            star.innerHTML = '&#9734;'
            star.classList.remove('star-filled');
            star.classList.add('star-outline');
        });

        // Adiciona a classe 'star-filled' à estrela clicada e todas antes dela
        for (let i = 0; i <= index; i++) {
            document.querySelectorAll('.star')[i].classList.add('star-filled');
            document.querySelectorAll('.star')[i].classList.remove('star-outline');
            document.querySelectorAll('.star')[i].innerHTML = '&#9733;'
        }
    });
});