//HEROE MODE
let body = document.querySelector("body");

let temaDia= document.getElementById("day");
temaDia.addEventListener('click',function(){
    body.classList.remove('dark');
});

//VILLIAN MODE

let temaNoche= document.getElementById("night");
temaNoche.addEventListener('click',function(){
    body.classList.add('dark');
    console.log('night')
});