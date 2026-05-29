let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");
let linksMenu = document.querySelectorAll(".mobile-link");
let btnScrollTop = document.getElementById("btn-scroll-top");
let header = document.getElementById("header");

// Logica do menu mobile
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.style.display = 'block';
});

menu.addEventListener('click', () => {
    // Mantem o menu aberto ao clicar na area interna.
});

// Fechar com o botao X
document.querySelector('.btn-fechar').addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none';
});

// Fechar clicando no overlay
overlay.addEventListener("click", () => {
    menu.classList.remove("abrir-menu");
    overlay.style.display = 'none';
});

// Fechar ao clicar em um link do menu
linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove("abrir-menu");
        overlay.style.display = 'none';
    });
});

// Logica do scroll (header e botao voltar ao topo)
window.addEventListener('scroll', () => {
    // Header Effect
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Btn Scroll Top
    if (window.scrollY > 300) { 
        btnScrollTop.classList.add('show');
    } else {
        btnScrollTop.classList.remove('show');
    }
});

btnScrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
