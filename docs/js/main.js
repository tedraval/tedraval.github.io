
var menu = document.getElementById("menu");

function abrir(){
    menu.style.right = "0";
    menu.style.transition = "all .2s ease";
}

function fechar(){
    menu.style.right = "-100vw";
    menu.style.transition = "all .1s ease";
}