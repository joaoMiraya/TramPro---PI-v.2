
            /* BOTÃO HAMBURGER */

const btn = document.getElementById('menu')
function animar(){
    btn.classList.toggle('ativarHamburguer')
}

btn.addEventListener('click',() =>{
    console.log('xxrt')
const menu = document.querySelector('.menu-mobile')
menu.classList.toggle('menuActived')
})
            /* FIM BOTÃO HAMBURGER */

const buttonSearch = document.querySelector('.search-btn'); 
const inputSearch = document.querySelector('.search-text');

buttonSearch.addEventListener('click', () =>{
inputSearch.classList.add('inputAnimation')
})
