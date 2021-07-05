function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function showMenu() {
    let nav = document.getElementById("mobile-nav");
    
    if (!nav.classList.contains("mobile-menu-selected")){
        nav.style.transform = "translateY(-100vh)";
        nav.classList.add("mobile-menu-selected");
    }
}

function hideMenu() {
    let nav = document.getElementById("mobile-nav");
    
    if (nav.classList.contains("mobile-menu-selected")){
        nav.style.transform = "translateY(100vh)";
        nav.classList.remove("mobile-menu-selected");
    }
}