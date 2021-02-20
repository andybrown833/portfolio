<?php require_once $_SERVER['DOCUMENT_ROOT'].'/assets/page.php'; ?>
<div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
            
            <div class="row">

                <div class="col-md-1"></div>

                <div class="col-md-10">
                    <?php include $_SERVER['DOCUMENT_ROOT'].'/assets/header.php'; ?>

                    <div class="row">
                        <div class="col-md-3">
                            <?php include $_SERVER['DOCUMENT_ROOT'].'/dev/assets/sidebar.php'; ?>
                        </div>
                        <div class="col-md-9">

                            <?php require_once $_SERVER['DOCUMENT_ROOT'].'/dev/release/0.0.7.0/items/title.php'; ?>

                            <br>

                            <div class="card">

                                <div class="card-header bg-primary"> Additions </div>

                                <div class="card-body">

                                    <div class="accordion" id="accordionExample">

                                        <div class="card" style="border-left-color:green !important; border-left-width:3px !important;">
                                            <div class="card-header" id="headingOne">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#item1" aria-expanded="true" aria-controls="collapseOne">
                                                        <div> 
                                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                            </svg>
                                                            ‏‏‎ ‎‏‏‎ ‎SASP Bike
                                                        </div>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="item1" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div class="card-body">

                                                    <h6>Braden B. 1A-2 was able to aquire and paint a few hundred bikes for SASP. Hope you can enjoy them as much as he did making them.</h6>

                                                    <br>

                                                    <table class="table table-bordered table-md table-hover">

                                                        <thead class="bg-dark">
                                                            <tr>
                                                                <th>Spawn Code</th>
                                                                <th>Vehicle Model</th>
                                                                <th>Notes</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            <tr>
                                                                <td>statebike</td>
                                                                <td>Kawasaki Bike</td>
                                                                <td>Full Package, several extras, 1 skin</td>
                                                            </tr>
                                                        </tbody>

                                                    </table>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div> 
	</div>
</div>

