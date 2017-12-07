function  registraLista(pdatoslista){
		let listasporseccion=obtenerLista();

       listasporseccion.push(pdatoslista);
  localStorage.setItem('listasporseccionLS',JSON.stringify(listasporseccion));

}

function obtenerTablaArticulos(){
    let listaArticulos =[];

    let peticion = new XMLHttpRequest();   // new HttpRequest instance 
    let url = "../api/listar_tabla_articulos.php";
    
    peticion.open("GET", url, false);
    peticion.setRequestHeader("Content-Type", "application/json");
    
    peticion.onreadystatechange = function() {//Call a function when the state changes.
        if(peticion.readyState == 4) {
            listaArticulos= JSON.parse(peticion.response);
            // console.log(peticion.response);
        }
    }

    
    peticion.send();
    
    
    return listaArticulos;
}
// function obtenerLista(){
//  let listaArticulos=JSON.parse(localStorage.getItem('listasporseccionLS'))
//     if(listaArticulos==null){
//        listaArticulos=[
//     //articulos.push(numberCodigo,sNombreArticulo,sDescripcion,oseccion,onivel,nuevosArticulosSeleccionados);
//          ["cod001","Curso guitarra","Artículos para el curso de guitarra acustica","a","b","",true]
//        ];
//    }
//     return listaArticulos;
// } 

function guardartemporal(pid){
    let listasporSeccion=obtenerLista();
    let temporal=[];
    for(let i=0; i < listasporSeccion.length;i++){
        if(pid==listasporSeccion[i][0]){
           temporal=listasporSeccion[i];
           localStorage.setItem("temporalListaSeccionLS",JSON.stringify(temporal));
        }
  
     }
}

function obtenertemporal(){
    let temporal=JSON.parse(localStorage.getItem("temporalListaSeccionLS"));
    if (temporal==null){
         temporal=[];
    }
    return temporal;
  }

function obtenerlistaArticulosPorSeccionFiltrada(pFiltro){
	let ListaOriginal=obtenerLista();
    let  ListaFiltrada=[];

    for (let i=0;i<ListaOriginal.length;i++){
    	if(ListaOriginal[i][1].toLowerCase().includes(pFiltro) ){
           ListaFiltrada.push(ListaOriginal[i]);
    	}
    }
      return ListaFiltrada; 
}
function buscarListaPorCodigo(pid ){
	let listaEncontrado=[];
      let listas=obtenerLista();
      for(let i=0 ;i <listas.length;i++){
       if( pid==listas[i][0]){
        listaEncontrado=listas[i];
         }

      }

      return listaEncontrado;
}

function actualizarlistaseccion(plista){
    
        let listasporseccion=obtenerLista();
          for(let i=0;i<listasporseccion.length;i++){
            if(plista[0]==listasporseccion[i][0]){
                listasporseccion[i]=plista;
            }
          }
          localStorage.setItem('listasporseccionLS',JSON.stringify(listasporseccion));
          
      }

    /*  function actualizarListaProveedoresPorCod(pdatosactualizados){
        
            let listaProveedores=obtenerListaProveedores();
              for(let i=0;i<listaProveedores.length;i++){
                if(pdatosactualizados[0]==listaProveedores[i][0]){
                    listaProveedores[i]=pdatosactualizados;
                }
              }
              localStorage.setItem('listaProveedoresLs',JSON.stringify(listaProveedores));
            
          }*/
 function obtenerListaArticulos(){
 let listaArticulos=JSON.parse(localStorage.getItem('listaArticulosLS'))
    if(listaArticulos==null){
       listaArticulos=[
          
        
        ['ABA001',' Abaco Baco'],
        ['ABA002',"Abaco Baco"],
      ['ABA004','Abaco Koala '],
      ['ABA003','Abaco Koala'],
      ['ACU000','Acuarela Baco '],
      ['ACU001','Acuarela BOMBIM'],
      ['ACU005','Acuarela Crayola'],
      ['ACU006','Acuarela Crayola'],
      ['ACU011','Acuarela Pelikan'],
      ['ACU012','Acuarela Pelikan'], 
      ['BOR000','Borrador Barrilito'], 
      ['BOR004','Borrador  Pelikan'], 
      ['BOR004','Borrador  Pelikan'], 
      ['BOR008','Borrador  Pelikan'], 
      ['BOR013','Borrador  Pelikan'], 
      ['CAL020','Calculadora Acme'], 
      ['CAL021','Calculadora Acme'], 
      ['CAL022','Calculadora casio'], 
      ['CIN422','Cinta Janel'], 
      ['CIN423','Cinta scoth'], 
      ['COL025','Color Bic '], 
       ['COL024','Color Bic'], 
    
     ['COL003','Color Bic'], 
    
     ['COL023','Color Crayola'], 
    
     ['COL032','Color Crayola'], 
    
         ['COR018','Corector De Cinta'], 

    
           ['COR038','Corector Bic'], 
    
     ['COR039','Corector Bic'], 
         ['COR045','Corector Pelikan '], 

  
         ['Z0970','Zapato Hombre'], 
     ['Z0170','Zapato Mujer'], 
     ['Uni08','Uniforme para mujer'], 
     ['Uni01','Uniforme para Hombre'], 
     ['Cuad019','Cuaderno'], 

     ['Cuad020','Cuaderno'], 
     ['Lap001','Lapiz'], 
     ['Lap002','Lapiz'], 


      
      
      
      
      ];
   }
    return listaArticulos;
}
