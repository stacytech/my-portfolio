function toggleMenu() {
    const menu = document.querySelector (".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.remove('instant-close'); 
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.querySelectorAll('#hamburger-nav .menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        
        if (menu.classList.contains('open')) {
         
             menu.classList.add('instant-close');
        }

      
        setTimeout(() => {
            if (menu.classList.contains('open')) {
                 menu.classList.remove("open");
                 icon.classList.remove("open");
                 menu.classList.remove('instant-close');
            }
        }, 0); 
    });
});