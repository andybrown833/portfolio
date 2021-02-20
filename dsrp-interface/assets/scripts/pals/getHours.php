<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/dbConnect.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/cons/getUser.php';

if($stmt = $con->prepare(' SELECT SUM(durCal) FROM patrolactivitylogs WHERE userID = ? ')) {
    $stmt->bind_param('s', $userID);
    $stmt->execute();
    $stmt->store_result();
    if($stmt->num_rows > 0 ) {
        $stmt->bind_result($durCal);
        $stmt->fetch();
        $totalDur = intval($durCal / 3600);
    } else {
        echo 'ERR: 2';
        exit;
    }
} else {
    echo 'ERR: 2';
    exit;
}

?>