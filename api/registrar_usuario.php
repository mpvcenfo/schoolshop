<?php

//se carga la conexion
require_once 'conexion.php';

$usuario = $_POST['anuevoUsuario'];

//anuevoUsuario.push(nIdentificacion,sCorreo,scontraseña,nRol,pEstado);

   
    $pIdentificacion=$usuario[0];
    $pcorreo=$usuario[1];
    $pContrasena=$usuario[2];
    $pRol=$usuario[3];
    $pEstado=$usuario[4];

  
    
    //Se crea la sentencia que llama al procedimiento almacenado
    $sentencia_sql = "CALL pa_registrar_usuario('$pIdentificacion',' $pcorreo' ,' $pContrasena','$pRol',' $pEstado')";
    
    
    //Se ejecuta la sentencia sql y se alamcena el resultado
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la sentencia sql " . $conexion->error);
    
    
    echo json_encode($result);



?>