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





///
let formularioagregar=document.querySelector('#formularioagregar');
let divarticulos=document.querySelector('#divarticulos');
let inputNombre=document.querySelector('#txtnombre');
let inputCodigo=document.querySelector('#nCodigo');
/* campo de proveedor*/
let inputFiltro=document.querySelector('#filtro');
inputFiltro.addEventListener('keyup',filtrar);

      let preview=document.querySelector('#mostrar');
 /* varables para los div*/



/*Las siguientes funciones son para abrir y cerrar el modal*/

//function format()
//{

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






/*Aqui guardo la lista que esta  en localStorage*/



//Aqui creo los cards de los articulos
function crear(){
    let divarticulos=document.querySelector('#divarticulos');
    divarticulos.innerHTML="";
    let tablaArticulos;
    let inst=indicarCodColegio();

    tablaArticulos=obtenerArticulos();




    for(let i=0;i< tablaArticulos.length;i++){
            if(tablaArticulos[i]['estado']==1 && tablaArticulos[i]['institucion']==inst){
        
          let nuevoDivArticulo=document.createElement("div");

          nuevoDivArticulo.classList.add('cardArticulo');
        

          let nuevoHeaderArticulo=document.createElement("h3");

          let header=document.createTextNode(tablaArticulos[i]['nombre']);

          nuevoHeaderArticulo.appendChild(header);

          let divImagenArticulo=document.createElement("div");
              
          divImagenArticulo.classList.add("imagenCard");

          let imagen=document.createElement("img");

          imagen.src=tablaArticulos[i]['imagen'];

          divImagenArticulo.appendChild(imagen);
    //  let nuevapagina=document.createElement('a');
      //   nuevapagina.setAttribute('href','ver-articulo.html');
        //     nuevapagina.classList.add('')

          let contenedorprecio1=document.createElement("span");
            let contenedorprecio2=document.createElement("span");
            let contenedorprecio3=document.createElement("span");
            let contenedorcodigo=document.createElement("span");
            let contenedordescripcion=document.createElement('span');
            let descripcion=document.createTextNode("Descripción: "  +tablaArticulos[i]['descripcion'].toLowerCase() );
            let codigo=document.createTextNode(tablaArticulos[i]['id_articulo'] );
            let precioCosto=document.createTextNode('Precio Costo: '+tablaArticulos[i]['costo']);
            let precioVenta=document.createTextNode('Precio Venta: ¢'+Number((tablaArticulos[i]['costoVenta'])).toLocaleString());
            let precioMercado=document.createTextNode('Precio Mercado: '+tablaArticulos[i]['costoMercado']);

                
           contenedorcodigo.appendChild(codigo);
          //  contenedorprecio1.appendChild(precioCosto);
          contenedordescripcion.appendChild(descripcion);
          contenedorprecio2.appendChild(precioVenta);
          //  contenedorprecio3.appendChild(precioMercado);
          

            nuevoDivArticulo.appendChild(nuevoHeaderArticulo);


             nuevoDivArticulo.appendChild(divImagenArticulo);

       

              nuevoDivArticulo.appendChild(contenedorcodigo);
            nuevoDivArticulo.appendChild(contenedorprecio1);
            nuevoDivArticulo.appendChild(contenedorprecio2);
            nuevoDivArticulo.appendChild(contenedorprecio3);
            nuevoDivArticulo.appendChild(contenedordescripcion);
               nuevoDivArticulo.id=tablaArticulos[i]['id_articulo'];


            nuevoDivArticulo.addEventListener('click',verArticulo);
            divarticulos.appendChild(nuevoDivArticulo);
         
            }      
            
     }

}


function verArticulo() {
  guardarvariable(this.id);
     window.location.href = 'ver-articulo.html';
          

 
//con esta función que envio iun parametro a crear y crear la envia a la logica para que se compare con la lista de localStorage
function filtrar(){
  let filtro=document.querySelector('#filtro').value;
  let mainDiv=document.querySelector('#divarticulos');
  let miniDiv=[];
  miniDiv=mainDiv.getElementsByClassName('cardArticulo');

  for(let i=0;i<miniDiv.length;i++){
    // let he=miniDiv[i].getElementsByTagName('h3');
    let nombre=miniDiv[i].getElementsByTagName('h3')[0];
      if((nombre.innerHTML).toLowerCase().indexOf(filtro.toLowerCase()) > -1){
        miniDiv[i].classList.remove('ocultar');
      }
      else{
        miniDiv[i].classList.add('ocultar');
      }
  }


}
