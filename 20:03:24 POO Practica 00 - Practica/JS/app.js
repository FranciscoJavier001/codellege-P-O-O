class Carro {
    Color = "";
    Marca = "";
    Modelo = 0;
    Motor = 0;
    PosX = 0;
    PosY = 0;

    constructor(Color, Marca, Modelo, Motor) {
        this.Color = Color;
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Motor = Motor;
    }

    avanzarX() {}
    avanzarY() {}
}

let Carro1 = new Carro('Rojo', 'Honda', 2015, 1.8);
let Carro2 = new Carro('Azul', 'Nissan', 2020, 2.0);

console.log(Carro1.Color);
console.log(Carro2.Color);