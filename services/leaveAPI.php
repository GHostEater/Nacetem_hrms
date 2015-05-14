<?php
header("application/json");

$host = 'localhost';
$db = 'hrms';
$db_user = 'root';
$db_pass = '';
$con = mysqli_connect($host,$db_user,$db_pass,$db) or die("Could Not Connect");
$query = "SELECT * FROM `leave` ORDER BY `staff_id`";
$result = mysqli_query($con,$query);


$i = 0;
while ($row = mysqli_fetch_assoc($result)) {

	$start = date('d-F-Y',strtotime($row['start']));
	$end = date('d-F-Y',strtotime($row['end']));
	
	$start_date = date_create($start);
	$end_date = date_create($end);
	
	$duration = date_diff($start_date,$end_date);
	$duration = $duration -> format('%a days');
	$staff_id = $row['staff_id'];
	$query2 = "SELECT * FROM `staff` WHERE sn = '$staff_id'";
	$result2 = mysqli_query($con,$query2);
	$row2 = mysqli_fetch_assoc($result2);
	
	$resultsArray[$i] = array( 'staff_id' => $row['staff_id'],
							   'leave_id' => $row['sn'],
							   'leave_type' => $row['leave_type'],
							   'start' => $start,
							   'end' => $end,
							   'duration' => $duration,
							   'reason' => $row['reason'],
							   'status' => $row['status'],
							   'surname' => $row2['surname'],
							   'first_name' => $row2['first_name'],
							   'middle_name' => $row2['middle_name'],
							   'img' => $row2['img']);
	$i =$i+1;
							   
}
echo json_encode($resultsArray);
?>