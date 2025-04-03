function toggleMenu() {

    document.querySelector(".menu").classList.toggle("active");
}

/*
function enviarWhatsApp() {
    const numero = "5533046307"; 
    const mensaje = "Me interesa tus servicios"; 
    const url = https://wa.me/${numero}?text=${encodeURIComponent(mensaje)};
    window.open(url, '_blank');

}   */

    // Obtiene el botón y la ventana modal
var boton = document.getElementById("miBoton");
var modal = document.getElementById("miModal");

// Cuando se hace clic en el botón, abre la ventana modal
boton.onclick = function() {
  modal.style.display = "block";
}

// Cuando se hace clic fuera de la ventana modal, la cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
