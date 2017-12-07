/********************************************************************************************JS Registro Institucion */

/*devuelve la lista de instituciones */
function  obtenerListaCursos(){
    let listaCursos=JSON.parse(localStorage.getItem("listaCursosLS"));
    if(listaCursos==null){
        listaCursos=[];
    }
    return listaCursos;
}

/*Registra una nueva institucion en la lista del LS */
function registrarCurso(pNuevoCurso){
    let listaCursos=obtenerListaCursos();
    listaCursos.push(pNuevoCurso);
    localStorage.setItem("listaCursosLS",JSON.stringify(listaCursos));
}


/*Actualiza datos por codigo */
function actualizarListaCursoPorCod(pCurso){
;
    let listaCursos=obtenerListaCursos();
      for(let i=0;i<listaCursos.length;i++){
        if(pCurso[0]===listaCursos[i][0]){
            listaCursos[i]=pCurso;
        }
      }
      localStorage.setItem("listaCursosLS",JSON.stringify(listaCursos));
    
  }
//deshabilita la institucion colocando el estado en false




/******************************************************************************************** Fin JS Registro Institucion */
