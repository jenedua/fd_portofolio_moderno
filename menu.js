let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");
let linksMenu = document.querySelectorAll(".mobile-link");
let btnScrollTop = document.getElementById("btn-scroll-top");
let header = document.getElementById("header");

// Lógica do Menu Mobile
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.style.display = 'block';
});

menu.addEventListener('click', (e) => {
    // Fecha apenas se clicar fora do conteúdo da nav (opcional, aqui mantive o comportamento do botão fechar)
});

// Fechar com o botão X
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

// Lógica do Scroll (Header e Btn Top)
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