import { datosCita, nuevaCita } from '../funciones.js';
import { 
    nombreInput,
    apellidoInput,
    telefonoInput,
    fechaInscripcionInput,
    horaInput,
    comentariosInput,
    formulario
} from '../selectores.js';

class App{
    constructor(){
        this.initApp();
    }


    initApp(){
        nombreInput.addEventListener("input", datosCita);
        apellidoInput.addEventListener("input", datosCita);
        telefonoInput.addEventListener("input", datosCita);
        fechaInscripcionInput.addEventListener("input", datosCita);
        horaInput.addEventListener("input", datosCita);
        comentariosInput.addEventListener("input", datosCita);

        formulario.addEventListener("submit", nuevaCita);
    }
}

export default App;