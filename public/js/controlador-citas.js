/********************************************************************************************JS Registro Cita */

let txtNombre = document.querySelector('#txtNombre');
let dateFechaProgramada = document.querySelector('#dateFechaProgramada');
let txtIdCita = document.querySelector('#idCita');
let btnRegistrar = document.querySelector('#btnRegistrar');
let btnCancelar = document.querySelector('#btnCancelar');
// let divModDes = document.querySelector('#btnModDes');

dateFechaProgramada.min=new Date().toISOString().slice(0,10);




let elementosForm=[];


let formCita =document.querySelector('#formCita');

llenarTabla();






//junta los datos de input en un array y los devuelve como variable
function juntarDatos(){
    let datos=[];
    let stxtNombre=txtNombre.value;
    let dateFecha=(new Date(document.querySelector('#dateFechaProgramada').value)).toUTCString();
    let id=txtIdCita.value;
    datos.push(id,stxtNombre,dateFecha);
    elementosForm=[];
    // elementosForm.push();
    return datos;
}

//valida que los datos esten completos
function validaDatos() {
    let completo=true;
    for(let i=0;i<elementosForm.length;i++){
        if(elementosForm[i].value==""){
            elementosForm[i].classList.add("warning");
            completo=false;
        }
        else{
            elementosForm[i].classList.remove("warning");
        }
    }


    return completo;
}






//limpia todos los datos del formulario
function limpiar(){
    formCita.reset();
  }


/******************************************************************************************** Fin JS Registro Cita */


/*MODAL */

// let btnFormulario=document.querySelector('#btnAbrirModal');
// btnFormulario.addEventListener('click',abrirModal);

btnCancelar.addEventListener('click',cerrarModal);

//abre el modal y queda como inicia el boton de Registrar
function abrirModal() {
    // habilitarInput();
    let modal=document.querySelector('#registarContainer');
    modal.classList.remove('ocultar');
}

//Cierra el modal y limpia el formulario de todos las clases y deja como inicial
function cerrarModal(){
    let modal=document.querySelector('#registarContainer');
    modal.classList.add('ocultar');

    let titulo=document.querySelector('#formTitulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Registrar Cita"));
    btnRegistrar.classList.remove('warning');
    limpiar();
    quitarWarning();
}

// abre el modal modificado para vizualizar solamente
function modModal() {
    // habilitarInput()
    let titulo=document.querySelector('#formTitulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Programar Cita"));
    // divModDes.classList.remove('ocultar')
    btnRegistrar.addEventListener('click',programarCita);
    btnRegistrar.classList.remove("ocultar");
    btnRegistrar.value="Programar";
    btnCancelar.value="Cerrar";

    
    
}

/*MODAL */









/********************************************************************************************JS LLENAR TABLA Cita */
function llenarTabla(){
    let tablaCitas = obtenerListaCitas();

    let cuerpoTabla=document.querySelector('#tablaCitas tbody')

    cuerpoTabla.innerHTML='';

    for(let i=0;i<tablaCitas.length;i++){
        if(true){
       
                let fila=cuerpoTabla.insertRow()
                let columnaCedula=fila.insertCell();
                let columnaNombre=fila.insertCell();
                let columnaCorreo=fila.insertCell();
                let columnaFechaPedido=fila.insertCell();
                let columnaFechaCita=fila.insertCell();
                let columnaConfiguracion=fila.insertCell();
            if(tablaCitas[i][5]==""){
                let btnEditar=document.createElement('a');
                btnEditar.id=tablaCitas[i]['cedula'];
                btnEditar.classList.add('fa');
                btnEditar.classList.add('fa-calendar');
                btnEditar.classList.add('fechaPendiente');
        
                btnEditar.addEventListener('click',GenerarCita);
                columnaConfiguracion.appendChild(btnEditar);
            }
            else{
                let btnEditar=document.createElement('a');
                btnEditar.id=tablaCitas[i]['cedula'];
                btnEditar.classList.add('fa');
                btnEditar.classList.add('fa-calendar-check-o');
                btnEditar.classList.add('fechaLista');
                btnEditar.addEventListener('click',verCita);
                columnaConfiguracion.appendChild(btnEditar);
                
                }
            

                
                
                columnaCedula.innerHTML=tablaCitas[i]['cedula'] ;
                columnaNombre.innerHTML=tablaCitas[i]['codigo']+" "+tablaCitas[i]['codigo'];
                columnaCorreo.innerHTML=tablaCitas[i]['monto'];
                columnaFechaPedido.innerHTML=tablaCitas[i]['fechaPedido'];
                columnaFechaCita.innerHTML=tablaCitas[i]['fechaRetiro'];
                // columnaFechaCita.innerHTML=(tablaCitas[i][5].value).ToString("g",DateTimeFormatInfo.InvariantInfo);
            }
    }
}

/********************************************************************************************JS LLENAR TABLA Cita */







/********************************************************************************************JS Listar Cita */


/*********************************************************************************************Modoficar Cita */
//funcion que abre el modal y realiza las modificaiocnes
function GenerarCita() {
    
    modModal();
    abrirModal();
    llenarModal(this.id);
    habilitarInput();
    
    
}
function verCita() {
    
    modModal();
    let titulo=document.querySelector('#formTitulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Cita"));
    abrirModal();
    llenarModal(this.id);
    btnRegistrar.classList.add("ocultar");
    deshabilitarInput();
}
// llena el formulario con los datos del card o intitucion correcta
function llenarModal(pid) {
    let listaCitas=obtenerListaCitas();
    for(let i=0;i<listaCitas.length;i++){
       if(pid==listaCitas[i]['cedula']){
            document.querySelector('#idCita').value=listaCitas[i]['cedula'];
            document.querySelector('#txtNombre').value=listaCitas[i]['codigo']+" "+listaCitas[i]['codigo'];
            document.querySelector('#dateFechaProgramada').value=listaCitas[i]['fechaRetiro'];
       }
    }
}

//habilita la modificacion y prepara el modal para estado de modificacion
function modificarCita() {
    habilitarInput();

    let titulo=document.querySelector('#formTitulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Modifcar Cita"));
    // divModDes.classList.add('ocultar')
    btnRegistrar.classList.remove('ocultar');
    btnCancelar.value="Cancelar";

    btnRegistrar.addEventListener('click',programarCita);

    verCita();


    
}

//guarda en LS la institucion actualizada
function programarCita() {
        //validar datos
        let datosCita=juntarDatos();
        datosCita[5]=document.querySelector('#dateFechaProgramada').value;
        if(validaDatos()){
            actualizarListaCitaPorCod(datosCita);
            limpiar();
            llenarTabla();
            cerrarModal();
        }
}
    


/*********************************************************************************************Modoficar Cita */







/*********************************************************************************************deshabilitar Cita */
// prepara el modal para la vista de dehabilitar
function deshabilitarCita() {  
    abrirModal();
    llenarModal(this.id);
    let titulo=document.querySelector('#formTitulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Deshabilitar Cita"));
    btnRegistrar.classList.remove('ocultar');
    btnRegistrar.value="Deshabilitar";
    btnRegistrar.classList.add('warning');
    btnCancelar.value="Cancelar";

    btnRegistrar.removeEventListener('click',guardarCita);
    btnRegistrar.addEventListener('click',deshabilitarCitaDefinitivo);
}
// realiza la deshabilitacion de la institucion
function deshabilitarCitaDefinitivo() {
    let datosCita=juntarDatos();
    datosCita[0]=document.querySelector('#idCita').value;
    datosCita[3]=false;
    actualizarListaCitaPorCod(datosCita);
    limpiar();
    llenarTabla();
    cerrarModal();
}

//elimina las clases de warning de todo el formulario
function quitarWarning() {
    for(let i=0;i<elementosForm.length;i++){

        elementosForm[i].classList.remove("warning");
    }

}















/*********************************************************************************************deshabilitar Cita */








/*Extra Funciones */

//deshabilita los input del formulario
function deshabilitarInput() {
    document.querySelector('#dateFechaProgramada').disabled=true;

    
}   

//habilita los input del formulario
function habilitarInput() {
    document.querySelector('#dateFechaProgramada').disabled=false;
    
}  