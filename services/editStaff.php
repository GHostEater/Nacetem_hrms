<?php
header("application/json");

$host = 'localhost';
$db = 'hrms';
$db_user = 'root';
$db_pass = '';
$con = mysql_connect($host,$db_user,$db_pass) or die("Could Not Connect");
$db_select = mysql_select_db($db,$con);

$sn = $_POST['sn'];
$surname = $_POST['surname'];
$firstname = $_POST['first'];
$middlename = $_POST['middle'];
$date_birth = date('Y-m-d',strtotime($_POST['date_birth']));
$sex = $_POST['sex'];
$state = $_POST['state'];
$lga = $_POST['lga'];
$cadre = $_POST['cadre'];
$designation = $_POST['designation'];
$conraiss = $_POST['conraiss'];
$date_confirmation = date('Y-m-d',strtotime($_POST['date_confirmation']));
$date_first_app = date('Y-m-d',strtotime($_POST['date_first_app']));
$date_present_app = date('Y-m-d',strtotime($_POST['date_present_app']));
$date_last_promotion = date('Y-m-d',strtotime($_POST['date_last_promotion']));
$qualifications = mysql_real_escape_string($_POST['qualifications']);
$remarks = mysql_real_escape_string($_POST['remarks']);

mysql_query("UPDATE staff SET surname = '$surname',first_name = '$firstname',middle_name = '$middlename',date_birth = '$date_birth',sex = '$sex',state = '$state',lga = '$lga',cadre = '$cadre',designation = '$designation',conraiss = '$conraiss',date_confirmation = '$date_confirmation',date_first_app = '$date_first_app',date_present_app = '$date_present_app',date_last_promotion = '$date_last_promotion',qualifications = '$qualifications',remarks = '$remarks' WHERE sn = '$sn';");

echo json_encode("success");
?>

