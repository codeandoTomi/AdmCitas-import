import Citas from "./classes/citas.js";
import UI from './classes/UI.js';
import { 
    nombreInput,
    apellidoInput,
    telefonoInput,
    fechaInscripcionInput,
    horaInput,
    comentariosInput,
    formulario
} from './selectores.js';

const ui = new UI();
const administrarCitas = new Citas();

let editand00;


///// OBJETO DONDE GUARDAMOS INFORMACION USUARIO.
const citaObj = {
    nombre: "",
    apellido: "",
    telefono: "",
    fechaInscripcion: "",
    hora: "",
    comentarios: ""
}

////// FUNCION DONDE ITERAMOS SOBRE CADA "name" Y SE COLOCA CON
/////      EL PARAMATRO e.target.value. 
//// AGREGA DATOS AL OBEJETO citaObj.
export function datosCita(e){
    citaObj[e.target.name] = e.target.value;
    // console.log(citaObj)
}


//////////// FUNCION QUE CREA EL OBJETO. con el button.
export function nuevaCita(e){
    e.preventDefault();

    // extraer informacion del objeto cita.
        const { nombre, apellido, telefono, fechaInscripcion, hora, comentarios } = citaObj;
    // validar.
        if(nombre === '' || apellido === '' || telefono === '' || fechaInscripcion === '' || hora === '' || comentarios === ''){
            // console.log("todos los cambios son obligatorios.")
            ui.imprimirAlerta("Todos los campos son obligatorios", "error")
            return // NO EJECUTA LA SIGUIENTE LINEA...
        }

        if(editand00 === true){
            ui.imprimirAlerta("Editado Correctamente");
            administrarCitas.editarCita( {...citaObj} );
            // regresa el texto del boton a su estado original..
            formulario.querySelector(".buttonCrearCita").querySelector("button").textContent = "Crear Cita"
            editand00 = false;
        
        } else{
            // console.log(citaObj)
            ///// GENERAR UN ID
            citaObj.id = Date.now();
            administrarCitas.agregarCita({...citaObj});
            ////// MENSAJEEEE
            ui.imprimirAlerta("Se agrego correctamente.");
        }


        
        ////// Reiniciar obejto para la validacion.
        reiniciarObj();

        formulario.reset();

        ////// MOSTRAR EN EL HTML.
        ui.imprimirCitas(administrarCitas);


}
//////////////////////////////////////////////////////////////////////////////////////////////////
export function reiniciarObj(){
    citaObj.nombre = "";
    citaObj.apellido = "";
    citaObj.telefono = "";
    citaObj.fechaInscripcion = "";
    citaObj.hora = "";
    citaObj.comentarios = "";

}
////////////////////////////////////////////////////////////////////////////////////////////////////
export function eliminarCita(id){
    // console.log(id)
    administrarCitas.eliminarCita(id);

    ui.imprimirAlerta("la cita se elimino correctamenete");
    ui.imprimirCitas(administrarCitas);

}
///////////////////////////////////////////////////////////////////////////////////////////////////
export function editando(cita){
    // console.log(cita);

    const { nombre, apellido, telefono, fechaInscripcion, hora, comentarios, id } = cita;
    
    nombreInput.value = nombre;
    apellidoInput.value = apellido;
    telefonoInput.value = telefono;
    fechaInscripcionInput.value = fechaInscripcion;
    horaInput.value = hora;
    comentariosInput.value = comentarios;


    // llenarlo al objeto
    citaObj.nombre = nombre;
    citaObj.apellido = apellido;
    citaObj.telefono = telefono;
    citaObj.fechaInscripcion = fechaInscripcion;
    citaObj.hora = hora;
    citaObj.comentarios = comentarios;
    citaObj.id = id;

    // cambiar texto botton
    // formulario.querySelector('button[type="submit"]').textContent = "Guardar Cambios"
    formulario.querySelector(".buttonCrearCita").querySelector("button").textContent = "Guardar Cambios."
    editand00 = true;

}