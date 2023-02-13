let slide = document.getElementById('txtSlide1');
let btnSlide = document.getElementById('btn1');
let btnSlide2 = document.getElementById('btn2');
let slide2 = document.getElementById('txtSlide2');
let slide2Box = document.querySelector('.slide-2');


btnSlide.addEventListener('click', ()=>{
slide.style.visibility = 'visible'
slide2.style.visibility = 'hidden'
slide2Box.classList.remove('slide2Animation')

})

btnSlide2.addEventListener('click', ()=>{
    slide2.style.visibility = 'visible'
    slide.style.visibility = 'hidden'
    slide2Box.classList.add('slide2Animation')
 })
    

