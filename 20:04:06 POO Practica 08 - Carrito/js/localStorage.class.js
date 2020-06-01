class ManipularLocalStorage {
    static AgregarCarritoLocalStorage(informacionCursos) {
        let cursosLS = this.ObtenerCursoLS(); // buscar si tiene informacion en el localstorage
        cursosLS.push(informacionCursos);
        localStorage.setItem("Cursos", JSON.stringify(cursosLS));
        // guardar la informacion en el localstorage
    }

    static ObtenerCursoLS() {
        if (localStorage.getItem("Cursos") == null) return [];
        // cuando no existe un valor regresa el valor null
        return JSON.parse(localStorage.getItem("Cursos"));
        //cuando tenga informacion lo imprime en un arreglo
    }

    static EliminarCursoLS(idCurso) {
        let CursoLS = this.ObtenerCursoLS();
        let nuevosCursos = [];

        for (let i = 0; i < CursoLS.length; i++) {
            if (CursoLS[i].id != idCurso) {
                nuevosCursos.push(CursoLS[i]);
            }
        }
        localStorage.setItem("Cursos", JSON.stringify(nuevosCursos));
    }

    static VaciarCarritoLS() {
        localStorage.clear();
        // El metodo clear se utiliza para limpiar el contenido de la tabla
    }

    //Verificar si se le seleccionar dos cursos mas
    static VerificarCursoRepetido(idCurso) {
        //obtener todos los cursos
        const CursosLS = this.ObtenerCursoLS();
        //verifica que los id son diferentes
        for (let x = 0; x < CursosLS.length; x++) {
            if (idCurso == CursosLS[x].id) {
                return true; // Si encuentra un curso repetido entra a true y compara
            }
        }
        return false; // Significa que no existia ningun curso
    }
}