class BtnCmbio{

    constructor(){
        this.inicio();

    }

    inicio(){

        const body = document.querySelector("body");
        const btnCambio = document.getElementById("btnCambio");
        btnCambio.onclick = function(){
            btnCambio.classList.toggle("active");
            body.classList.toggle("active");
            console.log("Holaa")
        }

    }
}

export default BtnCmbio;