//TRAER EL NOMBRE DEL SUPERHEROE GUARDADO EN EL LOCAL STORAGE Y MOSTRARLO EN EL HTML

let titulo = document.getElementById('nombre-2pag');
titulo.textContent = localStorage.getItem('nombre');
titulo.classList.add ('nombre-2pag');

//TOCAR BOTON PARA HACER OTRA BUSQUEDA

let button = document.getElementById('volver-atras');
button.addEventListener('click', function(){
    location.href="index.html";
})

