EventListener();

const contenedor = document.getElementById("Contenedor");
const votaciones = new Votaciones();
const ZonePrint = document.getElementById("zonePrint");

function EventListener() {
    document
        .getElementById("btnCambio")
        .addEventListener("click", CambiarPantalla);
}

function CambiarPantalla() {
    const PreguntaVotacion = document.getElementById("TextoVotacion").value;

    if (PreguntaVotacion == "") return;

    eliminarDom();
    crearPantallaVotaciones(PreguntaVotacion);
}

function eliminarDom() {
    while (contenedor.firstChild) {
        contenedor.firstChild.remove();
    }
}

function crearPantallaVotaciones(TextoVotaciones) {
    const input = document.createElement("input");
    input.setAttribute("class", "form-control");
    input.value = TextoVotaciones;
    input.disabled = true;

    const row = document.createElement("div");
    row.setAttribute("class", "row mt-5 ");

    const col12 = document.createElement("div");
    col12.setAttribute("class", "col-12");

    const col12buttons = document.createElement("div");
    col12buttons.setAttribute("class", "col-12 mt-3 text-center");

    const buttonFavor = document.createElement("button");
    buttonFavor.setAttribute("class", "btn btn-outline-success mr-3");
    buttonFavor.innerText = "A Favor";

    const buttonContra = document.createElement("button");
    buttonContra.setAttribute("class", "btn btn-outline-warning mr-3");
    buttonContra.innerText = "En Contra";

    const buttonAbstinencia = document.createElement("button");
    buttonAbstinencia.setAttribute("class", "btn btn-outline-info");
    buttonAbstinencia.innerText = "Abtencion";

    const col12buttonfinalizar = document.createElement("div");
    col12buttonfinalizar.setAttribute("class", "col-12 text-center mt-5");

    const buttonFinalizar = document.createElement("a");
    buttonFinalizar.innerText = "Finalizar";
    buttonFinalizar.setAttribute("class", "btn btn-outline-dark");
    buttonFinalizar.setAttribute("id", "btnFinalizar");

    contenedor.appendChild(row);
    row.appendChild(col12);
    col12.appendChild(input);
    contenedor.appendChild(row);
    row.appendChild(col12buttons);
    col12buttons.appendChild(buttonFavor);
    col12buttons.appendChild(buttonContra);
    col12buttons.appendChild(buttonAbstinencia);
    row.appendChild(col12buttonfinalizar);
    col12buttonfinalizar.appendChild(buttonFinalizar);

    agregarEventListenerButtons();
}

function agregarEventListenerButtons() {
    const buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", ContarVotos);
    }

    document
        .getElementById("btnFinalizar")
        .addEventListener("click", finalizarApp);
}

function ContarVotos(e) {
    votaciones.ContarVotos(e.target.innerText);
}

function finalizarApp() {
    votaciones.VerificarGanador();
}

function VerificarGanador(event) {
    ZonePrint.innerText = VerificarGanador
}