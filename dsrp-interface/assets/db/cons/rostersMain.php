<?php
if (session_status() !== PHP_SESSION_ACTIVE) { session_start(); }

require_once $_SERVER['DOCUMENT_ROOT']."/assets/db/dbConnect.php";


$query = 'SELECT id, displayName, email, communityTitle, communityRank, recruitmentRank, steamID, discordID, tsID, profileBanner FROM accounts';
if($stmt->prepare($query)) {
    $stmt->execute();
    $stmt->store_result();
    if($stmt->num_rows > 0) {
        $stmt->bind_result($id, $displayName, $email, $communityTitle, $communityRank, $recruitmentRank, $steamID, $discordID, $tsID, $profileBanner);
        $stmt->fetch();
        // NUMBER OF ACCOUNTS
        $totalAccounts = $stmt->num_rows;
    }
} else {
    echo '<br>There was an error gathering the accounts.';
    exit;
}

// $query = ' SELECT * FROM accounts ';
// if($stmt = $con->prepare($query)) {
//     $stmt->execute();
//     $stmt->store_result();
    
    

// }


?>