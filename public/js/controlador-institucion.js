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




let uploadButton = $('#btnSeleccionarImagen');

// window.addEventListener('onbeforeunload',borrarTemp);

txtLon.addEventListener('change',myMap);
txtLat.addEventListener('change',myMap);

nNivelesDesde.addEventListener('change',llenarNivelHasta);


let elementosForm=[];

let preview = document.querySelector('#vista');

let formInstitucion =document.querySelector('#formInstitucion');

//fImg.addEventListener('change',guardarImagen);
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
    let imagen=imagenUrl;
    datos.push(id,sNombre,sDireccion,sLat,sLon,sNombreContacto,sCorreo,numTelefonoContacto,numNivelesDesde,numNivelesHasta,numSecciones,imagen);
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
    if(imagenUrl==""){
        document.querySelector('#fotoContainer').classList.add("warning");
        completo=false;
    }
    else{
        document.querySelector('#fotoContainer').classList.remove("warning");
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
    foto.src="";
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





function filtrar() {
    let filtro=document.querySelector('#filtro').value;
    crearCards(filtro); 
}



/********************************************************************************************JS Listar institución */
//crea las cards para listar las instituciones
function crearCards(psFiltro) {

    // aqui traigo la seccion del HTML donde se insertan cada CARD... este es el que ya existe en el HTML es el "contenedor"... en este caso es
    //<section id="cardsInstitucion"> </section>

    let divPrincipal=document.querySelector("#cardsInstitucion");
    
    // aqui es IMPORTANTE.... equi BORRAMOS los cards para que no se dupliquen... como? literal tomando el elemento DIV que guarda todo y borrando TODO su contenido
    divPrincipal.innerHTML="";

    //aqui estoy trayendo la tabla o localStorage o matriz y la guardo en una variable para usar en la funcion
    let tablaInstitucion=[];
        tablaInstitucion=obtenerListaInstituciones();


  
    //creamos un FOR, esto va a recorer cada fila,registro o linea, de la matriz, y por cada iteracion crea un card con los datos de esa linea.
    for(let i=0;i<tablaInstitucion.length;i++){
        if(tablaInstitucion[i]['estado']==1){
            //creamos el elemento DIV... es decir aqui estamos creando in "<div> </div>"
            let nuevoDiv=document.createElement("div");
            nuevoDiv.id=tablaInstitucion[i]['id_institucion']

            //Importante, al Div creado le colocamos la Clase para el estilo correcto.
            nuevoDiv.classList.add("cardsHome");

            // creamos el header, es decir un <h3> </h3> 
            let nuevoHeader=document.createElement("h3");

            //aqui creamos un Texto simple, aqui iria un valor, el que uds crean indicado para un header, ya sea nombre o Cedula o lo que gusten
            let header=document.createTextNode(tablaInstitucion[i]['nombre']);

            //aqui ingresamos el Texto simple que seria el valor deseado dentro del Header... quedaria asi... "<h3>TEXTOSIMPLE</h3>"
            nuevoHeader.appendChild(header);

            // aqui creamos otro elemento DIV, este para guardar la imagen deseada.
            let divImagen=document.createElement("div");

            //IMPORTANTE, le asignamos la clase correcta de estilo
            divImagen.classList.add("imagenCard");

            //Creamos un elemento IMAGEN o img , es decir un <img src="">    esto para guardar la imagen de la matriz , en el caso que tengan.
            let foto=document.createElement("img");

            //aqui le estamos asigando de la matriz la imagen, en este caso esta en la posicion 11 por eso coloco el 11, depende de la posicion donde la guarde cada uno.
            // esto quedria <img src="direccion.de.donde.esta.la.imagen.">
            foto.src=tablaInstitucion[i]['imagen'];

            //aqui agregamos la foto al div anterior para definir su contenedor.
            divImagen.appendChild(foto);

            // aqui estamos creando un elemento SPAN , es decir <span></span>... aqui guardaremos los valores importante a mostrar, ya sea Nombrem Apellido,Telfono, precio... el que uds gusten
            let contenedorValor1=document.createElement("span");
            let contenedorValor2=document.createElement("span");
            let contenedorValor3=document.createElement("span");
            let contenedorValor4=document.createElement("span");



            //Aqui buscamos y guardamos el valor desede la variabe que guaradamos la informacion, es decir la matriz, para luego agregarlo al span anterior
            let valor1=document.createTextNode('Direccion: '+tablaInstitucion[i]['direccion']);
            let valor2=document.createTextNode('Telefono: '+tablaInstitucion[i]['telefono']);
            let valor3=document.createTextNode('Correo: '+tablaInstitucion[i]['correo']);
            let valor4=document.createTextNode('Contacto: '+tablaInstitucion[i]['contacto']);


            // aqui Agreagamos el valor deseado en su contenedor.
            //IMPORTANTE, estos que dicen ContenedorValor1 y valor1, pueden ser varios, depende de cuantos Span con datos desean desplegar en el HTML
            contenedorValor1.appendChild(valor1);
            contenedorValor2.appendChild(valor2);
            contenedorValor3.appendChild(valor3);
            contenedorValor4.appendChild(valor4);

            //aqui agregamos el elemento h3 en el Div del CARD, este seria el card como tal  
            nuevoDiv.appendChild(nuevoHeader);

            // aqui agregamos el div que contiene la imagen al div del CARD
            nuevoDiv.appendChild(divImagen);

            // aqui agregamos los valores al div del CARD
            nuevoDiv.appendChild(contenedorValor4);
            nuevoDiv.appendChild(contenedorValor1);
            nuevoDiv.appendChild(contenedorValor2);
            nuevoDiv.appendChild(contenedorValor3);

            // Por ultimo aqui agregamos el card ya terminado como tal en el Seccion que existe ya en HTML, el contenedor de todos los cards.
            divPrincipal.appendChild(nuevoDiv);

            document.querySelector('#'+tablaInstitucion[i]['id_institucion']).addEventListener('click',verInstitucion);
        }
    }

    
}



/********************************************************************************************JS Listar institución */


/*********************************************************************************************Modoficar institución */
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
    document.querySelector('#foto').src=listaInstituciones[10];
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
    else{
        crearCards();
        filter.addEventListener('keyup',filtrar);
        let btnFormulario=document.querySelector('#btnAbrirModal');
        btnFormulario.addEventListener('click',abrirModal);
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
    modificarInstitucion();
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


$.cloudinary.config({ cloud_name: 'acmeinnovate', api_key: '867273236384566'});
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
                                    imagenUrl = processImage(id);
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
