<?php
header("Content-Type: application/json");

$host = 'localhost';
$db = 'hrms';
$db_user = 'root';
$db_pass = '';
$con = mysql_connect($host,$db_user,$db_pass) or die("Could Not Connect");
$db_select = mysql_select_db($db,$con);

$result = mysql_query("SELECT * FROM staff");
$n_rows = mysql_num_rows($result);

for ($i=0; $i<$n_rows; $i++){
	$row = mysql_fetch_array($result);
	extract($row);

	$staff_id = $sn;

	$sn = $i+1;

	$date_birth = date("d-F-Y",strtotime($date_birth));
	if($date_birth == "01-January-1970"){
		$date_birth="";
	}
	
	$date_confirmation = date("d-F-Y",strtotime($date_confirmation));
	if($date_confirmation == "01-January-1970"){
		$date_confirmation="";
	}

	$date_first_app = date("d-F-Y",strtotime($date_first_app));
	if($date_first_app == "01-January-1970"){
		$date_first_app="";
	}

	$date_present_app = date("d-F-Y",strtotime($date_present_app));
	if($date_present_app == "01-January-1970"){
		$date_present_app="";
	}

	$date_last_promotion = date("d-F-Y",strtotime($date_last_promotion));
	if($date_last_promotion == "01-January-1970"){
		$date_last_promotion="";
	}
		
	$resultsArray[$i] = array( 'staff_id' => $staff_id,
							   'sn' => $sn,
							   'surname' => $surname,
							   'first_name' => $first_name,
							   'middle_name' => $middle_name,
							   'sex' => $sex,
							   'state' => $state,
							   'lga' => $lga,
							   'cadre' => $cadre,
							   'designation' => $designation,
							   'conraiss' => $conraiss,
							   'date_birth' => $date_birth,
							   'date_confirmation' => $date_confirmation,
							   'date_first_app' => $date_first_app,
							   'date_present_app' => $date_present_app,
							   'date_last_promotion' => $date_last_promotion,
							   'qualifications' => $qualifications,
							   'remarks' => $remarks,
							   'img' => $img,);
							   
}

echo json_encode($resultsArray);
?>