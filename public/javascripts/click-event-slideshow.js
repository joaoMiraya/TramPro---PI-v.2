let slide = document.getElementById('txtSlide1');
let btnSlide = document.getElementById('btn1');
let btnSlide2 = document.getElementById('btn2');
let slide2 = document.getElementById('txtSlide2');



btnSlide.addEventListener('click', ()=>{
slide.style.visibility = 'visible'
slide2.style.visibility = 'hidden'
})

btnSlide2.addEventListener('click', ()=>{
    slide2.style.visibility = 'visible'
    slide.style.visibility = 'hidden'
 })
    

