class CuerpoHumano {
    X = 0;
    Y = 0;
    ParteCuerpo = "";

    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
    }

    static SeleccionarPartesCuerpo(PosicionX, PosicionY) {
        console.log(PosicionX, PosicionY);

        if (
            PosicionX >= 550 &&
            PosicionX <= 615 &&
            PosicionY >= 135 &&
            PosicionY <= 201
        ) {
            this.ParteCuerpo = "Cabeza";
        } else if (
            PosicionX >= 562 &&
            PosicionX <= 602 &&
            PosicionY >= 201 &&
            PosicionY <= 218
        ) {
            this.ParteCuerpo = "Cuello";
        } else if (
            PosicionX >= 535 &&
            PosicionX <= 632 &&
            PosicionY >= 219 &&
            PosicionY <= 267
        ) {
            this.ParteCuerpo = "Pecho";
        } else if (
            PosicionX >= 541 &&
            PosicionX <= 632 &&
            PosicionY >= 279 &&
            PosicionY <= 345
        ) {
            this.ParteCuerpo = "Estomago";
        } else if (
            PosicionX >= 484 &&
            PosicionX <= 530 &&
            PosicionY >= 223 &&
            PosicionY <= 364
        ) {
            this.ParteCuerpo = "Brazo Izquierdo";
        } else if (
            PosicionX >= 463 &&
            PosicionX <= 511 &&
            PosicionY >= 361 &&
            PosicionY <= 404
        ) {
            this.ParteCuerpo = "Mano Izquierda";
        } else if (
            PosicionX >= 634 &&
            PosicionX <= 684 &&
            PosicionY >= 217 &&
            PosicionY <= 358
        ) {
            this.ParteCuerpo = "Brazo Derecho";
        } else if (
            PosicionX >= 655 &&
            PosicionX <= 700 &&
            PosicionY >= 365 &&
            PosicionY <= 404
        ) {
            this.ParteCuerpo = "Mano Derecha";
        } else if (
            PosicionX >= 531 &&
            PosicionX <= 574 &&
            PosicionY >= 348 &&
            PosicionY <= 554
        ) {
            this.ParteCuerpo = "Pierna Izquierda";
        } else if (
            PosicionX >= 547 &&
            PosicionX <= 576 &&
            PosicionY >= 565 &&
            PosicionY <= 580
        ) {
            this.ParteCuerpo = "Pie Izquierdo";
        } else if (
            PosicionX >= 589 &&
            PosicionX <= 618 &&
            PosicionY >= 349 &&
            PosicionY <= 560
        ) {
            this.ParteCuerpo = "Pierna Derecha";
        } else if (
            PosicionX >= 594 &&
            PosicionX <= 626 &&
            PosicionY >= 566 &&
            PosicionY <= 580
        ) {
            this.ParteCuerpo = "Pie Derecho";
        } else {
            this.ParteCuerpo = "Señala el Cuerpo";
        }
        return this.ParteCuerpo;
    }
}