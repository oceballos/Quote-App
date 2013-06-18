<?php

$server = "localhost";
$username = "root";
$password = "";
$database = "quotedemo";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());
mysql_select_db($database, $con);

$la = mysql_query("SELECT MAX(id) FROM songs") or die ("Query error: 1" . mysql_error());

$la_b = array();
while($row = mysql_fetch_assoc($la)) {
	$la_b[] = $row;
}

//var_dump=($array("$la_b");

//$la_b[1] = mysql_fetch_assoc($la);
//$la_b [2] = mysql_fetch_assoc($la);
//echo "$la_b[1]";

mysql_close($con);

echo $_GET['jsoncallback'] . '(' . json_encode($la_b[0]) . ');';

?>