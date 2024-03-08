import { eliminarCita, editando } from '../funciones.js';
import { contenedorCitas } from '../selectores.js';


class UI{

    imprimirAlerta(mensaje, tipo){
        ///// CREAR DIV  MSJ //////
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("divMensaje")
        ///////// tipo = "error"
        if(tipo === "error"){
            divMensaje.classList.add("tipoError");
        } else{
            divMensaje.classList.add("tipoCorrecto");
        }
        /////// MENSAJE //////
        divMensaje.textContent = mensaje;
        ////// AGREGAR AL DOM ///////
        document.querySelector(".form1").insertBefore(divMensaje, document.querySelector(".buttonCrearCita"));
        /////// QUITAR ALERTA ///////// 
        setTimeout(() =>{
            divMensaje.remove();
        }, 3000)
    
    }


    imprimirCitas({citas}){

        this.limpiarHTML();

        // console.log(citas)
        citas.forEach( cita => {
            const { nombre, apellido, telefono, fechaInscripcion, hora, comentarios, id } = cita; // itera sobre cada uno de los datos del objeto.
            const divCita = document.createElement("div");
            divCita.classList.add("divCita");
            divCita.dataset.id = id; // AGREGO ID AL OBJETO.

            const nombreHTML = document.createElement("h2");
            nombreHTML.classList.add("nombreH2");
            nombreHTML.textContent = nombre;

            const apellidoHTML = document.createElement("p");
            apellidoHTML.innerHTML = `
                <span class="negrita"> Apellido: </span> ${apellido}
            `;

            const telefonoHTML = document.createElement("p");
            telefonoHTML.innerHTML = `
                <span class="negrita"> Telefono: </span> ${telefono}
            `;

            const fechaInscripcionHTML = document.createElement("p");
            fechaInscripcionHTML.innerHTML = `
                <span class="negrita"> Fecha de inscripcion: </span> ${fechaInscripcion}
            `;

            const horaHTML = document.createElement("p");
            horaHTML.innerHTML = `
                <span class="negrita"> Hora: </span> ${hora}
            `;

            const comentariosHTML = document.createElement("p");
            comentariosHTML.innerHTML = `
                <span class="negrita"> Comentarios: </span> ${comentarios}
            `;

            const btnEliminarHTML = document.createElement('button');
            btnEliminarHTML.type = 'button';
            btnEliminarHTML.classList.add("btnBorrar");
            btnEliminarHTML.innerHTML = 'Eliminar';

            btnEliminarHTML.onclick = () =>{
                eliminarCita(id)
            };

            const btnEditarHTML = document.createElement("button")
            btnEditarHTML.type = 'button';
            btnEditarHTML.classList.add("btnEditar");
            btnEditarHTML.innerHTML = 'Editar';

            btnEditarHTML.onclick = () => {
                editando(cita)
            }


            ////////// AGREGAMOS EL PARRAFO AL DIV.
            divCita.appendChild(nombreHTML);
            divCita.appendChild(apellidoHTML);
            divCita.appendChild(telefonoHTML);
            divCita.appendChild(fechaInscripcionHTML);
            divCita.appendChild(horaHTML);
            divCita.appendChild(comentariosHTML);
            divCita.appendChild(btnEliminarHTML);
            divCita.appendChild(btnEditarHTML);

            //////////// AGREGAR CITA AL HTML.

            contenedorCitas.appendChild(divCita);


        })
    }

    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild( contenedorCitas.firstChild )
        }
    }

}

export default UI;