let logoHamburguer = document.getElementById("logoHamburguer");
let mainMenu = document.getElementById("mainMenu");

logoHamburguer.addEventListener("click", function(){
    if (mainMenu.classList.contains("main-menu")){
        mainMenu.classList.add("main-menu-block");
        mainMenu.classList.remove("main-menu");
    }
    else {
        mainMenu.classList.remove("main-menu-block");
        mainMenu.classList.add("main-menu");
    }
});

