<?php
header("application/json");

$host = 'localhost';
$db = 'hrms';
$db_user = 'root';
$db_pass = '';
$con = mysqli_connect($host,$db_user,$db_pass,$db) or die("Could Not Connect");

$staff_id = $_POST['staff_id'];
$leave_type = $_POST['leave_type'];
$start = date('Y-m-d',strtotime($_POST['start']));

echo $start;
$end = date('Y-m-d',strtotime($_POST['end']));
$reason = mysql_real_escape_string($_POST['reason']);

$query = "INSERT INTO `leave`(`sn`, `staff_id`, `leave_type`, `start`, `end`, `reason`, `status`) VALUES (null,'$staff_id','$leave_type','$start','$end','$reason','0')";
$result = mysqli_query($con,$query);

echo json_encode("success");

?>