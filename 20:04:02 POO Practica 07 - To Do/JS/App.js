const Actividades = document.querySelector('#Tareas');
const ListaPendientes = document.querySelector('#ActividadesPendientes');
const ListaFinalizadas = document.querySelector('#ActividadesFinalizadas');

EventListener();
CargarActividadesLS();

function EventListener() {
    document.querySelector('#formulario').addEventListener('submit', IngresarTareasListado);
    ListaPendientes.addEventListener('click', EliminarActividad);
}

function IngresarTareasListado(event) {
    event.preventDefault();
    if (Actividades.value.trim() == "") return;
    const MostrarListado = new Tareas(Actividades.value);
    MostrarListado.AgregarTareas(ListaPendientes, true);
    Actividades.value = "";
}

function EliminarActividad(event) {
    Tareas.EliminarActividades(event);
    const LiBorrar = event.target.parentElement.parentElement;
    let TextoLiBorrar = LiBorrar.textContent.substring(0, LiBorrar.textContent.length - 1);
    const ActividadTerminar = new Tareas(TextoLiBorrar);
    ActividadTerminar.ImprimirFinalizarTareas(ListaFinalizadas, false);
}

function CargarActividadesLS() {
    const ActividadesLS = ManipularLocalStorage.ObtenerLocalStorage();
    for (let y = 0; y < ActividadesLS.length; y++) {
        const MostrarListado = new Tareas(ActividadesLS[y]);
        MostrarListado.AgregarTareas(ListaPendientes, false);
    }

    const FinalizadasLS = ManipularLocalStorage.ObtenerLocalStorage();
    for (let z = 0; z < FinalizadasLS.length; z++) {
        const MostrarListadoTerminado = new Tareas(FinalizadasLS[z])
        MostrarListadoTerminado.AgregarTareas(ListaFinalizadas, false);
    }
}