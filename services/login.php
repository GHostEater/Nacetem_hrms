<?php

session_start();

header("Content-Type: application/json");

$host = 'localhost';
$db = 'hrms';
$db_user = 'root';
$db_pass = '';
$con = mysql_connect($host,$db_user,$db_pass) or die("Could Not Connect");
$db_select = mysql_select_db($db,$con);

$username = $_POST['username'];
$password = $_POST['password'];

$result = mysql_query("SELECT * FROM admin WHERE username = '$username' AND password = '$password'");

$n_rows = mysql_num_rows($result);
if ($n_rows > 0){
		$row = mysql_fetch_array($result);
		extract($row);
	
		$_SESSION['username'] = $username;
		$_SESSION['name'] = $name;

		$loginArr = array('username' => $username,
						  'name' => $name );
		echo json_encode($loginArr);
}
else{
	$loginErr  = array('error' => "Incorrect Username/Password");
	echo json_encode($loginErr);
}
?>