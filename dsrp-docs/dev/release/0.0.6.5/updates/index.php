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

                                <div class="card-header bg-primary"> Updates </div>

                                <div class="card-body">

                                    <div class="accordion" id="accordionExample">

                                        <div class="card" style="border-left-color:orange !important; border-left-width:3px !important;">
                                            <div class="card-header" id="headingOne">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#item1" aria-expanded="true" aria-controls="collapseOne">
                                                        <div> 
                                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                            </svg>
                                                            ‏‏‎ ‎‏‏‎ vMenu Permissions
                                                        </div>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="item1" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div class="card-body">

                                                    <h6>Added new Staff and Administration members to their respective permission groups.</h6>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <br>

                                    <div class="accordion" id="accordionExample">

                                        <div class="card" style="border-left-color:orange !important; border-left-width:3px !important;">
                                            <div class="card-header" id="headingOne">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#item2" aria-expanded="true" aria-controls="collapseOne">
                                                        <div> 
                                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                            </svg>
                                                            ‏‏‎ ‎‏‏‎ dsrp.online Updates
                                                        </div>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="item2" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div class="card-body">

                                                    <p>‎‏‏‎
                                                        <span>
                                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
                                                            </svg> ‎‏‏‎ ‎Updated UI
                                                        </span> 
                                                    </p>
                                                    <p>‎‏‏‎
                                                        <span>
                                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
                                                            </svg> ‎‏‏‎ Updated Admin Panel UI
                                                        </span> 

                                                        <br> ‎‎‏‏‎ ‎‎‏‏‎  ‎‎‏‏‎ ‎‎‏‏‎ ‎‎‏‏‎  ‎‎‏‏‎ ‎‎‏‏‎  ‎‎‏‏‎ ‎‎‏‏‎ ‎‎‏‏‎  ‎‎‏‏‎ ‎‎‏‏‎  - Added Admin Panel Whitelist Options
                                                    </p>
                                                    <p>‎‏‏‎
                                                        <span>
                                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
                                                            </svg> ‎‏‏‎ ‎Updated backend scripts and connections.
                                                        </span> 
                                                    </p>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <br>

                                    <div class="accordion" id="accordionExample">

                                        <div class="card" style="border-left-color:orange !important; border-left-width:3px !important;">
                                            <div class="card-header" id="headingOne">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#item3" aria-expanded="true" aria-controls="collapseOne">
                                                        <div> 
                                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                            </svg>
                                                            ‏‏‎ ‎‏‏‎ BCSO Vehicle Package
                                                        </div>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="item3" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div class="card-body">

                                                    <h6>We updated the BCSO Vehicle Package to allow all vehicles to be utilized. Not every vehicle is 100% complete. There are a few liveries that are incomplete.</h6>

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

