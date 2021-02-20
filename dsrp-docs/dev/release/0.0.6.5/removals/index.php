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

                            <?php require_once $_SERVER['DOCUMENT_ROOT'].'/dev/release/0.0.6.5/items/title.php'; ?>

                            <br>

                            <div class="card">

                                <div class="card-header bg-primary"> Removals </div>

                                <div class="card-body">

                                    <br>

                                    <div class="accordion" id="accordionExample">

                                        <div class="card" style="border-left-color:red !important; border-left-width:3px !important;">
                                            <div class="card-header" id="headingOne">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-left text-danger" type="button" data-toggle="collapse" data-target="#item1" aria-expanded="true" aria-controls="collapseOne">
                                                        <div> 
                                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-minus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
                                                                <path fill-rule="evenodd" d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                                                            </svg>
                                                            ‏‏‎ ‎‏‏‎ Discord Whitelist
                                                        </div>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="item1" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div class="card-body">

                                                    <h6>With the addition of the Website Integration, we have removed the Discord Whitelist Connection.</h6>

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

