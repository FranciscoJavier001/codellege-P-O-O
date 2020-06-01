const Imagen = document.getElementById("CuerpoHumano");
const ZonePrint = document.getElementById("zonePrint");

EventListener();

function EventListener(){
    Imagen.addEventListener("mousemove", PartesCuerpo);
}

function PartesCuerpo(event){

       ZonePrint.innerText 
       = CuerpoHumano.SeleccionarPartesCuerpo(event.x,event.y);  
}