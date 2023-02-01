const btnTrampar = document.querySelector('.tramparBTN');
const btnContratar = document.querySelector('.contratarBTN');

const ancoraEntrar = document.querySelector('.ancoraEntrar');
const ancoraTrampar = document.querySelector('.ancoraTrampar');

const verifyUserLogged = require('../../src/middlewares/verifyUserLogged');


btnTrampar.addEventListener('click', ()=>{
    console.log('teste')
if(!verifyUserLogged){
    ancoraEntrar.click();
} else {
    ancoraTrampar.click();
}
})


