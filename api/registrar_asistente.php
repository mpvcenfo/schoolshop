<?php

//se carga la conexion
require_once 'conexion.php';

$asistente = $_POST['pNuevoAsistente'];

	//aNuevoAsistente.push(	codigo,institucion,sNombre,sSegundoNombre, sApellido,sSegundoApellido, nIdentificacion, dFechaNacimiento, 
//sGenero, nTelefono, sCorreo,imagen);
  
    $pInstitucion=$asistente[0];
    $pnombre = $asistente[1];
    $psegundoNombre = $asistente[2];
    $pApellido=$asistente[3];
    $pSegundoApellido=$asistente[4];
    $pIdentificacion=$asistente[5];
    $fFechaNacimiento=$asistente[6];
    $pGenero=$asistente[7];
    $nTelefono=$asistente[8];
    $pCorreo=$asistente[9];
    $pimagen=$asistente[10];
  
    
    //Se crea la sentencia que llama al procedimiento almacenado
    $sentencia_sql = "CALL pa_registrar_asistente('$pInstitucion', '$pnombre', '$psegundoNombre','$pApellido','$pSegundoApellido',
    '$pIdentificacion',' $fFechaNacimiento','$pGenero',' $nTelefono','$pCorreo','$pimagen')";
    
    
    //Se ejecuta la sentencia sql y se alamcena el resultado
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la sentencia sql " . $conexion->error);
    
    
    echo json_encode($result);



?>