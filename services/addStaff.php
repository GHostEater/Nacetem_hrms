<?php
header("application/json");

$filename2 = 'placeholder.jpg';

$host = 'localhost';
$db = 'hrms';
$db_user = 'root';
$db_pass = '';
$con = mysql_connect($host,$db_user,$db_pass) or die("Could Not Connect");
$db_select = mysql_select_db($db,$con);

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
$img = $filename2;

mysql_query("INSERT INTO staff VALUES (NULL,'$surname','$firstname','$middlename','$sex','$state','$lga','$cadre','$designation','$conraiss','$date_birth','$date_confirmation','$date_first_app','$date_present_app','$date_last_promotion','$qualifications','$remarks','$img');");
$filename = $_FILES['file']['name'];

$result = mysql_query("SELECT * FROM staff WHERE surname = '$surname' AND date_birth = '$date_birth';");

$row = mysql_fetch_array($result);

extract($row);

$img = $sn.'.jpg';

mysql_query("UPDATE staff SET img = '$img' WHERE sn = '$sn';");

$destination = '../img/staff/'.$sn.'.jpg';
move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );

echo json_encode("success");

?>