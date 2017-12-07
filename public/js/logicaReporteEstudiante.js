

function obtenerListaEstudianteFiltrada(pFiltro){
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
;
    let listaProveedores=obtenerListaProveedores();
      for(let i=0;i<listaProveedores.length;i++){
        if(pdatosactualizados[0]===listaProveedores[i][0]){
            listaProveedores[i]=pdatosactualizados;
        }
      }
      localStorage.setItem('listaProveedoresLs',JSON.stringify(pdatosactualizados));
    
  }
