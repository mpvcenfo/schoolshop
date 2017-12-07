/*con lo siguiente función guardamos los datos  usando como parametro aNuevoProveedor de la funcion obtenerdatos  */
function registrarProveedores(pNuevoProveedor) {
	let listaProveedores=obtenerListaProveedores();

       listaProveedores.push(pNuevoProveedor);
  localStorage.setItem('listaProveedoresLs',JSON.stringify(listaProveedores));

}
function obtenerListaProveedores(){
	let listaProveedores=JSON.parse(localStorage.getItem('listaProveedoresLs'))
	if (listaProveedores==null){
       	listaProveedores=[

///aNuevoProveedor.push(sCedula,sNombre,sTelefono,sCorreo,sEncargado,checkeados,true);  
  
       [ '3-101984565', 'Lehmanm ',22761235,'sac@librerialehmann.com','Roberto Luna','Libros,Cuadernos,Arte,Herramientas',true],
       [ '3-101554567', 'Cuadernos Ellíder ',22921240,'sc@ElLíder.com','María Chavarría','Libros,Cuadernos,',true],
       [ '3-101984567', 'Faber Castell ',22925290,'faberc@Castell.ac.cr','Mario Castro','Herramentas',true],
       [ '3-101984568', 'Santillana ',22405525,'santi@gmail.com','Roberto Luna','Herramentas',true],
       
          
         ];
       }
	return listaProveedores;
  }

function obtenerListaProveedoresFiltrada(pFiltro){
	let ListaOriginal=obtenerListaProveedores();
    let  ListaFiltrada=[];

    for (let i=0;i<ListaOriginal.length;i++){
    	if(ListaOriginal[i][1].toLowerCase().includes(pFiltro) ){
           ListaFiltrada.push(ListaOriginal[i]);
    	}
    }
      return ListaFiltrada; 
}
function obtenerListaProveedoresCodigo(pid){
        let articuloEncontrado=[];
      let listaArticulos=obtenerListaProveedores();
      for(let i=0 ;i <listaArticulos.length;i++){
       if( pid==listaArticulos[i][0]){
        articuloEncontrado=listaArticulos[i];
         }

      }

      return articuloEncontrado;
}
function actualizarListaProveedoresPorCod(pdatosactualizados){

    let listaProveedores=obtenerListaProveedores();
      for(let i=0;i<listaProveedores.length;i++){
        if(pdatosactualizados[0]==listaProveedores[i][0]){
            listaProveedores[i]=pdatosactualizados;
        }
      }
      localStorage.setItem('listaProveedoresLs',JSON.stringify(listaProveedores));
    
  }
function  guardartemporal(pid){
  let listaproveedor=obtenerListaProveedores();
  let temporal=[];
  for(let i=0; i < listaproveedor.length;i++){
      if(pid==listaproveedor[i][0]){
         temporal=listaproveedor[i];
         localStorage.setItem("temporalproveedorLS",JSON.stringify(temporal));
      }

   }
}

function obtenertemporal(){
  let temporal=JSON.parse(localStorage.getItem("temporalproveedorLS"));
  if (temporal==null){
       temporal=[];
  }
  return temporal;
}