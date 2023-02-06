const cartaoInput = document.getElementById('cartao');
const infoCartao = document.getElementById('container-cartao');
const creditoDebito = document.getElementById('credito-debito');

creditoDebito.addEventListener('click', () => {
    cartaoInput.click()
});

cartaoInput.addEventListener("click", () =>{
    infoCartao.classList.toggle('hidden')
});


