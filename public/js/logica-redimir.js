/********************************************************************************************JS Registro Institucion */

/*devuelve la lista de instituciones */
function  obtenerListaCitas(){
    let listaCitas=JSON.parse(localStorage.getItem("listaCitasLS"));
    if(listaCitas==null){
        listaCitas=[["115050006","Arturo","Aymerich","arturoap2@gmail.com","2017-06-05",""],["115050007","Arturo","Aymerich","arturoap2@gmail.com","2017-06-05",""],["115050008","Arturo","Aymerich","arturoap2@gmail.com","2017-06-05",""],["115050009","Arturo","Aymerich","arturoap2@gmail.com","2017-06-05",""],["115050010","Arturo","Aymerich","arturoap2@gmail.com","2017-06-05",""],["115050011","Arturo","Aymerich","arturoap2@gmail.com","2017-06-05",""]];
    }
    return listaCitas;
}

function  obtenerListaCitasPorCod(pCod){
    let listaCitas=obtenerListaCitas();
    for(let i=0;i<listaCitas.length;i++){
      if(pCod==listaCitas[i][0]){
          return listaCitas[i];
      }
    }
}

/*Registra una nueva institucion en la lista del LS */
function registrarCita(pNuevoCita){
    let listaCitas=obtenerListaCitas();
    listaCitas.push(pNuevoCita);
    localStorage.setItem("listaCitasLS",JSON.stringify(listaCitas));
}


/*Actualiza datos por codigo */
function actualizarListaCitaPorCod(pCita){
;
    let listaCitas=obtenerListaCitas();
      for(let i=0;i<listaCitas.length;i++){
        if(pCita[0]===listaCitas[i][0]){
            listaCitas[i]=pCita;
        }
      }
      localStorage.setItem("listaCitasLS",JSON.stringify(listaCitas));
    
  }
//deshabilita la institucion colocando el estado en false




/******************************************************************************************** Fin JS Registro Institucion */


/*FUNCION TEMPORAL A ESPERA DE MARCO */
function obtenerPedidoDetalle(){
    let ListaDetalle=JSON.parse(localStorage.getItem("x"));
    if(ListaDetalle==null){
        ListaDetalle=[["101","2017-10-20","1-2345-6790","Art1","Lapiz","5","500"],["101","2017-10-21","1-2345-6790","Art2","Borrador","5","400"],["101","2017-10-22","1-2345-6790","Art3","Tajador","5","600"],["101","2017-10-23","1-2345-6790","Art4","Cuaderno","3","1200"],["101","2017-10-24","1-2345-6790","Art5","Marcador","2","800"],["102","2017-10-20","1-2345-6789","Art1","Lapiz","5","500"],["102","2017-10-21","1-2345-6789","Art2","Borrador","5","400"],["102","2017-10-22","1-2345-6789","Art3","Tajador","5","600"],["102","2017-10-23","1-2345-6789","Art4","Cuaderno","3","1200"],["102","2017-10-24","1-2345-6789","Art5","Marcador","2","800"]];
    }
    return ListaDetalle;
}

function obtenerPedidoEncabezado(){
    let ListaEncabezado=JSON.parse(localStorage.getItem("x"));
    if(ListaEncabezado==null){
        ListaEncabezado=[["101","2017-11-01","1-2345-6789","12700","3000","false"],["102","2017-11-02","1-2345-6790","12700","0","false"]];
    }
    return ListaEncabezado;
}


/*FUNCION TEMPORAL A ESPERA DE MARCO */
