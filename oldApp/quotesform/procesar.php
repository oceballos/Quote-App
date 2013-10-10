<?php

define('DB_NAME', 'quotedemo');
define('DB_USER', 'root');
define('DB_PASS', 'Turbuhaler160');
define('DB_HOST', 'localhost');

$link = mysql_connect(DB_HOST, DB_USER, DB_PASS);

if (!$link) {
    dir('There was a problem when trying to connect to the host. Please contact Tech Support. Error: ' . mysql_error());    
}

$db_selected = mysql_select_db(DB_NAME, $link);

if (!$link) {
    dir('There was a problem when trying to connect to the database. Please contact Tech Support. Error: ' . mysql_error());    
}

$frase = $_POST['frase'];
$cancion = $_POST['nombre'];
$autor = $_POST['autor'];
$youtube = $_POST['youtube'];
$imagen = $_POST['imagen'];



$sql = "INSERT INTO songs (frase, nombre, autor, youtube, imagen) VALUES ('$frase', '$nombre', '$youtube', '$imagen2')";

if (!mysql_query($sql)) {
    die('Error: ' . mysql_error()); 
}

?>