const cartaoInput = document.getElementById('cartao');
const infoCartao = document.getElementById('container-cartao');
const creditoDebito = document.getElementById('credito-debito');
const paypalInput = document.getElementById('paypal');
const paypalLabel = document.getElementById('paypalLabel');
const containerBoleto = document.getElementById('container-boleto');
const boletoInput = document.getElementById('pix-boleto');
const boletoLabel = document.getElementById('boletoLabel');


creditoDebito.addEventListener('click', () => {
    cartaoInput.click()
});

paypalLabel.addEventListener('click', () => {
    paypalInput.click()
});

boletoLabel.addEventListener('click', () => {
    boletoInput.click()
});





cartaoInput.addEventListener("click", () =>{
    infoCartao.classList.remove('hidden')
});


paypalInput.addEventListener("click", () =>{
    infoCartao.classList.add('hidden')
});


boletoInput.addEventListener("click", () =>{
    containerBoleto.classList.remove('hidden')
});

cartaoInput.addEventListener("click", () =>{
    containerBoleto.classList.add('hidden')
});

boletoInput.addEventListener("click", () =>{
    infoCartao.classList.add('hidden')
});

paypalInput.addEventListener("click", () =>{
    containerBoleto.classList.add('hidden')
});