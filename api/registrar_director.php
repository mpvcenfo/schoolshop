<?php

//se carga la conexion
require_once 'conexion.php';

$director = $_POST['pNuevoDirector'];


//aNuevoDirector.push(scodigo,sNombre,sSegundoNombre,sApellido,sSegundoApellido,
// nIdentificacion, dFechaNacimiento, 
//sGenero, nTelefono, sCorreo, imagen, sInstitucion);
    $pcodigo = $director[0];
    $pnombre = $director[1];
    $psegundoNombre = $director[2];
    $pApellido=$director[3];
    $pSegundoApellido=$director[4];
    $pIdentificacion=$director[5];
    $fFechaNacimiento=$director[6];
    $pGenero=$director[7];
    $nTelefono=$director[8];
    $pCorreo=$director[9];
    $pimagen=$director[10];
    $pInstitucion=$director[11];
    
    //Se crea la sentencia que llama al procedimiento almacenado
    $sentencia_sql = "CALL pa_registrar_director('$pcodigo', '$pnombre', '$psegundoNombre','$pApellido','$pSegundoApellido',
    '$pIdentificacion',' $fFechaNacimiento','$pGenero',' $nTelefono','$pCorreo','$pimagen',' $pInstitucion')";
    
    
    //Se ejecuta la sentencia sql y se alamcena el resultado
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la sentencia sql " . $conexion->error);
    
    
    echo json_encode($result);



?>
