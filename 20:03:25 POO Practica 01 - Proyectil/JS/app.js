eventListener();

function eventListener() {
    document
        .getElementById("btnCalcular")
        .addEventListener("click", CalcularRecorrido);
}

function CalcularRecorrido() {
    let angulo = Number(document.getElementById("angulo").value);
    let velocidad = Number(document.getElementById("velocidad").value);
    // Instanciar la clase

    const proyectil = new Proyectil(velocidad, angulo);

    //   console.log(proyectil.calcularDistanciaX(5));
    //   console.log(proyectil.calcularDistanciaY(1));
    proyectil.CrearSpan();
}