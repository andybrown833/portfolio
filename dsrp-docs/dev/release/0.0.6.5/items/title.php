<?php
$thisPage = '0.0.6.5';
$release = 'September 26th, 2020';

$additionsLink = '<a class="btn btn-primary border" style="border-color: #0c1725 !important;" href="/dev/release/' . $thisPage . '/additions/">Additions</a>';
$updatesLink = '<a class="btn btn-primary border" style="border-color: #0c1725 !important;" href="/dev/release/' . $thisPage . '/updates/">Updates</a>';
$removalsLink = '<a class="btn btn-primary border" style="border-color: #0c1725 !important;" href="/dev/release/' . $thisPage . '/removals/">Removals</a>';
$tipsLink = '<a class="btn btn-primary border" style="border-color: #0c1725 !important;" href="/dev/release/' . $thisPage . '/tips/">Tips</a>';

?>

<div class="card rounded">
    <div class="card-header bg-primary text-white">
        <h5>Community Development Update: <b><?php echo $thisPage; ?></b></h5>
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