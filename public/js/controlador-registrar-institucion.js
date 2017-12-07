/********************************************************************************************JS Registro institución */
let Nombre = document.querySelector('#txtNombre');
let txtDireccion = document.querySelector('#txtDireccion');
let txtLat = document.querySelector('#txtLat');
let txtLon = document.querySelector('#txtLon');
let txtNombreContacto = document.querySelector('#txtNombreContacto');
let nTelefonoContacto = document.querySelector('#nTelefonoContacto');
let nNivelesDesde = document.querySelector('#nNivelesDesde');
let nNivelesHasta = document.querySelector('#nNivelesHasta');
let nSecciones = document.querySelector('#nSecciones');
let txtCorreo = document.querySelector('#txtCorreo');
let fImg = document.querySelector('#fImg');
let btnRegistrar = document.querySelector('#btnRegistrar');
let btnCancelar = document.querySelector('#btnCancelar');
let divModDes = document.querySelector('#btnModDes');
let filter = document.querySelector('#filtro');
let imagenUrl = '';
let foto=document.querySelector('#foto');


$.cloudinary.config({ cloud_name: 'acmeinnovate', api_key: '867273236384566'});

let uploadButton = $('#btnSeleccionarImagen');

// window.addEventListener('onbeforeunload',borrarTemp);

txtLon.addEventListener('change',myMap);
txtLat.addEventListener('change',myMap);

nNivelesDesde.addEventListener('change',llenarNivelHasta);


let elementosForm=[];

let preview = document.querySelector('#vista');

let formInstitucion =document.querySelector('#formInstitucion');

validarAccion();

//junta los datos de input en un array y los devuelve como variable
function juntarDatos(){
    let datos=[];
    let id="inst"+obtenerListaInstituciones().length;
    let sNombre=txtNombre.value;
    let sDireccion=txtDireccion.value;
    let sLat=txtLat.value;
    let sLon=txtLon.value;
    let sNombreContacto=txtNombreContacto.value;
    let sCorreo=txtCorreo.value;
    let numTelefonoContacto=nTelefonoContacto.value;
    let numNivelesDesde=nNivelesDesde.value;
    let numNivelesHasta=nNivelesHasta.value;
    let numSecciones=nSecciones.value;
    let imagen=fImg;
    datos.push(id,sNombre,sDireccion,sLat,sLon,sNombreContacto,sCorreo,numTelefonoContacto,numNivelesDesde,numSecciones,imagen,true,numNivelesHasta);
    elementosForm=[];
    elementosForm.push(Nombre,txtDireccion,txtLat,txtLon,txtNombreContacto,txtCorreo,nTelefonoContacto,nNivelesHasta,nNivelesDesde,nSecciones,txtCorreo);
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
    if(preview.src=="file:///D:/U/ProyectoIngenieria-1/Acme/SchoolShop/crearInstitucion.html"){
        document.querySelector('#fImg').classList.add("warning");
        completo=false;
    }
    else{
        document.querySelector('#fImg').classList.remove("warning");
    }

    return completo;
}


//Guarda los datos ingresados al localS, limpia los campos al final
function guardarInstitucion(){
    //validar datos
    let datosInstitucion=juntarDatos();
    if(validaDatos()){
        registrarInstitucion(datosInstitucion);
        limpiar();
        borrarTemp();
        abrirModal();
    }
}

//

/*Muestra la imagen en el registro  y la guarda en la variable*/
function guardarImagen() {
    let imagen = document.querySelector("#fImg").files[0];
    if(document.querySelector("#fImg").files[0].size<613096){
        let reader = new FileReader();
        reader.addEventListener("load", function () 
            {
                preview.src=reader.result;
                fImg="";
                fImg=reader.result;
                // preview.value=preview.src;
            }
        );
        if(imagen){
            reader.readAsDataURL(imagen);    
        }
    // fImg=document.querySelector('#fImg');
    }
}





//limpia todos los datos del formulario
function limpiar(){
    formInstitucion.reset();
    preview.src="";
    document.querySelector('#nNivelesDesde').selectedIndex=0;
    document.querySelector('#nNivelesHasta').innerHTML="";
    document.querySelector("#map").innerHTML="";

  }


/******************************************************************************************** Fin JS Registro institución */


/*MODAL */



//abre el modal y queda como inicia el boton de Registrar
function abrirModal() {
    let modal=document.querySelector('#msj');
    modal.classList.remove('ocultar');
    
}

//Cierra el modal y limpia el formulario de todos las clases y deja como inicial
function cerrarModal(){
    let modal=document.querySelector('#msj');
    modal.classList.add('ocultar');

}

// abre el modal modificado para vizualizar solamente
function verModal() {
    let titulo=document.querySelector('#formTitulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Institución"));
    divModDes.classList.remove('ocultar');
    btnRegistrar.value="Guardar";
    btnRegistrar.classList.add('ocultar');
    btnCancelar.value="Cerrar";
    deshabilitarInput();

    
    
}

/*MODAL */







//funcion que abre el modal y realiza las modificaiocnes
function verInstitucion() {
    guardarTemporal(this.id);
    window.location.href = "registrar-Institucion.html"    
}
// llena el formulario con los datos del card o intitucion correcta
function llenarModal() {
    llenarNivelHasta();
    let listaInstituciones=obtenerTemp();
    document.querySelector('#idInst').value=listaInstituciones[0];
    document.querySelector('#txtNombre').value=listaInstituciones[1];
    document.querySelector('#txtDireccion').value=listaInstituciones[2];
    document.querySelector('#txtLat').value=listaInstituciones[3];
    document.querySelector('#txtLon').value=listaInstituciones[4];
    document.querySelector('#txtNombreContacto').value=listaInstituciones[5];
    document.querySelector('#nTelefonoContacto').value=listaInstituciones[7];
    document.querySelector('#nNivelesDesde').value=listaInstituciones[8];
    document.querySelector('#nNivelesHasta').value=listaInstituciones[12];
    document.querySelector('#nSecciones').value=listaInstituciones[9];
    document.querySelector('#txtCorreo').value=listaInstituciones[6];
    document.querySelector('#vista').src=listaInstituciones[10];
}

//habilita la modificacion y prepara el modal para estado de modificacion
function modificarInstitucion() {
    habilitarInput();

    let titulo=document.querySelector('#formTitulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Modifcar institución"));
    divModDes.classList.add('ocultar')
    btnRegistrar.classList.remove('ocultar');
    btnCancelar.value="Cancelar";

    btnRegistrar.removeEventListener('click',guardarInstitucion);
    btnRegistrar.addEventListener('click',guardarInstitucionMod);


    
}

//guarda en LS la institucion actualizada
function guardarInstitucionMod() {
        //validar datos
        let datosInstitucion=juntarDatos();
        datosInstitucion[0]=document.querySelector('#idInst').value;
        datosInstitucion[10]=document.querySelector('#vista').src;
        if(validaDatos()){
            actualizarListaInstitucionesPorCod(datosInstitucion);
            limpiar();
            abrirModal();
        }
}



/*********************************************************************************************Modoficar institución */







/*********************************************************************************************deshabilitar institución */
// prepara el modal para la vista de dehabilitar
function confirmar() {
    document.querySelector("#confirmar").classList.remove('ocultar');
    document.querySelector("#btnSi").addEventListener('click',deshabilitarInstitucionDefinitivo)
    document.querySelector("#btnNo").addEventListener('click',cerrarConfirmar)
}

function cerrarConfirmar() {
    document.querySelector("#confirmar").classList.add('ocultar');
}
// realiza la deshabilitacion de la institucion
function deshabilitarInstitucionDefinitivo() {

    let datosInstitucion=juntarDatos();
    datosInstitucion[0]=document.querySelector('#idInst').value;
    datosInstitucion[10]=document.querySelector('#vista').src;
    datosInstitucion[11]=false;
    actualizarListaInstitucionesPorCod(datosInstitucion);
    cerrarModal();
 
}

//elimina las clases de warning de todo el formulario
function quitarWarning() {
    for(let i=0;i<elementosForm.length;i++){

        elementosForm[i].classList.remove("warning");
    }
    document.querySelector('#fImg').classList.remove("warning");

}















/*********************************************************************************************deshabilitar institución */








/*Extra Funciones */

//deshabilita los input del formulario
function deshabilitarInput() {
    document.querySelector('#txtNombre').disabled=true;
    document.querySelector('#txtDireccion').disabled=true;
    document.querySelector('#txtLat').disabled=true;
    document.querySelector('#txtLon').disabled=true;
    document.querySelector('#txtNombreContacto').disabled=true;
    document.querySelector('#nTelefonoContacto').disabled=true;
    document.querySelector('#nNivelesDesde').disabled=true;
    document.querySelector('#nNivelesHasta').disabled=true;
    document.querySelector('#nSecciones').disabled=true;
    document.querySelector('#txtCorreo').disabled=true;
    document.querySelector('#fImg').disabled=true;
}   

//habilita los input del formulario
function habilitarInput() {
    document.querySelector('#txtNombre').disabled=false;
    document.querySelector('#txtDireccion').disabled=false;
    document.querySelector('#txtLat').disabled=false;
    document.querySelector('#txtLon').disabled=false;
    document.querySelector('#txtNombreContacto').disabled=false;
    document.querySelector('#nTelefonoContacto').disabled=false;
    document.querySelector('#nNivelesDesde').disabled=false;
    document.querySelector('#nNivelesHasta').disabled=false;
    document.querySelector('#nSecciones').disabled=false;
    document.querySelector('#txtCorreo').disabled=false;
    document.querySelector('#fImg').disabled=false;
}  


function llenarNivelHasta() {
    let selectHasta=document.querySelector('#nNivelesHasta');
    let selectDesde=document.querySelector('#nNivelesDesde');
    
    let selected=selectDesde[selectDesde.selectedIndex].value;
    selectHasta.innerHTML="";
    for(let i=selected;i<selectDesde.length;i++){
        // let o=document.querySelector('#nNivelesDesde option[value='+'"'+i+'"'+']');
        let option = document.createElement("option");
        option.text = document.querySelector('#nNivelesDesde option[value='+'"'+i+'"'+']').text;
        option.value=i;
        selectHasta.add(option);

    }




    
}

function myMap() {
    let lat=Number(document.querySelector('#txtLat').value);
    let long=Number(document.querySelector('#txtLon').value);
    
    if(!lat=="" && !long==""){
        let center= new google.maps.LatLng(lat,long);
        let detalleMapa = {
            center,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.HYBRID
        }
        let map = new google.maps.Map(document.querySelector("#map"), detalleMapa);

        let marker = new google.maps.Marker({position: center});
        
        marker.setMap(map);
    }
    
}





function validarAccion() {
    if((window.location.href).includes('registrar')){
        let temp=obtenerTemp();

        if(temp==""||temp==undefined){
            accionRegistrar();
        }
        else{
            llenarModal();
            accionModificar();
            window.onbeforeunload= borrarTemp;
        }
    }
}


function accionModificar() {
    btnRegistrar.addEventListener('click',guardarInstitucionMod);
    btnRegistrar.value="Guardar";
    let msj=document.querySelector('#msj span');
    msj.innerHTML="Se ha modificado la Institución";
    btnCancelar.addEventListener('click',goBack);
    myMap();
    document.querySelector('#OK').addEventListener('click',goBack);
    divModDes.classList.remove('ocultar');
    divModDes.addEventListener('click',accionEliminar);
}

function accionRegistrar(){
    btnRegistrar.addEventListener('click',guardarInstitucion);
    btnCancelar.addEventListener('click',limpiar);
    document.querySelector('#OK').addEventListener('click',cerrarModal);
}

function accionEliminar() {
    let cuadromsj=document.querySelector('#msj .confirmacion');
    let msj=document.querySelector('#msj span');
    msj.innerHTML="Seguro que desea deshabilitar?";
    document.querySelector('#OK').addEventListener('click',deshabilitarInstitucionDefinitivo);
    document.querySelector('#OK').classList.add('warning');
    if(document.querySelector('#NO')==null ||document.querySelector('#NO')==undefined){
        let btnNO=document.createElement('input');
        btnNO.type='button';
        btnNO.id='NO';
        btnNO.classList.add('NO');
        btnNO.value='Cancelar';
        btnNO.addEventListener('click',cerrarModal);
        cuadromsj.appendChild(btnNO);    
    }
    abrirModal();

}



/**imagen */




uploadButton.on('click', function(e){
                            cloudinary.openUploadWidget({ 
                                cloud_name: 'acmeinnovate', upload_preset: 'proyecto1', tags: ['cgal']
                            },
                            function(error, result) {
                                if(error) {
                                    console.log(error);
                                }
                               else{
                                    let id = result[0].public_id;
                                    console.log(id);
                                    foto.src = processImage(id);
                                    console.log(foto.src);
                               }
                            });
                        }
                );

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}
