<?php
if (session_status() !== PHP_SESSION_ACTIVE) { session_start(); }
// VALIDATE USER

if(isset($_SESSION['loggedin']) && isset($_SESSION['user']) && $_SESSION['loggedin'] == TRUE && $_SESSION['user'] !== '') {} else {
	echo '<script type="text/javascript">window.history.back();</script>';
	exit;
}

// CHECK POST
if(!isset($_POST) || empty($_POST) || is_null($_POST)) {
    echo '<script type="text/javascript">window.history.back();</script>';
	exit;
}

// VALIDATE INPUTS
if($_SERVER['REQUEST_METHOD'] == 'POST' ) {
    
    $userID = '';
    $startDate = '';
    $startTime = '';
    $endDate = '';
    $endTime = '';
    $durCal = '';
    $durDisplay = '';
    $department = '';
    $division = '';
    $civLog = '';
    $notes = '';
    $palStatus = '';

    // VALIDATE VARIABLES
    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/cons/getUser.php';
    $userID = $userID;
    $startDate = validate($_POST['startDate']);
    $startTime = validate($_POST['startTime']);
    $endDate = validate($_POST['endDate']);
    $endTime = validate($_POST['endTime']);
    $notes = validate($_POST['notes']);
    
    // DUR CAL
    $start = strtotime($startDate . $startTime);
    $end = strtotime($endDate . $endTime);
    $durCal = ($end - $start);
    $hours = intval($durCal / 3600);
    $seconds_remain = ($durCal - ($hours * 3600));
    $minutes = intval($seconds_remain / 60);
    $durDisplay = $hours . ' Hour(s) ' . $minutes . ' Minute(s)';

    $department = 3;
    $palStatus = 'Pending Review';
    
    // SETUP SQL AND CALCULATE VALUES
    require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/dbConnect.php';
    if($stmt = $con->prepare(' INSERT INTO patrolactivitylogs (startDate, startTime, endDate, endTime, durCal, durDisplay, notes, department, userID, palStatus) VALUES (?,?,?,?,?,?,?,?,?,?) ')) {
        $stmt->bind_param('ssssssssss', $startDate, $startTime, $endDate, $endTime, $durCal, $durDisplay, $notes, $department, $userID, $palStatus);
        $stmt->execute();
        $stmt->store_result();
        // GET PAL ID
        if($stmt = $con->prepare(' SELECT id FROM patrolactivitylogs WHERE userID = ? ORDER BY id DESC LIMIT 1 ')) {
            $stmt->bind_param('s', $userID);
            $stmt->execute();
            $stmt->store_result();
            if($stmt->num_rows > 0) {
                $stmt->bind_result($id);
                $stmt->fetch();
                $goURL = '/app/forms/patrol/view.php?id=' . $id;
                echo '<script type="text/javascript">window.location.assign("'. $goURL .'")</script>';
                exit;
            } else {
                echo 'There was an error fetching values.';
                exit;
            }
        } else {
            echo 'We had issues with the SQL. #2';
            exit;
        }
    } else {
        echo 'We had issues with the SQL. #1';
        exit;
    }


} else {
    echo 'This was not a post.';
    exit;
}

?>