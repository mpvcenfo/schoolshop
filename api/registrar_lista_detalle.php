<?php

require_once 'conexion.php';



$lista = $_POST['plista'];
$articulo = $_POST['particulo'];

$sentencia_sql = "CALL pa_registrar_lista_detalle('$lista','$articulo')";

$result = $conexion->query($sentencia_sql);

if(!$result)die("Falló la sentencia sql en lista detalle " . $conexion->error);



echo json_encode($result);



?>