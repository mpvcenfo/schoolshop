<?php

require_once 'conexion.php';


    $pid_articulo = $_POST['pid_articulo'];
    $pnombre = $_POST['pnombre'];
    $pdescripcion = $_POST['pdescripcion'];
    $pproveedor = $_POST['pproveedor'];
    $pinstitucion = $_POST['pinstitucion'];
    $prequiereCita = $_POST['prequiereCita'];
    $pcosto = $_POST['pcosto'];
    $pcostoVenta = $_POST['pcostoVenta'];
    $pcostoMercado = $_POST['pcostoMercado'];
    $pimagen = $_POST['pimagen'];
    $pdisponible = $_POST['pdisponible'];



$sentencia_sql = "CALL 	pa_registrar_articulo('$pid_articulo','$pnombre','$pdescripcion','$pproveedor','$pinstitucion','$prequiereCita','$pcosto','$pcostoVenta','$pcostoMercado','$pimagen','$pdisponible')";


$result = $conexion->query($sentencia_sql);

if(!$result)die("Falló la sentencia sql en registrar articulo" . $conexion->error);



echo json_encode($result);


?>

