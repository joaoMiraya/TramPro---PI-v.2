const seeMore = document.getElementById('see-more-icon');
const seeMoreBox = document.getElementById('see-more');
const descricaoBox = document.getElementById('descricao-box');

const hiddenMore = document.getElementById('hidden-more-icon');
const hiddenMoreBox = document.getElementById('hidden-more');


seeMoreBox.addEventListener('click', () => {
    seeMore.click()
});


seeMore.addEventListener("click", () =>{
    descricaoBox.classList.remove('hidden')
    seeMoreBox.classList.add('hidden')
    hiddenMoreBox.classList.add('show')
});

hiddenMoreBox.addEventListener("click", () =>{
    descricaoBox.classList.add('hidden')
    hiddenMoreBox.classList.remove('show')
    seeMoreBox.classList.remove('hidden')
});
