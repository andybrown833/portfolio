<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/cons/getUser.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/assets/config.php';

// GENERIC PAGES
$start = '<div class="list-group">';
$title = '<a class="list-group-item list-group-item-action border-primary active" disabled>DashBoard</a>';
$dashboard = '<a class="list-group-item list-group-item-action border-primary" href="/">DashBoard</a>';
$forms = '<a class="list-group-item list-group-item-action border-primary" href="/app/forms/">Forms</a>';
$rosters = '<a class="list-group-item list-group-item-action border-primary" href="/app/rosters/">Rosters & Stats</a>';
$profile = '<a class="list-group-item list-group-item-action border-primary" href="">Profile</a>';
$settings = '<a class="list-group-item list-group-item-action border-primary" href="">Settings</a>';
$end = '</div>';

// STAFF PAGES
$staffStart = '<div class="list-group">';
$staffTitle = '<a class="list-group-item list-group-item-action bg-primary text-white">Staff Options</a>';
$staffPanel = '<a class="list-group-item list-group-item-action border-primary" href="/app/staff/">Staff Panel</a>';
$staffUsers = '<a class="list-group-item list-group-item-action border-primary" href="/app/users/">Users</a>';
$staffEnd = '</div>';

// ADMIN PAGES
$adminStart = '<div class="list-group">';
$adminTitle = '<a class="list-group-item list-group-item-action bg-primary text-white">Admin Options</a>';
$adminPanel = '<a class="list-group-item list-group-item-action border-primary" href="/app/admin/">Admin Panel</a>';
$adminUsers = '<a class="list-group-item list-group-item-action border-primary" href="/app/users/">Users</a>';
$adminSysSettings = '<a class="list-group-item list-group-item-action border-primary" href="">System Settings</a>';
$adminEnd = '</div>';

// MEMBER SIDE BAR
if($permLevel == 'M') {
    echo $start;
    //echo $title;
    echo $dashboard;
    echo $forms;
    echo $rosters;
    echo $profile;
    echo $settings;
    echo $end;
}

// STAFF SIDE BAR
if($permLevel == 'S') {
    echo $start;
    //echo $title;
    echo $dashboard;
    echo $forms;
    echo $rosters;
    echo $profile;
    echo $settings;
    echo $end;
    echo '<br>';
    echo $staffStart;
    echo $staffTitle;
    echo $staffPanel;
    echo $staffUsers;
    echo $staffEnd;
}

// ADMIN SIDE BAR
if($permLevel == 'A') {
    echo $start;
    //echo $title;
    echo $dashboard;
    echo $forms;
    echo $rosters;
    echo $profile;
    echo $settings;
    echo $end;
    echo '<br>';
    echo $adminStart;
    echo $adminTitle;
    echo $adminPanel;
    echo $adminUsers;
    echo $adminSysSettings;
    echo $adminEnd;


}

?>
