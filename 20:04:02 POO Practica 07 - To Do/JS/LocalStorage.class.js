class ManipularLocalStorage {

    static ActividadesPendientes = [];
    static ActividadesTerminadas = [];

    static AgregarActividadesLocalStorage(ContenidoActividad) {

        this.ActividadesPendientes = this.ObtenerLocalStorage();
        this.ActividadesPendientes.push(ContenidoActividad);
        localStorage.setItem('Lista', JSON.stringify(this.ActividadesPendientes));
    }

    static ObtenerLocalStorage() {

        let TareasObtenidasLocalStorage = [];
        if (localStorage.getItem('Lista') === null) {
            return TareasObtenidasLocalStorage;
        }
        return JSON.parse(localStorage.getItem('Lista'));
    }

    static TerminarActividadesLS(ContenidoTerminar) {

        let ActividadPendienteLS = this.ObtenerLocalStorage();
        let ActividadFinalizadaLS = this.ObtenerLocalStorage();
        let newArray = [];

        for (let x = 0; x < ActividadPendienteLS.length; x++) {
            if (ContenidoTerminar !== ActividadPendienteLS[x]) {
                newArray.push(ActividadPendienteLS[x]);
            } else {
                ActividadFinalizadaLS.push(ActividadPendienteLS[x]);
            }
        }
        localStorage.setItem('Lista', JSON.stringify(newArray));
        localStorage.setItem('Terminadas', JSON.stringify(ActividadFinalizadaLS));
    }
}