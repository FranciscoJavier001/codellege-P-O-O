class Votaciones {
    Afavor = 0;
    EnContra = 0;
    Abtencion = 0;

    ContarVotos(BotonPresionado) {
        switch (BotonPresionado) {
            case "A Favor":
                this.Afavor++;
                break;

            case "En Contra":
                this.EnContra++;
                break;

            case "Abtencion":
                this.Abtencion++;
                break;
        }

        console.log(this.Afavor, this.EnContra, this.Abtencion);
    }

    VerificarGanador() {
        if (this.Afavor > this.EnContra) {
            if (this.Afavor > this.Abtencion) {
                console.log(`A Ganado A Favor con ${this.Afavor} Votos`);
            } else {
                console.log(`A Ganado Abstencion con ${this.Abtencion} Votos`);
            }
        } else if (this.EnContra > this.Abtencion) {
            console.log(`A Ganado En Contra con ${this.EnContra} Votos`);
        } else {
            console.log(`A Ganado Abstencion con ${this.Abtencion} Votos`);
        }
    }
}