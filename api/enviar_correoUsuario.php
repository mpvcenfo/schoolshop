<?php

$to = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: support@schoolshop.com' . "\r\n";

mail($to,$subject,$message,$headers);
?>