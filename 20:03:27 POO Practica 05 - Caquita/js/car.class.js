class Car {
  posicionX = 0;
  posicionY = 0;

  constructor(posicionX, posicionY) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
  }

  MoverCarro(direccion, Imagen) {
    switch (direccion) {
      case "ArrowUp":
        if (this.posicionY <= 0) return;
        Imagen.src = "./../assets/arriba.jpeg";
        Imagen.style.top = `${(this.posicionY -= 10)}px`;
        break;

      case "ArrowLeft":
        if (this.posicionX <= 0) return;
        Imagen.src = "./../assets/izq.jpeg";
        Imagen.style.left = `${(this.posicionX -= 10)}px`;
        break;

      case "ArrowRight":
        if (this.posicionX >= 900) return;
        Imagen.src = "./../assets/dere.jpeg";
        Imagen.style.left = `${(this.posicionX += 10)}px`;
        break;

      case "ArrowDown":
        if (this.posicionY >= 540) return;
        Imagen.src = "./../assets/abajo.jpeg";
        Imagen.style.top = `${(this.posicionY += 10)}px`;
        break;
    }
    // this.verificarColision(PosicionesCaquitas);
  }

  verificarColision(PosicionesCaquitas = []) {
    // console.log(this.posicionX, this.posicionY);
    for (let i = 0; i < PosicionesCaquitas.length; i++) {
      if (
        this.posicionX >= PosicionesCaquitas[i].styleLeft &&
        this.posicionX <= PosicionesCaquitas[i].styleLeftMax &&
        this.posicionY >= PosicionesCaquitas[i].styleTop &&
        this.posicionY <= PosicionesCaquitas[i].styleTopMax
      ) {
        // console.log("tocando caquita");
        return i;
        // console.log(PosicionesCaquitas[i]);
      }
    }
    return null;
  }
}
