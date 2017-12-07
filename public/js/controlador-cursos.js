/********************************************************************************************JS Registro Curso */

let txtNombre = document.querySelector('#txtNombre');
let txtDescripcion = document.querySelector('#txtDescripcion');
let txtIdCurso = document.querySelector('#idCurso');
let btnRegistrar = document.querySelector('#btnRegistrar');
let btnCancelar = document.querySelector('#btnCancelar');
// let divModDes = document.querySelector('#btnModDes');




let elementosForm=[];


let formCurso =document.querySelector('#formCurso');

llenarTabla();






//junta los datos de input en un array y los devuelve como variable
function juntarDatos(){
    let datos=[];
    let lista="codLista";
    let stxtNombre=txtNombre.value;
    let sDireccion=txtDescripcion.value;
    let id=txtIdCurso.value;
    datos.push(id,stxtNombre,sDireccion,true,indicarCodColegio(),lista);
    elementosForm=[];
    elementosForm.push(txtNombre,txtDescripcion);
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


//Guarda los datos ingresados al localS, limpia los campos al final
function guardarCurso(){
    //validar datos
    let datosCurso=juntarDatos();
    if(validaDatos()){
        registrarCurso(datosCurso);
        limpiar();
        llenarTabla();
        cerrarModal();
    }
}





//limpia todos los datos del formulario
function limpiar(){
    formCurso.reset();
  }


/******************************************************************************************** Fin JS Registro Curso */


/*MODAL */

let btnFormulario=document.querySelector('#btnAbrirModal');
btnFormulario.addEventListener('click',abrirModal);

btnCancelar.addEventListener('click',cerrarModal);

//abre el modal y queda como inicia el boton de Registrar
function abrirModal() {
    habilitarInput();
    txtIdCurso.value="Cur"+obtenerListaCursos().length;
    let modal=document.querySelector('#modal');
    modal.classList.remove('ocultarRegistro');
    btnRegistrar.removeEventListener('click',deshabilitarCursoDefinitivo);
    btnRegistrar.removeEventListener('click',guardarCursoMod);
    btnRegistrar.addEventListener('click',guardarCurso);
}

//Cierra el modal y limpia el formulario de todos las clases y deja como inicial
function cerrarModal(){
    let modal=document.querySelector('#modal');
    modal.classList.add('ocultarRegistro');

    let titulo=document.querySelector('#formTitulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Registrar Curso"));
    // divModDes.classList.add('ocultarRegistro')
    btnRegistrar.value="Registrar";
    btnRegistrar.classList.remove('ocultarRegistro');
    btnCancelar.value="Cancelar";
    btnRegistrar.classList.remove('warning');
    limpiar();
    quitarWarning();
}

// abre el modal modificado para vizualizar solamente
function modModal() {
    habilitarInput()
    let titulo=document.querySelector('#formTitulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Modificar Curso"));
    // divModDes.classList.remove('ocultarRegistro')
    btnRegistrar.removeEventListener('click',deshabilitarCursoDefinitivo);
    btnRegistrar.removeEventListener('click',guardarCurso);
    btnRegistrar.addEventListener('click',guardarCursoMod);
    btnRegistrar.value="Guardar";
    btnCancelar.value="Cerrar";

    
    
}

/*MODAL */









/********************************************************************************************JS LLENAR TABLA Curso */
function llenarTabla(){
    let tablaCursos = obtenerListaCursos();

    let cuerpoTabla=document.querySelector('#tablaCursos tbody')

    cuerpoTabla.innerHTML='';
    if(obtenerRol()==0){

        for(let i=0;i<tablaCursos.length;i++){

            if(tablaCursos[i][3]){
                let fila=cuerpoTabla.insertRow()
                let columnaConfiguracion=fila.insertCell();
                let columnaCodigo=fila.insertCell();
                let columnaNombre=fila.insertCell();
                let columnaDescrip=fila.insertCell();
                let columnaLista=fila.insertCell();

                let btnEditar=document.createElement('a');
                btnEditar.id=tablaCursos[i][0];
                btnEditar.classList.add('fa');
                btnEditar.classList.add('fa-pencil');
                btnEditar.classList.add('botonEditar');
                
                btnEditar.addEventListener('click',verCurso);
                columnaConfiguracion.appendChild(btnEditar);
                let btnDeshabilitar = document.createElement('a');
                
                btnDeshabilitar.id=tablaCursos[i][0];
                btnDeshabilitar.classList.add('fa');
                btnDeshabilitar.classList.add('fa-trash');
                btnDeshabilitar.classList.add('botonDeshabilitar');
                

                btnDeshabilitar.addEventListener('click',deshabilitarCurso);
                columnaConfiguracion.appendChild(btnDeshabilitar);

                
                
                columnaCodigo.innerHTML=tablaCursos[i][0];
                columnaNombre.innerHTML=tablaCursos[i][1];
                columnaDescrip.innerHTML=tablaCursos[i][2];
                if(true){
                    columnaLista.innerHTML="<a href='#'>Asignar...</a>";
                }
                else{
                    columnaLista.innerHTML=tablaCursos[i][3];
                }
            }
        }
    }
    else{
        for(let i=0;i<tablaCursos.length;i++){

            if(tablaCursos[i][3] && indicarCodColegio()==tablaCursos[i][4]){
                let fila=cuerpoTabla.insertRow()
                let columnaConfiguracion=fila.insertCell();
                let columnaCodigo=fila.insertCell();
                let columnaNombre=fila.insertCell();
                let columnaDescrip=fila.insertCell();
                let columnaLista=fila.insertCell();

                let btnEditar=document.createElement('a');
                btnEditar.id=tablaCursos[i][0];
                btnEditar.classList.add('fa');
                btnEditar.classList.add('fa-pencil');
                btnEditar.classList.add('botonEditar');
                
                btnEditar.addEventListener('click',verCurso);
                columnaConfiguracion.appendChild(btnEditar);
                let btnDeshabilitar = document.createElement('a');
                
                btnDeshabilitar.id=tablaCursos[i][0];
                btnDeshabilitar.classList.add('fa');
                btnDeshabilitar.classList.add('fa-trash');
                btnDeshabilitar.classList.add('botonDeshabilitar');
                

                btnDeshabilitar.addEventListener('click',deshabilitarCurso);
                columnaConfiguracion.appendChild(btnDeshabilitar);

                
                
                columnaCodigo.innerHTML=tablaCursos[i][0];
                columnaNombre.innerHTML=tablaCursos[i][1];
                columnaDescrip.innerHTML=tablaCursos[i][2];
                if(true){
                    columnaLista.innerHTML="<a href='#'>Asignar...</a>";
                }
                else{
                    columnaLista.innerHTML=tablaCursos[i][3];
                }
            }
        }
    }
}

/********************************************************************************************JS LLENAR TABLA Curso */







/********************************************************************************************JS Listar Curso */


/*********************************************************************************************Modoficar Curso */
//funcion que abre el modal y realiza las modificaiocnes
function verCurso() {
    
    modModal();
    abrirModal();
    llenarModal(this.id);
    btnRegistrar.removeEventListener('click',guardarCurso);
    btnRegistrar.addEventListener('click',guardarCursoMod);
    
}
// llena el formulario con los datos del card o intitucion correcta
function llenarModal(pid) {
    let listaCursos=obtenerListaCursos();
    for(let i=0;i<listaCursos.length;i++){
        if(pid==listaCursos[i][0]){
            document.querySelector('#idCurso').value=listaCursos[i][0];
            document.querySelector('#txtNombre').value=listaCursos[i][1];
            document.querySelector('#txtDescripcion').value=listaCursos[i][2];
        }
    }
}

//habilita la modificacion y prepara el modal para estado de modificacion
function modificarCurso() {
    habilitarInput();

    let titulo=document.querySelector('#formTitulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Modifcar Curso"));
    // divModDes.classList.add('ocultarRegistro')
    btnRegistrar.classList.remove('ocultarRegistro');
    btnCancelar.value="Cancelar";

    btnRegistrar.removeEventListener('click',guardarCurso);
    btnRegistrar.addEventListener('click',guardarCursoMod);

    verCurso();


    
}

//guarda en LS la institucion actualizada
function guardarCursoMod() {
        //validar datos
        let datosCurso=juntarDatos();
        datosCurso[0]=document.querySelector('#idCurso').value;
        if(validaDatos()){
            actualizarListaCursoPorCod(datosCurso);
            limpiar();
            llenarTabla();
            cerrarModal();
        }
}
    


/*********************************************************************************************Modoficar Curso */







/*********************************************************************************************deshabilitar Curso */
// prepara el modal para la vista de dehabilitar
function deshabilitarCurso() {  
    abrirModal();
    llenarModal(this.id);
    deshabilitarInput();
    let titulo=document.querySelector('#formTitulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Deshabilitar Curso"));
    btnRegistrar.classList.remove('ocultarRegistro');
    btnRegistrar.value="Deshabilitar";
    btnRegistrar.classList.add('warning');
    btnCancelar.value="Cancelar";

    btnRegistrar.removeEventListener('click',guardarCurso);
    btnRegistrar.addEventListener('click',deshabilitarCursoDefinitivo);
}
// realiza la deshabilitacion de la institucion
function deshabilitarCursoDefinitivo() {
    let datosCurso=juntarDatos();
    datosCurso[0]=document.querySelector('#idCurso').value;
    datosCurso[3]=false;
    actualizarListaCursoPorCod(datosCurso);
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















/*********************************************************************************************deshabilitar Curso */








/*Extra Funciones */

//deshabilita los input del formulario
function deshabilitarInput() {
    document.querySelector('#txtNombre').disabled=true;
    document.querySelector('#txtDescripcion').disabled=true;
    
}   

//habilita los input del formulario
function habilitarInput() {
    document.querySelector('#txtNombre').disabled=false;
    document.querySelector('#txtDescripcion').disabled=false;
    
}  