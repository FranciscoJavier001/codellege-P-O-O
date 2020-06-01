class Carrito {
    AgregarCursoCarrito(InformacionCurso, TablaCarrito, origen) {
        if (
            ManipularLocalStorage.VerificarCursoRepetido(InformacionCurso.id) &&
            origen
        )
            return;
        // Manda a llamar la funcion para que no se escriba el curso de nuevo al seleccionarlo.

        //crear una tabla para imprimir la informacion en el carrito
        const TableRow = document.createElement("tr");
        TableRow.innerHTML = `
            <td>
                <img src="${InformacionCurso.imagen}" width="100px"/>
            </td>
            <td>
                ${InformacionCurso.titulo}
            </td>
            <td>
                ${InformacionCurso.precio}
            </td> 
            <td>
                <a class="borrar-curso" id="${InformacionCurso.id}">X</a>
            </td> 
        `;
        TablaCarrito.appendChild(TableRow); // Mostrarlo en el cuadro de la tabla

        if (origen)
            ManipularLocalStorage.AgregarCarritoLocalStorage(InformacionCurso);
        // Manda la info en el localstorage
    }

    //Eliminar la informacion del carrito
    static EliminarCursoCarrito(nodeDOM) {
        const IdCurso = nodeDOM
            .querySelector(".borrar-curso")
            .getAttribute("data-id");
        ManipularLocalStorage.EliminarCursoLS(IdCurso);
        nodeDOM.remove();
    }

    static VaciarCarrito(TablaCursos) {
        while (TablaCursos.firstChild) {
            TablaCursos.firstChild.remove();
        }

        ManipularLocalStorage.VaciarCarritoLS();
    }
}