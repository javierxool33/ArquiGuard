
//funcion de la hamburguesa
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}

//Agrega este script del boton leer mas
document.addEventListener("DOMContentLoaded", function() {
    var btnLeerMas = document.getElementById("btnLeerMas");
    var btnLeerMenos = document.getElementById("btnLeerMenos");
    var extraContent = document.getElementById("extraContent");

    btnLeerMas.addEventListener("click", function() {
        extraContent.style.display = "block"; // Muestra la nueva sección
        btnLeerMas.style.display = "none"; // Oculta el botón "Leer más"
    });

    btnLeerMenos.addEventListener("click", function() {
        extraContent.style.display = "none"; // Oculta la nueva sección
        btnLeerMas.style.display = "inline-block"; // Vuelve a mostrar "Leer más"
    });
});
        