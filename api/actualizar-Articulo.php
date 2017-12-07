<?php

//se carga la conexion
require_once 'conexion.php';

$articulo = $_POST['particulo'];

// ['codigo','id_articulo','nombre','descripcion','proveedor' ,
//'institucion','requiereCita','costo','costoVenta','costoMercado','imagen','disponible',true]

    $pcodigo = $articulo[0];
    $id_articulo=$articulo[1];
    $pnombre = $articulo[2];
    $pdescripcion=$articulo[3];
    $pproveedor=$articulo[4];
    $pinstitucion=$articulo[5];
    $requiereCita=$articulo[6];
    $pcosto=$articulo[7];
    $pcostoVenta=$articulo[8];
    $pcostoMercado=$articulo[9];
    $pimagen=$articulo[10];
    $pdisponible=$articulo[11];
    $pestado=$articulo[12];
    
    //Se crea la sentencia que llama al procedimiento almacenado
    $sentencia_sql = "CALL pa_modificar_articulo ('$pcodigo', '$id_articulo' ,'$pnombre', ' $pdescripcion','$pproveedor',' $pinstitucion' ,
     '$requiereCita' ,'$pcosto',' $pcostoVenta',' $pcostoMercado','  $pimagen',
    ' $pdisponible',' $pestado')";
    
    
    //Se ejecuta la sentencia sql y se alamcena el resultado
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la sentencia sql " . $conexion->error);
    
    
    echo json_encode($result);



?>
