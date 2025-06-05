
//Obtener cambio de header
const header = document.querySelector('#header-container');
const logo = document.querySelector('#logo-vidanta');
const texto = document.querySelectorAll(".text-white") // Obtiene una lista con todas las clases de ese nombre
//Escuchar el evento de scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > window.innerHeight/1.2) { //Se hace la division para saber en que momento hacer la conversión
        header.className = 'scrolled';
        logo.src = "images/vv-logo-cafe.png";
        texto.forEach((elemento) => {
            elemento.className= "text-gray";
        });
    } else {
        header.className = 'header-container';
        logo.src = "images/vv-logo.png";
        texto.forEach((elemento) => {
            elemento.className= "text-white";
        });
    }
});

//carrusel 1
var splide = new Splide( '#splide-1', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
  } );
  
  splide.mount();
//Eliminar iconos de slider
document.addEventListener('DOMContentLoaded', () => {
    const pagination = document.querySelector('.splide__pagination.splide__pagination--ltr');
    if (pagination) {
        pagination.remove(); // Elimina el elemento de la página
    }
});

//Carrusel 2
  var splide = new Splide( '#splide-2', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
  } );
  
  splide.mount();
//Eliminar iconos de slider
document.addEventListener('DOMContentLoaded', () => {
    const pagination = document.querySelector('.splide__pagination.splide__pagination--ltr');
    if (pagination) {
        pagination.remove(); // Elimina el elemento de la página
    }
});

//Animacion de Izquierda a derecha destinos
window.addEventListener("scroll",function(){
    let animacionDestinos = document.getElementById("splide-1");
    let posicionObjetoDestinos = animacionDestinos.getBoundingClientRect().top; //Obtiene la posición deo objeto
    let tamañoDePantalla = window.innerHeight; //Apartir de que punto crea la animación

    if(posicionObjetoDestinos < tamañoDePantalla){
        animacionDestinos.style.animation = 'mover 1s ease-out';
    }
})


//Animacion de Izquierda a derecha destinos
window.addEventListener("scroll",function(){
    let animacionExperiencias = document.getElementById("splide-2");
    let posicionObjetoExperiencias = animacionExperiencias.getBoundingClientRect().top; //Obtiene la posición deo objeto
    let tamañoDePantalla = window.innerHeight; //Apartir de que punto crea la animación

    if(posicionObjetoExperiencias < tamañoDePantalla){
        animacionExperiencias.style.animation = 'mover 1s ease-out';
    }
})

//Animacion mover abajo hacia arriba bienvenida
window.addEventListener("scroll",function(){
    let animacionBienvenida = document.getElementById("parrafo-bienvenida");
    let posicionObjetoBienvenida = animacionBienvenida.getBoundingClientRect().top; //Obtiene la posición deo objeto
    let tamañoDePantalla = window.innerHeight; //Apartir de que punto crea la animación

    if(posicionObjetoBienvenida < tamañoDePantalla){
        animacionBienvenida.style.animation = 'mover-vertical .5s ease-out';
    }
})
//Animacion mover abajo hacia arriba lujo de mar
window.addEventListener("scroll",function(){
    let animacionLujoDeMar = document.getElementById("lujo-mar");
    let posicionObjetoLujoDeMar = animacionLujoDeMar.getBoundingClientRect().top; //Obtiene la posición deo objeto
    let tamañoDePantalla = window.innerHeight; //Apartir de que punto crea la animación

    if(posicionObjetoLujoDeMar < tamañoDePantalla){
        animacionLujoDeMar.style.animation = 'mover-vertical .7s ease-out';
    }
})
//Animacion mover abajo hacia arriba Destinos
window.addEventListener("scroll",function(){
    let animacionDestinos = document.getElementById("texto-destinos");
    let posicionObjetoDestinos = animacionDestinos.getBoundingClientRect().top; //Obtiene la posición deo objeto
    let tamañoDePantalla = window.innerHeight; //Apartir de que punto crea la animación

    if(posicionObjetoDestinos < tamañoDePantalla){
        animacionDestinos.style.animation = 'mover-vertical .7s ease-out';
    }
})

//Animacion mover abajo hacia arriba Destinos
window.addEventListener("scroll",function(){
    let animacionHoteles = document.getElementById("text-hoteles");
    let posicionObjetoHoteles = animacionHoteles.getBoundingClientRect().top; //Obtiene la posición deo objeto
    let tamañoDePantalla = window.innerHeight; //Apartir de que punto crea la animación

    if(posicionObjetoHoteles < tamañoDePantalla){
        animacionHoteles.style.animation = 'mover-vertical .7s ease-out';
    }
})

window.addEventListener("scroll", function () {
    let animacionHoteles = document.getElementById("card-1");
    let posicionObjetoHoteles = animacionHoteles.getBoundingClientRect().top; // Obtiene la posición del objeto
    let tamañoDePantalla = window.innerHeight; // Punto donde activa la animación

    if (posicionObjetoHoteles < tamañoDePantalla) {
        const elementos = document.querySelectorAll('.card');
        // Ocultar los elementos
        elementos.forEach((elemento) => {
            elemento.style.opacity = '0'; //Ocultar

        });
        // Simular tiempo antes de reinserción
        setTimeout(() => {
            elementos.forEach((elemento, index) => {
                // Agregar animación
                setTimeout(() => {
                    elemento.style.opacity = '1'; // Mostrar de nuevo
                    elemento.style.animation = 'mover-vertical-cards 1s ease-out forwards';
                }, index * 50); // Retraso entre elementos
            });
        }, 500); // Tiempo antes de iniciar la animación
    }
});
