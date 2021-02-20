<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/cons/getUser.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/dbConnect.php';

?>

<div class="card border-primary rounded">
    <div class="card-header bg-primary">
        <b>Patrol Log Submissions</b>
    </div>

    <div class="card-body">

        <?php
            if($stmt = $con->prepare(' SELECT * FROM patrolactivitylogs WHERE userID = ? LIMIT 5 ')) {
                $stmt->bind_param('s', $userID);
                $stmt->execute();
                $stmt->store_result();
                if($stmt->num_rows < 1) {
                    echo '<center><h4>THERE ARE NO PATROL ACITIVTY LOGS TO DISPLAY</h4></center>';
                } else {
                    echo '
                    <table class="table table-sm table-hover table-dark table-bordered">

                    <thead>
                        <tr class="text-center bg-secondary rounded-top">
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Duration</th>
                            <th>Department</th>
                            <!--<th>Division</th>-->
                            <th>Status</th>
                        </tr>
                    </thead>
        
                    <thead>
                    ';
                    $stmt->bind_result($palId, $palStartDate, $palStartTime, $palEndDate, $palEndTime, $palDurCal, $palDurDisplay, $palNotes, $palDepartment, $palDivision, $palUserID, $palMonth, $palYear, $palStatus);
                    while($stmt->fetch()) {
                        $hours = intval($palDurCal / 3600);
                        $seconds_remain = ($palDurCal - ($hours * 3600));
                        $minutes = intval($seconds_remain / 60);
                        $palDurDisplay = $hours . ' Hour(s) ' . $minutes . ' Minute(s)';

                        if($stmt = $con->prepare(' SELECT name FROM departments WHERE id = ? ')) {
                            $stmt->bind_param('s', $palDepartment);
                            $stmt->execute();
                            $stmt->store_result();
                            if($stmt->num_rows > 0) {
                                $stmt->bind_result($deptName);
                                $stmt->fetch();
                                $palDept = $deptName;
                            }
                        }

                        echo '<tr class="text-center">';

                        echo '<td>' . $palStartDate . ' @ ' . $palStartTime . '</td>';
                        echo '<td>' . $palEndDate . ' @ ' . $palEndTime . '</td>';
                        echo '<td>' . $palDurDisplay . '</td>';
                        echo '<td>' . $palDepartment . '</td>';
                        //echo '<td>' . $palDiv . '</td>';
                        echo '<td>' . $palStatus . '</td>';

                        echo '</tr>';
                    }
                    echo '</thead></table>';
                }
            }
        ?>
    </div>
</div>