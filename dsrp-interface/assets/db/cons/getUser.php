<?php
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

// IF USER ISNT LOGGED IN

if(isset($_SESSION['loggedin']) && isset($_SESSION['user']) && $_SESSION['loggedin'] == TRUE && $_SESSION['user'] !== '') {

    include_once $_SERVER['DOCUMENT_ROOT']."/assets/db/dbConnect.php";

    if($stmt = $con->prepare(" SELECT id, displayName, email, communityTitle, communityRank, recruitmentRank, steamID, discordID, tsID, profileBanner  FROM accounts WHERE id = ? ")) {
        $stmt->bind_param("s", $_SESSION['user']);
        $stmt->execute();
        $stmt->store_result();

        if($stmt->num_rows > 0) {
            $stmt->bind_result($id, $displayName, $email, $communityTitle, $communityRank, $recruitmentRank, $steamID, $discordID, $tsID, $profileBanner);
            $stmt->fetch();

            $userID = $id;
            $userDisplayName = $displayName;
            $userEmail = $email;
            $userCommunityTitle = $communityTitle;
            $userCommunityRank = $communityRank;
            $userRecruitmentRank = $recruitmentRank;
            $userProfileBanner = $profileBanner;
            $userSteamID = $steamID;
            $userDiscordID = $discordID;
            $userTeamspeakID = $tsID;

        } else {
            echo '<script type="text/javascript">location.href = "/";</script>';
            exit;
        }

    } else {
        echo "<script>alert('An error with a connection deep deep down has occured preventing you from proceeding further.');</script>";
        echo '<script type="text/javascript">location.href = "/";</script>';
        exit;
    }

    // GRAB DEPARTMENTS FOR USER
    if($stmt = $con->prepare(' SELECT deptID FROM department_users WHERE userID = ? ')) {
        $stmt->bind_param('s', $userID);
        $stmt->execute();
        $stmt->store_result();
        if($stmt->num_rows > 0) {
            $stmt->bind_result($deptID);

            while($stmt->fetch()) {

                if($deptID == 1) {
                    $hasLSPD = TRUE;
                }
                if($deptID == 2) {
                    $hasBCSO = TRUE;
                }
                if($deptID == 3) {
                    $hasSASP = TRUE;
                }
                if($deptID == 4) {
                    $hasSAFD = TRUE;
                }
                if($deptID == 5) {
                    $hasCOMMS = TRUE;
                }
                if($deptID == 6) {
                    $hasCIV = TRUE;
                }

            }

        }
    }

    // A = Admin
    // M = Member
    // S = Staff

    $adminRanks = array();
    // SELECT ALL ROLES WITH THE LEVEL OF A
    $query = ' SELECT rankName FROM roles WHERE rankLevel = "A" ';
    if($stmt = $con->prepare($query)) {
        $stmt->execute();
        $stmt->store_result();
        if($stmt->num_rows > 0) {
            $stmt->bind_result($rankName);
            $stmt->fetch();
            $adminRanks[] = $rankName;
        }
    }
    $staffRanks = array();
    // SELECT ALL ROLES WITH THE LEVEL OF S
    $query = ' SELECT rankName FROM roles WHERE rankLevel = "S" ';
    if($stmt = $con->prepare($query)) {
        $stmt->execute();
        $stmt->store_result();
        if($stmt->num_rows > 0) {
            $stmt->bind_result($rankName);
            $stmt->fetch();
            $staffRanks[] = $rankName;
        }
    }
    $memberRanks = array();
    // SELECT ALL ROLES WITH THE LEVEL OF M
    $query = ' SELECT rankName FROM roles WHERE rankLevel = "M" ';
    if($stmt = $con->prepare($query)) {
        $stmt->execute();
        $stmt->store_result();
        if($stmt->num_rows > 0) {
            $stmt->bind_result($rankName);
            $stmt->fetch();
            $memberRanks[] = $rankName;
        }
    }

    $permLevel = '';
    if(!isset($communityRank) && is_null($communityRank) && empty($communityRank)) {
        echo "<script>alert('Your permission level has not been set. Please contact a CoC member for further information and bring your Web ID.');</script>";
        echo('<script>location.reload();</script>');
        exit;
    } else {
        if(in_array($communityRank, $adminRanks)) {
            $permLevel = 'A';
        }
        elseif(in_array($communityRank, $staffRanks)) {
            $permLevel = 'S';
        }
        elseif(in_array($communityRank, $memberRanks)) {
            $permLevel = 'M';
        }
    }

}



?>