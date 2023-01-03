const seeMore = document.getElementById('see-more-icon');
const seeMoreBox = document.getElementById('see-more');
const descricaoBox = document.getElementById('descricao-box');


seeMoreBox.addEventListener('click', () => {
    seeMore.click()
});


seeMore.addEventListener("click", () =>{
    descricaoBox.classList.remove('hidden')
});
