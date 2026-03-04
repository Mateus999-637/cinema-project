// protege o código para rodar apenas quando os elementos existirem
window.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle a');
    const sidebar = document.querySelector('.sidebar');
    if (!menuToggle || !sidebar) {
        // não há menu lateral nesta página, nada a fazer
        return;
    }

    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        const isOpen = sidebar.classList.toggle('open');
        sidebar.setAttribute('aria-hidden', !isOpen);
    });
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebar.setAttribute('aria-hidden', 'true');
        });
    });
});