<?php

require_once 'conexion.php';

    $lista = $_POST['pid_lista'];
    $nombre = $_POST['pnombre'];
    $descripcion = $_POST['pdescripcion'];
    $nivel = $_POST['pnivel'];
    $seccion = $_POST['pseccion'];

$sentencia_sql = "CALL 	pa_modificar_lista_articulos_cabeza('$lista','$nombre','$descripcion','$nivel','$seccion')";

$result = $conexion->query($sentencia_sql);

if(!$result)die("Falló la sentencia sql en lista cabeza " . $conexion->error);



echo json_encode($result);

?>