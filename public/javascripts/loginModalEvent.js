const largura = window.innerWidth;

setTimeout(() => {
if (largura < 1100){
function initModal(e){
const modal = document.getElementById(e);
modal.classList.add('mostrar');
modal.addEventListener('click', (evnt) =>{
if (evnt.target.className == 'close-modal-btn'){
modal.classList.remove('mostrar');
}
})
}

initModal('modal-cadastro')
}
}, 5000);

 
