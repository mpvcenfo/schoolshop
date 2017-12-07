/********************************************************************************************JS Registro Institucion */

/*devuelve la lista de instituciones */
/*function  obtenerListaCitas(){
    let listaCitas=JSON.parse(localStorage.getItem("listaCitasLS"));
    if(listaCitas==null){
        listaCitas=[["115050006","Arturo","Aymerich","arturoap2@gmail.com","05/11/2017",""],["125465972","Edwin","Villalobos","Edwin@gmail.com","05/11/2017",""],["112456876","Carlos","Perez","Cperez@gmail.com","08/11/2017",""],["112365487","Marco","Vargas","Mvargas@gmail.com","09/11/2019",""]];
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
}*/
//función que llama el php 
function obtenerListaCitas(){
    let listaCitas = [];
    
        let peticion = $.ajax({
          url: '../api/listar_pedidos_cabeza.php',
          type: 'post',
          contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
          dataType : 'json',
          async:false,
          data:{
         
          }
        });
        peticion.done(function(datos){
            listaCitas = datos;
          console.log('Conexion exitosa');
        });
        peticion.fail(function(){
            listaCitas = [];
          console.log('Error de conexion');
        });
        return listaCitas;
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
