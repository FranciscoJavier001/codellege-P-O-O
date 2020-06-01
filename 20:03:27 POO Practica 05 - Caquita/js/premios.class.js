class Premios {
    posicionX = 0;
    posicionY = 0;

    constructor(posicionX, posicionY) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
    }

    static EliminarPremio(contenedor, id) {
        contenedor.removeChild(document.getElementById(`${id}`));
    }

    CrearImagen(contenedor) {
        const imagen = document.createElement("img");
        imagen.src = "./../assets/popo.jpeg";
        imagen.style.width = "50px";
        imagen.id = `image${
      Math.random()
        .toString()
        .split(".")[1]
    }`;

        const styleLeft = this.posicionX - sizeMargin;
        const styleTop = this.posicionY;

        imagen.style.left = `${styleLeft}px`;
        imagen.style.top = `${styleTop - 25}px`;

        contenedor.appendChild(imagen);

        return {
            id: imagen.id,
            styleLeft: styleLeft - 80,
            styleTop: styleTop - 80,
            styleLeftMax: styleLeft + 50,
            styleTopMax: styleTop + 50
        };
    }
}