llenarModal();

/*controlador para articulos*/
/*las siguites varables son para hacer el modal*/
let mAgregar=document.querySelector('#modal');
let btnAgregar=document.querySelector('#btnAgregar');
let btncerrar =document.querySelector('#btnCerrar');
let btnanadir=document.querySelector('#btnanadir');
let btnbasurero=document.querySelector('#btnbasurero');
let btnAceptar=document.querySelector('#btnAceptar');
let btnCerrar=document.querySelector('#btnCerrar')
let btnok=document.querySelector('#ok');


 let divmodificar = document.querySelector('#btnModDes');
/* modal*/
/*las siguites varables son para validar que primero se llene el campo de proveedor*/

let seProvedor=document.querySelector('#seprovedor');
let inputImage=document.querySelector('#btnSeleccionarImagen');
let tDescripcion=document.querySelector('#txtdescripcion');
let nCosto=document.querySelector('#nCosto');
let nVenta=document.querySelector('#nVenta');
let nMercado=document.querySelector('#nMercado');
let disponible=document.querySelector('#nDisponible');
let cita=document.querySelector('#cita');
document.querySelector('#modalwarning').classList.add('ocultar');
document.querySelector('#modal').classList.add('ocultar');
btnanadir.addEventListener('click',guardarArticuloActualizado);
btnbasurero.addEventListener('click',deshabilitar);
btnAceptar.addEventListener('click',cerrarModal);
btnCerrar.addEventListener('click',irPagina)
document.querySelector('#feedback').classList.add('ocultar');
btnok.addEventListener('click',irPagina);


function irPagina(){
  window.location.href = "agregar-articulo.html"    
  
}

let formularioagregar=document.querySelector('#formularioagregar');
let divarticulos=document.querySelector('#divarticulos');
let inputNombre=document.querySelector('#txtnombre');
let inputCodigo=document.querySelector('#nCodigo');
/* campo de proveedor*/
inputImage.addEventListener('change', guardarimage);
inputCodigo.disabled=true;

      let preview=document.querySelector('#mostrar');
 /* varables para los div*/

 
seProvedor.addEventListener('change',habilitar);

/*Las siguientes funciones son para abrir y cerrar el modal*/

//function format()
//{
//var num = nVenta.value.replace(/\./g,'');
//if(!isNaN(num)){
//num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
//num = num.split('').reverse().join('').replace(/^[\.]/,'');
//nVenta.value = num;
//}
  
//else{ alert('Solo se permiten numeros');
//nVenta.value = nVenta.value.replace(/[^\d\.]*/g,'');
//}
//}
/*function abrir(){
habilitar();
mAgregar.style.display = "block";

document.querySelector('#btnanadir').removeEventListener('click',guardarArticuloActualizado);
 document.querySelector('#btnanadir').removeEventListener('click',confirmacion);
 document.querySelector('#btnanadir').addEventListener('click',agregarArticulo); 
 
    btnanadir.classList.remove('error');
 provedor=document.querySelector('#seprovedor');
 
  descripcion=document.querySelector('#txtdescripcion');
costo=document.querySelector('#nCosto');
 venta=document.querySelector('#nVenta');
  mercado=document.querySelector('#nMercado');
 nombre=document.querySelector('#txtnombre')
      codigo=document.querySelector('#nCodigo');
 let formulario=[provedor,descripcion,venta,costo,mercado,nombre,codigo];
     let i;
   for ( i= 0; i <formulario.length; i++) {
      if (formulario[i].value==""){
           
  formulario[i].classList.remove('error');
        

    }
}
 if(preview.src=="file:///C:/Users/unicomer/Desktop/Proyecto%20Software/Casos%20de%20uso%20C%C3%B3digo/Agregar%20Articulo/agregarArt%C3%ADculo.html"){
           document.querySelector('#inputImage').classList.remove('error')
     }

}*/

function cerrarModal(){
  document.querySelector('#modal').classList.add('ocultar');
  document.querySelector('#modalwarning').classList.add('ocultar');
  document.querySelector('#feedback').classList.add('ocultar');
}

function verModal() {
    let titulo=document.querySelector('#Titulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Articulo"));
    divmodificar.classList.remove('ocultarAgregar');
    btnanadir.value="Guardar";
    btnanadir.classList.add('ocultarAgregar');
    btncerrar.value="Cerrar";
    deshabilitarInput();}


function habilitar(){
	if (seprovedor.value==""){
       inputImage.disabled =true;
       tDescripcion.disabled=true;
       nCosto.disabled=true;
       nVenta.disabled=true;
       nMercado.disabled=true;
       inputCodigo.disabled=true;
       inputNombre.disabled=true;
	}else{
		
        inputImage.disabled=false;
       tDescripcion.disabled=false;
       nCosto.disabled=false;
       nVenta.disabled=false;
       nMercado.disabled=false;
       inputCodigo.disabled=false;
       inputNombre.disabled=false;
     
	}


}


 function deshabilitarInput(){
        seprovedor.disabled=true;
       inputImage.disabled =true;
       tDescripcion.disabled=true;
       nCosto.disabled=true;
       nVenta.disabled=true;
       nMercado.disabled=true;
       inputCodigo.disabled=true;
       inputNombre.disabled=true;
 }

 function habilitarInput(){
  seprovedor.disabled=false;
    inputImage.disabled=false;
       tDescripcion.disabled=false;
       nCosto.disabled=false;
       nVenta.disabled=false;
       nMercado.disabled=false;

       inputNombre.disabled=false;
 }
/*validos los campos en blanco*/
function validarcampo(){


 provedor=document.querySelector('#seprovedor');
 
  descripcion=document.querySelector('#txtdescripcion');
costo=document.querySelector('#nCosto');
 venta=document.querySelector('#nVenta');
  mercado=document.querySelector('#nMercado');
 nombre=document.querySelector('#txtnombre')
      codigo=document.querySelector('#nCodigo');
  let disponible=document.querySelector('#nDisponible');
      
 let formulario=[provedor,descripcion,venta,costo,mercado,nombre,codigo,disponible];
 let preview=document.querySelector('img');
 let vacio;
 let comprobar=false;
 let lleno=true;
 for ( vacio= 0; vacio <formulario.length; vacio++) {
      if (formulario[vacio].value==""){
           
       formulario[vacio].classList.add('error'); 
             lleno=false;
             document.querySelector('#modal').classList.remove('ocultar');
             
  }else{
   formulario[vacio].classList.remove('error');
   formulario.length==lleno;
     
      }

    }
  /*if(preview.src=="file:///C:/Users/unicomer/Desktop/Proyecto%20Software/Casos%20de%20uso%20C%C3%B3digo/Agregar%20Articulo/agregarArt%C3%ADculo.html"){
           document.querySelector('#inputImage').classList.add('error');
            lleno=false;
      }else{
              document.querySelector('#inputImage').classList.remove('error');
                  

     }*/
    

      return lleno;
}  

function limpiar(){
    formularioagregar.reset('cardsArticulos');
     preview.src="";
} 

 // funcion para convier el estado  a una variable numerica para que la base de datos me acepte el valor 

 function verEstado(){
    let datos=obtenerListaArticulos();
    let estado;
    for(let i=0;i<datos.length;i++){
         estado=datos[i][12];
    }
    return estado;
 }

 // funcion para convier el checbox a una variable numerica para que la base de datos me acepte el valor 
 function convertidor(){
  if(cita.checked==false){
    cita=0; 
  }else{
    cita=1;
  }
  return cita;
 }
 //.toLocalString()
/*Aqui guardo la lista que esta  en localStorage*/
function obtenerDatosArticulos(){   
      let articulos=[];
      let pestado=verEstado();
      let datos=obtenerListaArticulos();
      let articulosdisponibles =disponible.value
      let checkboxcita=convertidor();
      let inst;
      let  selectproveedor = seprovedor.options[seprovedor.selectedIndex].value;
      let  imagen=enviarURL();
      let codigo;
      let  sDescripcion=tDescripcion.value;
      let  numberCosto=nCosto.value;
      let numberVenta=nVenta.value;
      let numberCodigo=inputCodigo.value;
      let numberMercado=nMercado.value;
      let  sNombreArticulo=inputNombre.value;

      //descompogo el array para mandar el valor del codigo en la pocision 0
      for(let i=0;i<datos.length;i++){
        codigo=datos[i][0];
        inst=datos[i][5];
     
      }
  

     
        
    // ['codigo','id_articulo','nombre','descripcion','proveedor' ,
    //'institucion','requiereCita','costo','costoVenta','costoMercado','imagen','disponible',true]

   
      articulos.push(codigo,numberCodigo,sNombreArticulo,sDescripcion,selectproveedor,inst,checkboxcita,
        numberCosto,numberVenta,numberMercado,imagen,articulosdisponibles,pestado);

      return articulos;
 
}
//envio la lista actualizada a logica para hacer setItem
function guardarArticuloActualizado(){
  
    let articulos=obtenerDatosArticulos();
       // articulos[0]=document.querySelector('#nCodigo').value;
       // articulos[1]=document.querySelector('#mostrar').src;
    if(validarcampo()){
      actualizarListaArticulo(articulos);
         document.querySelector('#feedback').classList.remove('ocultar');
         
       //irPagina();
    }
}
function agregarArticulo(){
  let datosArticulos=obtenerDatosArticulos();

    if(validarcampo()){
          registrarArticulo (datosArticulos);
         
                 crear();
                 cerrar();        
      
      }

}
//guardamos la imagen y le damos preview y un change para que se precargue en el modal
function guardarimage(){
      let imagen = document.querySelector("#inputImage").files[0];
 
  if(document.querySelector('#inputImage').files[0].size<613096) { 
     let  reader = new FileReader();
   reader.addEventListener("load", function (){
      preview.src=reader.result;
      inputImage="";
       inputImage=reader.result;}
     )

   ;if(imagen){
 reader.readAsDataURL(imagen);
    
   }
 }
}



function verArticulo() {
       window.location.href = 'formulario-articulo.html';
             validarpagina();

           guardarvarable(this.id);
             
   // document.querySelector('#btneditar').addEventListener('click',modificarArticulo);
  //document.querySelector('#btneliminar').addEventListener('click',deshabilitarArticulo);
    //  verModal();

        
}
function llenarModal() {
  agregarProvedor();
     let lista=obtenervariable();
       

          document.querySelector('#mostrar').src=lista[10];
        document.querySelector('#nCodigo').value=lista[1];
     document.querySelector('#txtdescripcion').value=lista[3];
         document.querySelector('#nCosto').value=lista[7];
         document.querySelector('#nVenta').value=lista[8];
         document.querySelector('#nMercado').value=lista[9];
        document.querySelector('#txtnombre').value=lista[2];
        document.querySelector('#nDisponible').value=lista[11];

    
    
}


function agregarProvedor(){
let proveedor=[];
let  seprovedor =document.querySelector('#seprovedor');
  seprovedor.innerHTML="";
 // seProvedor.options[seprovedor.selectedIndex].text=obtenerProveedor();
 proveedor=obtenerProveedor();

    for(let i=0;i<proveedor.length;i++){
      let option=document.createElement('option');
      option.innerText=proveedor[i]['nombre'];
      option.value=proveedor[i]['codigo'];
      seprovedor.add(option);
    }
   
}

function validarpagina(){
  if (( window.location.href ).includes('formulario')){
        let lista=obtenervariable();
          if(lista==""||lista==undefined){
                registrar();
          }else{
                llenarModal();

          }
               
  }
}


function modificarArticulo() {
    habilitarInput();

  let titulo=document.querySelector('#Titulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Modifcar Articulo"));
    titulo.classList.add('Titulo');
    divmodificar.classList.add('ocultarAgregar')
    btnanadir.classList.remove('ocultarAgregar');
    btncerrar.value="Cancelar";


 document.querySelector('#btnanadir').removeEventListener('click',agregarArticulo); 
document.querySelector('#btnanadir').addEventListener('click',guardarArticuloActualizado); 

    
}
function registrar(){

 document.querySelector('#btnanadir').addEventListener('click',agregarArticulo);
document.querySelector('#btnCerrar').addEventListener('click',limpiar);
 
}

//esta funcion crea elementos de texto para cambiar el titulo
function deshabilitar(){
  
 
       document.querySelector('#modalwarning').classList.remove('ocultar');
       btnCancelar.addEventListener('click',cerrarModal)
       btndeshabilitar.addEventListener('click',eliminar);
  
}

function eliminar(){
    let articulos=obtenerDatosArticulos();
    articulos[0]=document.querySelector('#nCodigo').value;
    articulos[1]=document.querySelector('#mostrar').src;
    //si pongo false nunca va entrar a crear los articulos
    articulos[7]=false;
    actualizarListaArticulo(articulos);
    limpiar();
    irPagina();
}

//con esta función que envio iun parametro a crear y crear la envia a la logica para que se compare con la lista de localStorage

