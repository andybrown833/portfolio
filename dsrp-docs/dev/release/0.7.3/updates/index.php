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

                            <?php require_once $_SERVER['DOCUMENT_ROOT'].'/dev/release/0.7.3/items/title.php'; ?>

                            <br>

                            <div class="card">

                                <div class="card-header bg-primary"> Updates </div>

                                <div class="card-body">

                                    <div class="accordion" id="accordionExample">

                                        <div class="card" style="border-left-color:#fd7e14 !important; border-left-width:3px !important;">
                                            <div class="card-header" id="headingOne">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#item1" aria-expanded="true" aria-controls="collapseOne">
                                                        <div> 
                                                            <svg width="1.0625em" height="1em" viewBox="0 0 17 16" class="bi bi-exclamation-triangle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                                                            </svg>
                                                            ‏‏‎ ‎‏‏‎  Overhaul to the M Menu
                                                        </div>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="item1" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div class="card-body">

                                                    With tremendous help from Niall M. Civ-3 we were able to completely re-do the interation menu.
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <br>

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

