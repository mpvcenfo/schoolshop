/*function registrarEncargado(pNuevoEncargado){
    let listaEncargado = obtenerListaEncargado();

    listaEncargado.push(pNuevoEncargado);
    localStorage.setItem('listaEncargadoLS', JSON.stringify(listaEncargado));
    let rol=obtenerListaUsuarios();
    rol.push([pNuevoEncargado[2],pNuevoEncargado[7],pNuevoEncargado[2],3,true]);
    localStorage.setItem('listaUsuariosLS', JSON.stringify(rol));
    

}*/


function registrarEncargado(pNuevoEncargado){

    let peticion = $.ajax({
        url: '../api/registrar_encargado.php.',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
        dataType : 'json',
        async:false,
        data:{
            'pNuevoEncargado' : pNuevoEncargado
        }
      });
      peticion.done(function(response){
        console.log('El encargado se registró con éxito');
      });
      peticion.fail(function(){
        console.log('El encargado no se pudo registrar');
      });

}
function obtenerListaUsuarios(){
    let usuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));

    if(usuarios== null){
      usuarios =[

      [406988715,"","","",true],
      [118920472,"","","",true]


      ] 
     
    }

    return usuarios;
}
function registrarUsuario(anuevoUsuario){
    let peticion = $.ajax({
        url: '../api/registrar_usuario.php.',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded;charset=ISO-8859-15',
        dataType : 'json',
        async:false,
        data:{
            'anuevoUsuario' : anuevoUsuario
        }
      });
      peticion.done(function(response){
        console.log('El usuario se registró con éxito');
      });
      peticion.fail(function(){
        console.log('El usuario no se pudo registrar');
      });
}
function obtenerListaEncargado(){
    let listaEncargado = JSON.parse(localStorage.getItem('listaEncargadoLS'));

    if(listaEncargado== null){
        listaEncargado =[

        ["Carlos ","Castro Madrigal",406988715,"1972-02-19","Casado","Masculino",65324788,
        "carloscm@gmail.com","San Pablo, Heredia","Padre"],

        ["Marco","Sandoval Piedra",118920472,"1977-12-12","Casado","Masculino",65547188,
        "marcosp@gmail.com","Tibas, San José","Padre"]

        ] 
     
    }

    return listaEncargado;
}

function buscarEncargadoPorCodigo(pencargado){
      let encargadoEncontrado=[];
      let listaEncargado=obtenerListaEncargado();
      for(let i=0 ;i <listaEncargado.length;i++){
       if( pencargado==listaEncargado[i][2]){
        encargadoEncontrado =listaEncargado[i];
         }

      } 
      return encargadoEncontrado;

  }

function actualizarEncargado(pencargadoActualizado){
  let listaEncargado=obtenerListaEncargado();

  for (let i=0; i<listaEncargado.length; i++){

    if (pencargadoActualizado[2]==listaEncargado[i][2]){

      listaEncargado[i]=pencargadoActualizado;
      localStorage.setItem('listaEncargadoLS',JSON.stringify(listaEncargado));

    }


  }

  }


  
function ModEstadoListaUsuarios(pcedula){
  let usuarios = obtenerListaUsuarios();
  for(let i=0;i<usuarios.length;i++){
      if(pcedula==usuarios[i][0]){
          usuarios[i][4]=false;
          localStorage.setItem('listaUsuariosLS', JSON.stringify(usuarios));
      }
  } 
}
