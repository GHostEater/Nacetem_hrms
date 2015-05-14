<?php
header("application/json");

$host = 'localhost';
$db = 'hrms';
$db_user = 'root';
$db_pass = '';
$con = mysql_connect($host,$db_user,$db_pass) or die("Could Not Connect");
$db_select = mysql_select_db($db,$con);

$sn = $_POST['sn'];

mysql_query("DELETE FROM staff WHERE sn = '$sn';");

echo json_encode("success");

?>