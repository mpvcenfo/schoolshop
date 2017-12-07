/********************************************************************************************JS Registro institución */
let Nombre = document.querySelector('#txtNombre');
let txtDireccion = document.querySelector('#txtDireccion');
let txtLat = document.querySelector('#txtLat');
let txtLon = document.querySelector('#txtLon');
let txtNombreContacto = document.querySelector('#txtNombreContacto');
let nTelefonoContacto = document.querySelector('#nTelefonoContacto');
let nNiveles = document.querySelector('#nNiveles');
let nSecciones = document.querySelector('#nSecciones');
let txtCorreo = document.querySelector('#txtCorreo');
let fImg = document.querySelector('#fImg');
let btnRegistrar = document.querySelector('#btnRegistrar');
let btnCancelar = document.querySelector('#btnCancelar');
let divModDes = document.querySelector('#btnModDes');

let elementosForm=[];


let preview = document.querySelector('#vista');

let formInstitucion =document.querySelector('#formInstitucion');

fImg.addEventListener('change',guardarImagen);


crearCards();



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
    let numNiveles=nNiveles.value;
    let numSecciones=nSecciones.value;
    let imagen=fImg;
    datos.push(id,sNombre,sDireccion,sLat,sLon,sNombreContacto,sCorreo,numTelefonoContacto,numNiveles,numSecciones,imagen,true);
    elementosForm=[];
    elementosForm.push(Nombre,txtDireccion,txtLat,txtLon,txtNombreContacto,txtCorreo,nTelefonoContacto,nNiveles,nSecciones,txtCorreo);
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
        crearCards();
        limpiar();
        cerrarModal();
    }
}

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
  }


/******************************************************************************************** Fin JS Registro institución */


/*MODAL */

// let btnFormulario=document.querySelector('#btnAbrirModal');
// btnFormulario.addEventListener('click',abrirModal);

btnCancelar.addEventListener('click',cerrarModal);

//abre el modal y queda como inicia el boton de Registrar
function abrirModal() {
    let modal=document.querySelector('#modal');

    modal.classList.remove('ocultarRegistro');
    btnRegistrar.removeEventListener('click',deshabilitarInstitucionDefinitivo);
    btnRegistrar.removeEventListener('click',guardarInstitucionMod);
    btnRegistrar.addEventListener('click',guardarInstitucion);
}

//Cierra el modal y limpia el formulario de todos las clases y deja como inicial
function cerrarModal(){
    let modal=document.querySelector('#modal');
    modal.classList.add('ocultarRegistro');

    let titulo=document.querySelector('#formTitulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Registrar institución"));
    divModDes.classList.add('ocultarRegistro')
    btnRegistrar.value="Registrar";
    btnRegistrar.classList.remove('ocultarRegistro');
    btnCancelar.value="Cancelar";
    btnRegistrar.classList.remove('warning');
    habilitarInput();
    limpiar();
    quitarWarning();
}

// abre el modal modificado para vizualizar solamente
function verModal() {
    let titulo=document.querySelector('#formTitulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Institución"));
    divModDes.classList.remove('ocultarRegistro')
    btnRegistrar.value="Guardar";
    btnRegistrar.classList.add('ocultarRegistro');
    btnCancelar.value="Cerrar";
    deshabilitarInput();

    
    
}

/*MODAL */









/********************************************************************************************JS Listar institución */
//crea las cards para listar las instituciones
function crearCards() {
    let micole=indicarCodColegio();

    // aqui traigo la seccion del HTML donde se insertan cada CARD... este es el que ya existe en el HTML es el "contenedor"... en este caso es
    //<section id="cardsInstitucion"> </section>

    let divPrincipal=document.querySelector("#cardsInstitucion");
    
    // aqui es IMPORTANTE.... equi BORRAMOS los cards para que no se dupliquen... como? literal tomando el elemento DIV que guarda todo y borrando TODO su contenido
    divPrincipal.innerHTML="";

    //aqui estoy trayendo la tabla o localStorage o matriz y la guardo en una variable para usar en la funcion
    let tablaInstitucion=obtenerListaInstituciones();

  
    //creamos un FOR, esto va a recorer cada fila,registro o linea, de la matriz, y por cada iteracion crea un card con los datos de esa linea.
    for(let i=0;i<tablaInstitucion.length;i++){
        if(tablaInstitucion[i][11] && micole==tablaInstitucion[i][0]){
            //creamos el elemento DIV... es decir aqui estamos creando in "<div> </div>"
            let nuevoDiv=document.createElement("div");
            nuevoDiv.id='inst'+i;

            //Importante, al Div creado le colocamos la Clase para el estilo correcto.
            nuevoDiv.classList.add("cardsHome");

            // creamos el header, es decir un <h3> </h3> 
            let nuevoHeader=document.createElement("h3");

            //aqui creamos un Texto simple, aqui iria un valor, el que uds crean indicado para un header, ya sea nombre o Cedula o lo que gusten
            let header=document.createTextNode(tablaInstitucion[i][1]);

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
            foto.src=tablaInstitucion[i][10];

            //aqui agregamos la foto al div anterior para definir su contenedor.
            divImagen.appendChild(foto);

            // aqui estamos creando un elemento SPAN , es decir <span></span>... aqui guardaremos los valores importante a mostrar, ya sea Nombrem Apellido,Telfono, precio... el que uds gusten
            let contenedorValor1=document.createElement("span");
            let contenedorValor2=document.createElement("span");
            let contenedorValor3=document.createElement("span");
            let contenedorValor4=document.createElement("span");



            //Aqui buscamos y guardamos el valor desede la variabe que guaradamos la informacion, es decir la matriz, para luego agregarlo al span anterior
            let valor1=document.createTextNode('Direccion: '+tablaInstitucion[i][2]);
            let valor2=document.createTextNode('Telefono: '+tablaInstitucion[i][7]);
            let valor3=document.createTextNode('Correo: '+tablaInstitucion[i][6]);
            let valor4=document.createTextNode('Contacto: '+tablaInstitucion[i][5]);


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

            document.querySelector('#inst'+i).addEventListener('click',verInstitucion);
        }
    }

    
}



/********************************************************************************************JS Listar institución */


/*********************************************************************************************Modoficar institución */
//funcion que abre el modal y realiza las modificaiocnes
function verInstitucion() {
    document.querySelector('#btnEdit').addEventListener('click',modificarInstitucion);
    // document.querySelector('#btnDelete').addEventListener('click',deshabilitarInstitucion);
    llenarModal(this.id);
    verModal();
    abrirModal();
    
}
// llena el formulario con los datos del card o intitucion correcta
function llenarModal(pid) {
    let listaInstituciones=obtenerListaInstituciones();
    for(let i=0;i<listaInstituciones.length;i++){
        if(pid==listaInstituciones[i][0]){
            document.querySelector('#idInst').value=listaInstituciones[i][0];
            document.querySelector('#txtNombre').value=listaInstituciones[i][1];
            document.querySelector('#txtDireccion').value=listaInstituciones[i][2];
            document.querySelector('#txtLat').value=listaInstituciones[i][3];
            document.querySelector('#txtLon').value=listaInstituciones[i][4];
            document.querySelector('#txtNombreContacto').value=listaInstituciones[i][5];
            document.querySelector('#nTelefonoContacto').value=listaInstituciones[i][7];
            document.querySelector('#nNiveles').value=listaInstituciones[i][8];
            document.querySelector('#nSecciones').value=listaInstituciones[i][9];
            document.querySelector('#txtCorreo').value=listaInstituciones[i][6];
            document.querySelector('#vista').src=listaInstituciones[i][10];
        }
    }
}

//habilita la modificacion y prepara el modal para estado de modificacion
function modificarInstitucion() {
    habilitarInput();

    let titulo=document.querySelector('#formTitulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Modifcar institución"));
    divModDes.classList.add('ocultarRegistro')
    btnRegistrar.classList.remove('ocultarRegistro');
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
            crearCards();
            limpiar();
            cerrarModal();
        }
}



/*********************************************************************************************Modoficar institución */







/*********************************************************************************************deshabilitar institución */
// prepara el modal para la vista de dehabilitar
function deshabilitarInstitucion() {
    let titulo=document.querySelector('#formTitulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Deshabilitar institución"));
    divModDes.classList.add('ocultarRegistro');
    btnRegistrar.classList.remove('ocultarRegistro');
    btnRegistrar.value="Deshabilitar";
    btnRegistrar.classList.add('warning');
    btnCancelar.value="Cancelar";

    btnRegistrar.removeEventListener('click',guardarInstitucion);
    btnRegistrar.addEventListener('click',deshabilitarInstitucionDefinitivo);
}
// realiza la deshabilitacion de la institucion
function deshabilitarInstitucionDefinitivo() {
    let datosInstitucion=juntarDatos();
    datosInstitucion[0]=document.querySelector('#idInst').value;
    datosInstitucion[10]=document.querySelector('#vista').src;
    datosInstitucion[11]=false;
    actualizarListaInstitucionesPorCod(datosInstitucion);
    crearCards();
    limpiar();
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
    document.querySelector('#nNiveles').disabled=true;
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
    document.querySelector('#nNiveles').disabled=false;
    document.querySelector('#nSecciones').disabled=false;
    document.querySelector('#txtCorreo').disabled=false;
    document.querySelector('#fImg').disabled=false;
}  

