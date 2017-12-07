<?php

require_once 'conexion.php';



$lista = $_POST['plista'];
$articulo = $_POST['particulo'];

$sentencia_sql = "CALL pa_modificar_lista_articulos_detalle('$lista','$articulo')";

$result = $conexion->query($sentencia_sql);

if(!$result)die("Falló la sentencia sql en lista detalle modifcar php" . $conexion->error);



echo json_encode($result);



?>