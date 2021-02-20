<?php
$page = '0.0.6.7';
$release = 'October 1st, 2020';

$additionsLink = '<a class="btn btn-primary border" style="border-color: #0c1725 !important;" href="/dev/release/' . $page . '/additions/">Additions</a>';
$updatesLink = '<a class="btn btn-primary border" style="border-color: #0c1725 !important;" href="/dev/release/' . $page . '/updates/">Updates</a>';
$removalsLink = '<a class="btn btn-primary border" style="border-color: #0c1725 !important;" href="/dev/release/' . $page . '/removals/">Removals</a>';
$tipsLink = '<a class="btn btn-primary border" style="border-color: #0c1725 !important;" href="/dev/release/' . $page . '/tips/">Tips</a>';

?>

<div class="card rounded">
    <div class="card-header bg-primary text-white">
        <h5>Community Development Update: <b><?php echo $page; ?></b></h5>
        <h6>Release Date: <b><?php echo $release; ?></b></h6>
    </div>

    <div class="card-body">
        <div style="width:100%;" class="btn-group" role="group">
            <?php
                echo $additionsLink;
                echo $updatesLink;
                echo $removalsLink;
                echo $tipsLink;
            ?>
        </div>
    </div>
    
</div>