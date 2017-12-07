   /*Aqui devuelvo la lista que esta  en localStorage*/
 function obtenerListaArticulos(){
 let listaArticulos=JSON.parse(localStorage.getItem('listaArticulosLS'))
    if(listaArticulos==null){
       listaArticulos=[  
       // ['codigo','id_articulo','nombre','descripcion','proveedor' ,'institucion','requiereCita','costo','costoVenta','costoMercado','imagen','disponible',true]
        [1,'Art001','Borrador','BORRADOR REPUESTO T/LAPIZ ELEPHANT, C/2','1','inst1',false,100000,110000,120000,'imgLS/BORRADOR CUAD. PELIKAN MIGAJON M-20.jpg','50',0],
       ];
//proveedor,imagen,descripcion,codigo,costo,venta,mercado,nombre
    

  
        
   
   }
    return listaArticulos;
} 

function obtenerProveedor(){
  let listaproveedores = [];
  
      let peticion = $.ajax({
        url: '../api/llamar_Proveedor.php',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
        dataType : 'json',
        async:false,
        data:{
       
        }
      });
      peticion.done(function(datos){
        listaproveedores = datos;
        console.log('Conexion exitosa');
      });
      peticion.fail(function(){
        listaproveedores = [];
        console.log('Error de conexion');
      });
      return listaproveedores;
}

function guardarvariable(pid){
 let lista=obtenerListaArticulos(); 
     let variable=[];
    for(let i=0;i<lista.length;i++){
        if(pid==lista[i][3]){
          variable=lista[i];
  localStorage.setItem('variableLS',JSON.stringify(variable));
  
    }

  }

}  


function obtenervariable(){
  
 let varableguardada=JSON.parse(localStorage.getItem('variableLS'));
 if (varableguardada==null){
       varableguardada=[];
   }
     return varableguardada;
}

function registrarArticulo(pdatosArticulos){
		let listaArticulos=obtenerListaArticulos();

       listaArticulos.push(pdatosArticulos);
  localStorage.setItem('listaArticulosLS',JSON.stringify(listaArticulos));

}
 function obtenerlistaArticulosFiltrada(pFiltro){
 let ListaOriginal=obtenerListaArticulos();
    let  ListaFiltrada=[];

    for (let i=0;i<ListaOriginal.length;i++){
    	if(ListaOriginal[i][7].toLowerCase().includes(pFiltro) ){
           ListaFiltrada.push(ListaOriginal[i]);
    	}
    }
      return ListaFiltrada; 
}
function obtenerListaArticulosCodigo(pid){
	      let articuloEncontrado=[];
      let listaArticulos=obtenerListaArticulos();
      for(let i=0 ;i <listaArticulos.length;i++){
       if( pid==listaArticulos[i][3]){
        articuloEncontrado=listaArticulos[i];
         }

      }

      return articuloEncontrado;
}
function actualizarListaArticulo(pArticulo){
  let peticion = $.ajax({
    url: '../api/actualizar-Articulo.php',
    type: 'post',
      contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
      dataType : 'json',
      async:false,
      data:{
          'particulo' : pArticulo
      }
    });
    peticion.done(function(response){
      console.log('El artículo se actualizo con éxito');
    });
    peticion.fail(function(){
      console.log('El artículo no se pudo actualizar');
    });
}

//in this function i'm calling cloudinary to send my image 

let imagenUrl = '';
let foto=document.querySelector('#mostrar')    
function enviarURL(){

  return imagenUrl;
}

$(function() {
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'acmeinnovate', api_key: '867273236384566'});
    //$.cloudinary.config({ cloud_name: 'acme2017', api_key: '249576785744721'});

    // Upload button
    let uploadButton = $('#btnSeleccionarImagen');

    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'acmeinnovate', upload_preset: 'proyecto1', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            imagenUrl = processImage(id);
            foto.src=processImage(id);
          console.log(imagenUrl);
        });
    });
  
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}


