class Tareas {
    Actividades = "";

    constructor(Actividades) {
        this.Actividades = Actividades;
    }

    AgregarTareas(Contenedor, Origen) {

        const li = document.createElement('li');
        li.classList = "list-group-item text-break mt-2";
        li.textContent = this.Actividades;
        Contenedor.appendChild(li);

        const boton = document.createElement('button');
        boton.classList = "close";
        li.appendChild(boton);

        const span = document.createElement('span');
        span.classList = "badge badge-pill text-dark";
        span.textContent = "X";
        boton.appendChild(span);

        if (Origen) ManipularLocalStorage.AgregarActividadesLocalStorage(this.Actividades);
    }

    ImprimirFinalizarTareas(Contenedor) {

        const lifinalizar = document.createElement('li');
        lifinalizar.classList = "list-group-ite text-break mt-2";
        lifinalizar.textContent = this.Actividades;
        Contenedor.appendChild(lifinalizar);
    }

    static EliminarActividades(event) {
        if (event.target.tagName != 'SPAN')
            return;
        const LiBorrar = event.target.parentElement.parentElement;
        let TextoLiBorrar = LiBorrar.textContent.substring(0, LiBorrar.textContent.length - 1);
        ManipularLocalStorage.TerminarActividadesLS(TextoLiBorrar);
        LiBorrar.remove();
    }
}