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