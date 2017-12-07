<?php

//se carga la conexion
require_once 'conexion.php';

$encargado = $_POST['pNuevoEncargado'];



//aNuevoEncargado.push(nCodigo,sNombre, sSegundoNombre,sApellido,sSegundoApellido, nIdentificacion, dFechaNacimiento, 
//sEstadoCivil, sGenero, nTelefono, sCorreo, sDireccion, sParentesco);
     
   
    $pnombre=$encargado[0];
    $psegundoNombre=$encargado[1];
    $pApellido=$encargado[2];
    $pSegundoApellido=$encargado[3];
    $pIdentificacion=$encargado[4];
    $fFechaNacimiento=$encargado[5];
    $pEstadoCivil=$encargado[6];
    $pGenero=$encargado[7];
    $nTelefono=$encargado[8];
    $pCorreo=$encargado[9];
    $pDireccion=$encargado[10];
    $pParentesco=$encargado[11];
    
    //Se crea la sentencia que llama al procedimiento almacenado
    $sentencia_sql = "CALL pa_registrar_encargado( '$pnombre', '$psegundoNombre','$pApellido','$pSegundoApellido',
    '$pIdentificacion', '$fFechaNacimiento',' $pEstadoCivil' ,'$pGenero',' $nTelefono','$pCorreo','$pDireccion',' $pParentesco')";
    
    
    //Se ejecuta la sentencia sql y se alamcena el resultado
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la sentencia sql " . $conexion->error);
    
    
    echo json_encode($result);



?>