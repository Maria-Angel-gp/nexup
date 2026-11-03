const openModal = document.querySelector(".info");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal_close");


openModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("modal--show");
})

closeModal.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.classList.remove("modal--show");
})

function cerrarSesion(){
    sessionStorage.removeItem('auth');
    window.location.href = '../index.html';
}

const numeroWhatsapp = "573001234567";

// Mensaje al abrir WhatsApp.
const mensajeWhatsapp = "Hola, quisiera obtener más información.";

// Busca el botón de WhatsApp dentro del HTML.
const botonWhatsapp = document.getElementById("botonWhatsapp");

// Convierte el mensaje en un formato que se pueda utilizar en una URL.
const mensajeCodificado = encodeURIComponent(mensajeWhatsapp);

// Construye el enlace con el número y el mensaje inicial.
const enlaceWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensajeCodificado}`;

// Asigna el enlace creado al botón para que pueda abrir WhatsApp.
botonWhatsapp.href = enlaceWhatsapp;