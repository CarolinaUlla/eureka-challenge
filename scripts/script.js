//CONSUMIR API DE MARVEL

async function getFromApi(endPoint) {
    let array = await fetch(endPoint);
    let json = await array.json();
    console.log(json);
    return json;
};

function showArray() {
    //ESCRIBIR EN UN INPUT EL NOMBRE DEL SUPERHEORE 

    let botonBuscar = document.getElementById('submit');
    botonBuscar.addEventListener('click', function (){
        let name = document.getElementById('heroName').value;
        localStorage.setItem('nombre', name);
    });
    let nombreGuardado = localStorage.getItem('nombre');
    //LLAMDA A LA API

    getFromApi('https://gateway.marvel.com/v1/public/characters?&name=' + nombreGuardado +'&ts=9&apikey=de21c7827ad3ea1ef9cf39d3025b3937&hash=e588de41d9c77f84a474a42020d450be')
    .then(showSuperHeroe) 
    .catch(function (error) {
        //MENSAJE QUE APARECERA SI NO SE PUDO REALIZAR LA BUSQUEDA
        let mensaje = document.getElementById('error');
        mensaje.classList.add('error');
        mensaje.textContent = 'No pudimos encontrar a tu Superhéroe :( Asegúrate de haber escrito bien su nombre';
        console.log('Error', error);
    });
};

showArray();

//FUNCION QUE PERMITE MOSTRAR EL NOMBRE, LA FOTO Y LA DESCRIPCION DEL SUPERHEROE
function showSuperHeroe(heroe) {
    document.getElementById('name').textContent = heroe.data.results[0].name;

    let img = document.createElement('img');
    img.src = heroe.data.results[0].thumbnail.path + '/standard_fantastic' + '.jpg';
    document.getElementById('pic').appendChild(img);
    localStorage.setItem ('imagen', img);

    let img2 = document.createElement('img');
    img2.src = heroe.data.results[0].thumbnail.path + '/detail' + '.jpg';
    document.getElementById('pic-grande').appendChild(img2);
    localStorage.setItem ('imagen', img2);

    let parrafo = document.getElementById('foto-click');
    parrafo.textContent = 'Click en la foto para más info!';
    parrafo.classList.add('foto-click');

    //CLICK EN LA IMAGEN PARA DIRIGIRTE A LA PAGINA DE DESCRIPCION DEL SUPERHEROE
    img.addEventListener('click', function (){
        location.href="descripcion.html";
    }) 

    let descrip = document.getElementById('descripcion');
    descrip.textContent = heroe.data.results[0].description;
    localStorage.setItem('descripcion', descrip);
    descrip.classList.add('text-descrip');

};
