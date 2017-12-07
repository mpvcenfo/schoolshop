/********************************************************************************************JS Registro Institucion */

/*devuelve la lista de instituciones */
// function  obtenerListaInstituciones(){
//     let listaInstituciones=JSON.parse(localStorage.getItem("listaInstitucionesLS"));
//     if(listaInstituciones==null){
//         listaInstituciones=[["inst0","Saint Paul","500 Metros Oeste de la Panasonic","9.977118","-84.203999","Ana Cristina","infocol@saintpaul.ed.cr","2438-0824","1","1","imgLS/SaintPaul.jpg","true","11"],["inst1","Lincoln High","Calle 124 Ave 22","9.977124","-84.203999","Franco Ramirez","infocol@saintpaul.ed.cr","2256-9845","1","1","imgLS/inst1.jpg","true","11"],["inst2","Greenlands Charter School","Calle 124 Ave 23","9.977258","-84.203999","Estaban Ramirez","infocol@saintpaul.ed.cr","2289-7468","1","1","imgLS/inst2.jpg","true","11"],["inst3","Horizon Conservatory","Calle 124 Ave 24","8.977118","-84.203999","Franco Valenciano","infocol@saintpaul.ed.cr","2248-6481","1","1","imgLS/inst3.jpg","true","11"],["inst4","Sunshine High","Calle 124 Ave 25","7.685468","-84.203999","Oscar Pereira","infocol@saintpaul.ed.cr","2685-5425","1","1","imgLS/inst4.jpg","true","11"]]
//     }
//     return listaInstituciones;
// }

function obtenerTemp() {
    let temp=JSON.parse(localStorage.getItem("tempInstitucionLS"));
    if(temp==null){
        temp=[];
    }
    return temp;
}




function  obtenerListaInstitucionesFiltrada(psFiltro){
    let listaInstituciones=JSON.parse(localStorage.getItem("listaInstitucionesLS"));
    let listaFiltrada=[];
    if(listaInstituciones==null){
        listaInstituciones=[["inst0","Saint Paul","500 Metros Oeste de la Panasonic","9.977118","-84.203999","Ana Cristina","infocol@saintpaul.ed.cr","2438-0824","1","1","imgLS/SaintPaul.jpg","true","11"],["inst1","Lincoln High","Calle 124 Ave 22","9.977124","-84.203999","Franco Ramirez","infocol@saintpaul.ed.cr","2256-9845","1","1","imgLS/inst1.jpg","true","11"],["inst2","Greenlands Charter School","Calle 124 Ave 23","9.977258","-84.203999","Estaban Ramirez","infocol@saintpaul.ed.cr","2289-7468","1","1","imgLS/inst2.jpg","true","11"],["inst3","Horizon Conservatory","Calle 124 Ave 24","8.977118","-84.203999","Franco Valenciano","infocol@saintpaul.ed.cr","2248-6481","1","1","imgLS/inst3.jpg","true","11"],["inst4","Sunshine High","Calle 124 Ave 25","7.685468","-84.203999","Oscar Pereira","infocol@saintpaul.ed.cr","2685-5425","1","1","imgLS/inst4.jpg","true","11"]]
    }

    for(let i=0;i<listaInstituciones.length;i++){
        if(listaInstituciones[i][1].toLowerCase().includes(psFiltro.toLowerCase())){
            listaFiltrada.push(listaInstituciones[i]);
        }
    }
    return listaFiltrada;
}


/*Registra una nueva institucion en la lista del LS */
// function registrarInstitucion(pNuevaInstitucion){
//     let listaInstituciones=obtenerListaInstituciones();
//     listaInstituciones.push(pNuevaInstitucion);
//     localStorage.setItem("listaInstitucionesLS",JSON.stringify(listaInstituciones));
// }


/*Actualiza datos por codigo */
function actualizarListaInstitucionesPorCod(pInstitucion){
;
    let listaInstituciones=obtenerListaInstituciones();
      for(let i=0;i<listaInstituciones.length;i++){
        if(pInstitucion[0]===listaInstituciones[i][0]){
            listaInstituciones[i]=pInstitucion;
        }
      }
      localStorage.setItem("listaInstitucionesLS",JSON.stringify(listaInstituciones));
    
}

function guardarTemporal(pid){
    let lista=obtenerListaInstituciones();
    let temp=[];
    for(let i=0;i<lista.length;i++){
        if(pid==lista[i][0]){
            temp=lista[i];
            localStorage.setItem("tempInstitucionLS",JSON.stringify(temp));
        }
      }

}



function borrarTemp() {
    let vacio=[];
    localStorage.setItem("tempInstitucionLS",JSON.stringify(vacio));
}



/******************************************************************************************** Fin JS Registro Institucion */



