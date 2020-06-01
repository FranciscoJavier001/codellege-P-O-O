eventListener();

const foco = new Foco();
const imagen = document.getElementById("imagen");

function eventListener() {
    document.getElementById("btnPrender").addEventListener("click", CambioEstado);
}

function CambioEstado() {
  imagen.src = foco.CambiarEstado();
}