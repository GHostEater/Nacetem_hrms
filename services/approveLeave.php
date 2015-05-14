<?php
header("application/json");

$host = 'localhost';
$db = 'hrms';
$db_user = 'root';
$db_pass = '';
$con = mysqli_connect($host,$db_user,$db_pass,$db) or die("Could Not Connect");

$sn = $_POST['leave_id'];

$query = "UPDATE `leave` SET status = '1' WHERE sn = '$sn';";
$result = mysqli_query($con,$query);

echo json_encode("success");
?>