<?php
header('Content-type: application/json');

$server = "localhost";
$username = "root";
$password = "Turbuhaler160";
$database = "quotedemo";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());
mysql_select_db($database, $con);

$la = mysql_query("SELECT id FROM songs ORDER BY RAND() LIMIT 1") or die ("Query error: 1" . mysql_error());

$la = array();
//while($row = mysql_fetch_assoc($la)) {
//	$la_b[] = $row;
//}

//$la_b[1] = mysql_fetch_assoc($la);
//$la_b [2] = mysql_fetch_assoc($la);
$do = $la[1];

$ran = rand(1,$do);
//echo "$la";
$sql = "SELECT frase FROM songs WHERE id = $ran";
$result = mysql_query($sql) or die ("Query error: PUCHA " . mysql_error());

$records = array();

while($row = mysql_fetch_assoc($result)) {
	$records[] = $row;
}

mysql_close($con);

echo $_GET['jsoncallback'] . '(' . json_encode($records) . ');';
?>
