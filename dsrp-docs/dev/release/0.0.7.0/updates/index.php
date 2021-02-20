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
                                                            ‏‏‎ ‎‏‏‎  Cleaned Up Server Whitelist
                                                        </div>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="item1" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div class="card-body">

                                                    We went throught the whitelist script and cleaned up the code.
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <br>

                                    <div class="accordion" id="accordionExample2">

                                        <div class="card" style="border-left-color:#fd7e14 !important; border-left-width:3px !important;">
                                            <div class="card-header" id="headingTwo">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#item2" aria-expanded="true" aria-controls="collapseTwo">
                                                        <div> 
                                                            <svg width="1.0625em" height="1em" viewBox="0 0 17 16" class="bi bi-exclamation-triangle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                                                            </svg>
                                                            ‏‏‎ ‎‏‏‎  CarHUD
                                                        </div>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="item2" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample2">
                                                <div class="card-body">

                                                    The heads up display above the minimap for vehicle indicators has not been updated to better show vehicle failure with the engine.
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <br>

                                    <div class="accordion" id="accordionExample3">

                                        <div class="card" style="border-left-color:#fd7e14 !important; border-left-width:3px !important;">
                                            <div class="card-header" id="headingThree">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#item3" aria-expanded="true" aria-controls="collapseThree">
                                                        <div> 
                                                            <svg width="1.0625em" height="1em" viewBox="0 0 17 16" class="bi bi-exclamation-triangle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                                                            </svg>
                                                            ‏‏‎ ‎‏‏‎  Moved Ragdoll
                                                        </div>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="item3" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample3">
                                                <div class="card-body">

                                                    We moved our ragdoll script from its dsrpRagdoll folder to the dsrpFunctions folder.
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <br>

                                    <div class="accordion" id="accordionExample4">

                                        <div class="card" style="border-left-color:#fd7e14 !important; border-left-width:3px !important;">
                                            <div class="card-header" id="headingThree">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#item4" aria-expanded="true" aria-controls="collapseThree">
                                                        <div> 
                                                            <svg width="1.0625em" height="1em" viewBox="0 0 17 16" class="bi bi-exclamation-triangle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                                                            </svg>
                                                            ‏‏‎ ‎‏‏‎  Updated LSPD Vehicle Package
                                                        </div>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="item4" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample4">
                                                <div class="card-body">

                                                    We updated the cars listed below.
                                                    
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
                                                                <td>pd3</td>
                                                                <td>2010 Dodge Charger</td>
                                                                <td>This was the 2014 Dodge Charger</td>
                                                            </tr>  
                                                            <tr>
                                                                <td>pd4</td>
                                                                <td>2016 Ford Explorer</td>
                                                                <td>Now Unlocked</td>
                                                            </tr>  
                                                            <tr>
                                                                <td>pd5</td>
                                                                <td>2020 Ford Explorer</td>
                                                                <td>Now Unlocked</td>
                                                            </tr>  
                                                            <tr>
                                                                <td>pd6</td>
                                                                <td>2018 Chevy Tahoe</td>
                                                                <td>Still locked due to the paint job not being correct.</td>
                                                            </tr>
                                                        </tbody>

                                                    </table>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <br>

                                    <div class="accordion" id="accordionExample5">

                                        <div class="card" style="border-left-color:#fd7e14 !important; border-left-width:3px !important;">
                                            <div class="card-header" id="headingThree">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#item5" aria-expanded="true" aria-controls="collapseThree">
                                                        <div> 
                                                            <svg width="1.0625em" height="1em" viewBox="0 0 17 16" class="bi bi-exclamation-triangle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                                                            </svg>
                                                            ‏‏‎ ‎‏‏‎  Updated Loading Screen
                                                        </div>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="item5" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample5">
                                                <div class="card-body">

                                                    We moved away from having several different pages for the loading screen. There is now one page for all servers.
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <br>

                                    <div class="accordion" id="accordionExample6">

                                        <div class="card" style="border-left-color:#fd7e14 !important; border-left-width:3px !important;">
                                            <div class="card-header" id="headingThree">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#item6" aria-expanded="true" aria-controls="collapseThree">
                                                        <div> 
                                                            <svg width="1.0625em" height="1em" viewBox="0 0 17 16" class="bi bi-exclamation-triangle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                                                            </svg>
                                                            ‏‏‎ ‎‏‏‎  Updated Remove Cops
                                                        </div>
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="item6" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample6">
                                                <div class="card-body">

                                                    We were finally able to speak with local officials about their unneeded responce to scenes that we needed to control. Moral of the story is that local resources should be bothering us anymore.
                                                    
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

