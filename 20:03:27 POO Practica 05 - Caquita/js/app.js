const imagen = document.getElementById("Carro");
let sizeMargin = 0;
// let sizeMarginBottom = 0;
const carro = new Car(0, 0);
let posicionImagenes = [];
let contenedor = document.getElementById("contenedor");
let acumulador = 0;
const puntos = document.getElementById("Puntos");
eventListener();

function eventListener() {
    document.addEventListener("keydown", moveCar);
    contenedor.addEventListener("click", AddPrize);
    window.addEventListener("resize", ObtenerMargin);
}

function moveCar(event) {
    carro.MoverCarro(event.key, imagen);
    //   console.log(event);
    const response = carro.verificarColision(posicionImagenes);

    if (response != null) {
        Premios.EliminarPremio(contenedor, posicionImagenes[response].id);
        posicionImagenes.splice(response, 1);
        acumulador++;
        console.log(acumulador);
        puntos.innerText = acumulador;
    }
}

function AddPrize(event) {
    //   console.log(event);
    ObtenerMargin();
    const prize = new Premios(event.x, event.y);
    posicionImagenes.push(prize.CrearImagen(contenedor, sizeMargin));
    // console.log(posicionImagenes);
    // console.log(prize.CrearImagen(contenedor, sizeMargin));
}

function ObtenerMargin() {
    const MarginContainer = window
        .getComputedStyle(contenedor)
        .getPropertyValue("margin-left");

    // const MarginLeftSize = MarginContainer.substring(
    //   0,
    //   MarginContainer.length - 2
    // );
    sizeMargin = MarginContainer.substring(0, MarginContainer.length - 2);
    MarginContainerBottom = window
        .getComputedStyle(contenedor)
        .getPropertyValue("margin-bottom");

    // sizeMarginBottom = MarginContainerBottom.substring(
    //   0,
    //   MarginContainerBottom.length - 2
    // );

    // console.log(typeof MarginContainer);
    // console.log(MarginLeftSize);

    // console.log(sizeMargin);
    // console.log(sizeMarginBottom);
}