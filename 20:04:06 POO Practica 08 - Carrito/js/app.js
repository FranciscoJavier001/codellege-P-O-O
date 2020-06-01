const TablaCarrito = document.querySelector('#lista-carrito tbody');
//manda a llamar a la tabla para guardar la informacion de los cursos

EventListener();

function EventListener() {

    document.querySelector('#lista-cursos').addEventListener('click', GuardarCursoCarrito);
    document.querySelector('#carrito').addEventListener('click', EliminarCarrito);
    document.querySelector('#vaciar-carrito').addEventListener('click', VaciarCarrito);
    IniciarCarrito(); //llamar a la funcion para cargar los cursos al carrito.
}

function GuardarCursoCarrito(event) {

    event.preventDefault(); //Quitar la action del # en el html

    if (event.target.classList.value.search('agregar-carrito') == -1) return;
    //Si no estamos presionando el botton regresa un return.

    const curso = event.target.parentElement.parentElement; //Para poder ir a varias etiquetas del div e imprimir el que necesitamos

    //creamos un objeto para obtener la info del html
    const informacionCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent, //.precio por que asi se llama la clase, span es su hijo
        id: curso.querySelector('a').getAttribute('data-id'),
    };

    //instanciar la clase carrito para poder llamar al objeto
    const carrito = new Carrito();
    carrito.AgregarCursoCarrito(informacionCurso, TablaCarrito, true);

}

/*Search se utiliza para buscar la palabra */
function IniciarCarrito() {

    const cursosLS = ManipularLocalStorage.ObtenerCursoLS();
    //LLamamos la informacion del localstorage
    for (let i = 0; i < cursosLS.length; i++) {
        const carrito = new Carrito();
        carrito.AgregarCursoCarrito(cursosLS[i], TablaCarrito, false);
    }

}

//Al seleccionar la x del carrito borramos el curso
function EliminarCarrito(event) {
    if (event.target.className !== 'borrar-curso') return;
    //Si no estamos presionando el botton x hace un return
    Carrito.EliminarCursoCarrito(event.target.parentElement.parentElement);
    //Llama la funcion para efectuarlo
}

//LLamar a la funcion carrrito para poder vaciar el contenido del carrito
function VaciarCarrito() {
    Carrito.VaciarCarrito(TablaCarrito);
}