let seProvedor=document.querySelector('#seprovedor');
let txtCodigo=document.querySelector('#nCodigo');
let txtNombre=document.querySelector('#txtnombre');
let tDescripcion=document.querySelector('#txtdescripcion');
let nCosto=document.querySelector('#nCosto');
let nVenta=document.querySelector('#nVenta');
let nMercado=document.querySelector('#nMercado');
let disponible=document.querySelector('#nDisponible');
let cita=document.querySelector('#cita');
let foto=document.querySelector('#foto');

let uploadButton = $('#btnSeleccionarImagen');
let btnRegistrar = document.querySelector('#btnRegistrar');
let btnCancelar = document.querySelector('#btnCancelar');

let datos=[];
datos.push(txtCodigo,txtNombre,tDescripcion,seProvedor,cita,nCosto,nVenta,nMercado,disponible,foto);



nVenta.addEventListener('change',validarPrecio);
nMercado.addEventListener('change',xvalidarPrecio);
btnRegistrar.addEventListener('click',guardarArticulo);
btnCancelar.addEventListener('click',limpiar);
document.querySelector('#OK').addEventListener('click',cerrarModal);
agregarProvedor();



function validarDatos() {
    let llenos=true;
    for (let i = 0; i < datos.length; i++) {
        if(datos[i].value==''){
            llenos=false;
            datos[i].classList.add('warning');
        }
        else{
            datos[i].classList.remove('warning');
        }
        
    }

    if(foto.value==undefined){
        document.querySelector('#fotoContainer').classList.add("warning");
        completo=false;
    }
    else{
        document.querySelector('#fotoContainer').classList.remove("warning");
    }
    return llenos;
}


function guardarArticulo() {
    let nArticulo=[];
    if(validarDatos()){
        nArticulo.push(datos[0].value,datos[1].value,datos[2].value,datos[3].value,indicarCodColegio(),validarCita(),datos[5].value,datos[6].value,datos[7].value,datos[8].value,datos[9].value);
        // nArticulo.push(datos[0],datos[1],datos[2],datos[3],indicarCodColegio(),datos[4],datos[5],datos[6],datos[7],datos[8],datos[9]);
        console.log('hola');
        registrarArticulo(nArticulo);
        limpiar();
        abrirModal();
    }    
}
function validarCita() {
    let x=0;
    if(datos[4].checked){
        x=1;
    }
    return x;
}

function validarPrecio() {
    let precioVenta=Number(nVenta.value);
    let precioMercado=Number(nMercado.value);
    let spanP=document.querySelector('#msjPrecio');
    if(precioVenta>precioMercado){
        spanP.classList.remove('ocultar');
    }
    else{
        spanP.classList.add('ocultar');
    }
}

/*provedor */
function agregarProvedor(){
    let proveedor=[];
    let seprovedor =document.querySelector('#seprovedor');
    seprovedor.innerHTML="";
    proveedor=obtenerProveedor();
    
    for(let i=0;i<proveedor.length;i++){
        let option=document.createElement('option');
        option.innerText=proveedor[i]['nombre'];
        option.value=proveedor[i]['codigo'];
        seprovedor.add(option);
    }
       
}


function abrirModal() {
    let modal=document.querySelector('#msj');
    modal.classList.remove('ocultar');
    
}

//Cierra el modal y limpia el formulario de todos las clases y deja como inicial
function cerrarModal(){
    let modal=document.querySelector('#msj');
    modal.classList.add('ocultar');

}

function limpiar(){
    let formInstitucion =document.querySelector('#formularioagregar');
    formInstitucion.reset();
    foto.src="";
    foto.value=undefined;
    for (let i = 0; i < datos.length; i++) {
        datos[i].classList.remove('warning');
    }
    document.querySelector('#fotoContainer').classList.remove("warning");
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
                                    foto.value = processImage(id);
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

