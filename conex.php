<?php
header('Content-type: application/json');

$server = "localhost";
$username = "root";
$password = "Turbuhaler160";
$database = "quotedemo";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());
mysql_select_db($database, $con);


$qbaney = mysql_query("SELECT * FROM songs"); 
mt_srand(time()); 
$max = mysql_num_rows($qbaney); 
$rand = mt_rand(1,$max); 

$sqldo = mysql_query("SELECT frase, nombre FROM songs WHERE id='$rand'"); 

while($ban = mysql_fetch_assoc($sqldo)){
$records[] = $ban;
}

mysql_close($con);

echo $_GET['jsoncallback'] . '(' . json_encode($records) . ');';

?>
