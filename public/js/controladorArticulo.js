crear();

/*controlador para articulos*/
/*las siguites varables son para hacer el modal*/
let mAgregar=document.querySelector('#modal');
let btnAgregar=document.querySelector('#btnAgregar');
let btncerrar =document.querySelector('#btnCerrar');
let btnanadir=document.querySelector('#btnanadir');

 let divmodificar = document.querySelector('#btnModDes');
/* modal*/
/*las siguites varables son para validar que primero se llene el campo de proveedor*/

let seProvedor=document.querySelector('#seprovedor');
let inputImage=document.querySelector('#inputImage');
let tDescripcion=document.querySelector('#txtdescripcion');
let nCosto=document.querySelector('#nCosto');
let nVenta=document.querySelector('#nVenta');
let nMercado=document.querySelector('#nMercado');
let formularioagregar=document.querySelector('#formularioagregar');
let divarticulos=document.querySelector('#divarticulos');
let inputNombre=document.querySelector('#txtnombre');
let inputCodigo=document.querySelector('#nCodigo');
/* campo de proveedor*/
let inputFiltro=document.querySelector('#txtFiltro');
inputImage.addEventListener('change', guardarimage);
inputFiltro.addEventListener('keyup',filtrar);

      let preview=document.querySelector('#mostrar');
 /* varables para los div*/

 document.querySelector('#btnAgregar').addEventListener('click',abrir);
document.querySelector('#btnCerrar').addEventListener('click',cerrar);
 
seProvedor.addEventListener('change',habilitar);

/*Las siguientes funciones son para abrir y cerrar el modal*/
function abrir(){
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

}

function cerrar(){

 mAgregar.style.display = "none";
 let titulo=document.querySelector('#Titulo');
    titulo.innerHTML="";
     titulo.classList.add('Titulo');
    titulo.appendChild(document.createTextNode("Agregar Articulo"));
     Titulo.classList.add('Titulo');
    divmodificar.classList.add('ocultarAgregar')
    btnanadir.value="Registrar";
    btnanadir.classList.remove('ocultarAgregar');
    limpiar();
      habilitarInput();
      
}
function verModal() {
    let titulo=document.querySelector('#Titulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Articulo"));
    divmodificar.classList.remove('ocultarAgregar');
    btnanadir.value="Guardar";
    btnanadir.classList.add('ocultarAgregar');
    btncerrar.value="Cerrar";
    deshabilitarInput();

   
}


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
 let formulario=[provedor,descripcion,venta,costo,mercado,nombre,codigo];
 let preview=document.querySelector('img');
 let vacio;
 let comprobar=false;
 let lleno=true;
 for ( vacio= 0; vacio <formulario.length; vacio++) {
      if (formulario[vacio].value==""){
           
       formulario[vacio].classList.add('error'); 
             lleno=false;
  }else{
   formulario[vacio].classList.remove('error');
   formulario.length==lleno;
     
      }

    }
  if(preview.src=="file:///C:/Users/unicomer/Desktop/Proyecto%20Software/Casos%20de%20uso%20C%C3%B3digo/Agregar%20Articulo/agregarArt%C3%ADculo.html"){
           document.querySelector('#inputImage').classList.add('error');
            lleno=false;
      }else{
              document.querySelector('#inputImage').classList.remove('error');
                  

     }

      return lleno;
}  

function limpiar(){
    formularioagregar.reset('cardsArticulos');
     preview.src="";
}

/*Aqui guardo la lista que esta  en localStorage*/

function obtenerDatosArticulos(){   
 let articulos=[];
      let  selectproveedor = seprovedor.options[seprovedor.selectedIndex].text;
      let  imagen=inputImage;
      let  sDescripcion=tDescripcion.value;
      let  numberCosto=nCosto.value;
      let numberVenta=nVenta.value;
      let numberCodigo=inputCodigo.value;
      let numberMercado=nMercado.value;
      let  sNombreArticulo=inputNombre.value;
   
      articulos.push(selectproveedor,imagen,sDescripcion,numberCodigo,numberCosto,numberVenta,numberMercado,sNombreArticulo,true);

      return articulos;
 
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
//Aqui creo los cards de los articulos
function crear(pFiltro){
  let divarticulos=document.querySelector('#divarticulos');
divarticulos.innerHTML="";
let tablaArticulos;

     if(pFiltro==undefined ){
         tablaArticulos=obtenerListaArticulos();
      }else{
        tablaArticulos=obtenerlistaArticulosFiltrada(pFiltro);
      }

 for(let i=0;i< tablaArticulos.length;i++){
        if(tablaArticulos[i][7]){
      let nuevoDivArticulo=document.createElement("div");

         nuevoDivArticulo.classList.add('cardArticulo');
        nuevoDivArticulo.addEventListener('click',abrir );

      let nuevoHeaderArticulo=document.createElement("h3");

      let header=document.createTextNode(tablaArticulos[i][7]);

      nuevoHeaderArticulo.appendChild(header);

       let divImagenArticulo=document.createElement("div");
          
      divImagenArticulo.classList.add("imagenCard");

      let imagen=document.createElement("img");

      imagen.src=tablaArticulos[i][1];

      divImagenArticulo.appendChild(imagen);


          let contenedorprecio1=document.createElement("span");
            let contenedorprecio2=document.createElement("span");
            let contenedorprecio3=document.createElement("span");
            let contenedorcodigo=document.createElement("span");
            let contenedordescripcion=document.createElement('span');
            let descripcion=document.createTextNode("Descripción :"  +tablaArticulos[i][2] );
            let codigo=document.createTextNode("Código :"  +tablaArticulos[i][3] );
            let precioCosto=document.createTextNode('Precio Costo: '+tablaArticulos[i][4]);
            let precioVenta=document.createTextNode('Precio Venta: '+tablaArticulos[i][5]);
            let precioMercado=document.createTextNode('Precio Mercado: '+tablaArticulos[i][6]);

                
           contenedorcodigo.appendChild(codigo);
          contenedorprecio1.appendChild(precioCosto);
         contenedorprecio2.appendChild(precioVenta);
         contenedorprecio3.appendChild(precioMercado);
         contenedordescripcion.appendChild(descripcion);

            nuevoDivArticulo.appendChild(nuevoHeaderArticulo);


             nuevoDivArticulo.appendChild(divImagenArticulo);


              nuevoDivArticulo.appendChild(contenedorcodigo);
            nuevoDivArticulo.appendChild(contenedorprecio1);
            nuevoDivArticulo.appendChild(contenedorprecio2);
            nuevoDivArticulo.appendChild(contenedorprecio3);
            nuevoDivArticulo.appendChild(contenedordescripcion);
               nuevoDivArticulo.id=tablaArticulos[i][3];

            nuevoDivArticulo.addEventListener('click',verArticulo);
            divarticulos.appendChild(nuevoDivArticulo);
         
            }      
            
     }

}


function verArticulo() {
  
    document.querySelector('#btneditar').addEventListener('click',modificarArticulo);
  document.querySelector('#btneliminar').addEventListener('click',deshabilitarArticulo);
      verModal();
      llenarModal(this.id);
  
        
}
function llenarModal(pid) {
    let lista=obtenerListaArticulosCodigo(pid);
    for(let i=0;i<lista.length;i++){
        if(pid==lista[3]){

          document.querySelector('#mostrar').src=lista[1];
        document.querySelector('#nCodigo').value=lista[3];
     document.querySelector('#txtdescripcion').value=lista[2];
         document.querySelector('#nCosto').value=lista[4];
         document.querySelector('#nVenta').value=lista[5];
         document.querySelector('#nMercado').value=lista[6];
        document.querySelector('#txtnombre').value=lista[7];

    
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
//envio la lista actualizada a logica para hacer setItem
function guardarArticuloActualizado(){
  
    let articulos=obtenerDatosArticulos();
        articulos[0]=document.querySelector('#nCodigo').value;
        articulos[1]=document.querySelector('#mostrar').src;
    if(validarcampo()){
        actualizarListaArticulo(articulos);
        crear();
        limpiar();
        cerrar();
    }
}
//esta funcion crea elementos de texto para cambiar el titulo
function deshabilitarArticulo(){
  let titulo=document.querySelector('#Titulo');
    titulo.innerHTML="";
    titulo.appendChild(document.createTextNode("Deshabilitar Artículo"));
    divmodificar.classList.add('ocultarAgregar');
    btnanadir.classList.remove('ocultarAgregar');
    btnanadir.value="Deshabilitar";
    btnanadir.classList.add('error');
    btncerrar.value="Cancelar";

    btnanadir.removeEventListener('click',agregarArticulo);
    btnanadir.addEventListener('click',confirmacion);
}

function confirmacion(){
    let articulos=obtenerDatosArticulos();
    articulos[0]=document.querySelector('#nCodigo').value;
    articulos[1]=document.querySelector('#mostrar').src;
    //si pongo false nunca va entrar a crear los articulos
    articulos[7]=false;
    actualizarListaArticulo(articulos);
    crear();
    limpiar();
    cerrar();
}

//con esta función que envio iun parametro a crear y crear la envia a la logica para que se compare con la lista de localStorage
function filtrar(){

    let sFiltro=inputFiltro.value.toLowerCase();
   crear(sFiltro);
}
