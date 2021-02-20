<?php 

require_once $_SERVER['DOCUMENT_ROOT'].'/assets/db/cons/getUser.php'; 

?>

<!-- PATROL ACTIVITY LOG SELECTOR -->
<div class="modal fade" id="palSelector" tabindex="-1" role="dialog" aria-labelledby="palSelectorLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            
        <div class="modal-header">
                <h5 class="modal-title" id="palSelectorLabel">Patrol Log Selection</h5>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            
            <div class="modal-body">
                
                <h5 class="text-primary">Department Selection</h5>
                
                <div class="btn-group" role="group">

                    <?php 
                        if(isset($hasLSPD) && $hasLSPD == TRUE) {
                            echo '<button type="button" class="btn btn-outline-primary text-white" data-dismiss="modal" data-toggle="modal" data-target="#lspdPAL">LSPD</button>';
                        }
                        if(isset($hasBCSO) && $hasBCSO == TRUE) {
                            echo '<button type="button" class="btn btn-outline-primary text-white" data-dismiss="modal" data-toggle="modal" data-target="#bcsoPAL">BCSO</button>';
                        }
                        if(isset($hasSASP) && $hasSASP == TRUE) {
                            echo '<button type="button" class="btn btn-outline-primary text-white" data-dismiss="modal" data-toggle="modal" data-target="#saspPAL">SASP</button>';
                        }
                        if(isset($hasSAFD) && $hasSAFD == TRUE) {
                            echo '<button type="button" class="btn btn-outline-primary text-white" data-dismiss="modal" data-toggle="modal" data-target="#safdPAL">FIRE</button>';
                        }
                        if(isset($hasCOMMS) && $hasCOMMS == TRUE) {
                            echo '<button type="button" class="btn btn-outline-primary text-white" data-dismiss="modal" data-toggle="modal" data-target="#commsPAL">COMMS</button>';
                        }
                        if(isset($hasCIV) && $hasCIV == TRUE) {
                            echo '<button type="button" class="btn btn-outline-primary text-white" data-dismiss="modal" data-toggle="modal" data-target="#civPAL">CIVILIAN</button>';
                        }
                        if(!isset($hasLSPD) && !isset($hasBCSO) && !isset($hasSASP) && !isset($hasSAFD) && !isset($hasCOMMS) && !isset($hasCIV)) {
                            echo 'YOU ARE NOT IN ANY DEPARTMENT';
                        }
                    ?>

                </div>
                
                <br>


            </div>

        </div>

    </div>
</div>

<!-- Los Santos Police Department -->
<div class="modal fade" id="lspdPAL" tabindex="-1" role="dialog" aria-labelledby="lspdPALLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title" id="lspdPALLabel">Los Santos Police Department</h5>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#palSelector">Back</button>
                
            </div>
        
            <div class="modal-body">

                <div class="row">
                    <div class="col-md-4">
                        <img src="/assets/imgs/depts/lspd.png" style="width:75%;" class="">
                    </div>
                    <div class="col-md-8">
                        <h6 for="duration">Member Informaiton</h6>
                        <p>
                            <b>Name:</b> <span class="text-primary"><?php echo $userDisplayName; ?></span>
                            <br>
                            <b>Web ID:</b> <span class="text-primary"><?php echo $userID; ?></span>
                            <br>
                            <b>Email:</b> <span class="text-primary"><?php echo $userEmail; ?></span>
                        </p>
                    </div>
                </div>

                <br>
                
                <form action="/assets/scripts/pals/palLSPD.php" method="post">

                    <div class="form-row">
                        <div class="col">
                            <label for="startDate">Start Date</label>
                            <input type="date" class="form-control" id="startDate" name="startDate" required />
                        </div>
                        <div class="col">
                            <label for="startTime">Start Time</label>
                            <input type="time" class="form-control" id="startTime" name="startTime" required />
                        </div>
                    </div>

                    <br>

                    <div class="form-row">
                        <div class="col">
                            <label for="endDate">End Date</label>
                            <input type="date" class="form-control" id="endDate" name="endDate" required />
                        </div>
                        <div class="col">
                            <label for="endTime">End Time</label>
                            <input type="time" class="form-control" id="endTime" name="endTime" required />
                        </div>
                    </div>

                    <br>

                    <div>
                        <label for="notes">Additional Notes</label>
                        <textarea type="textarea" class="form-control" id="notes" name="notes"></textarea>
                    </div>

                

                <br><br>
        
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel / Close</button>
                <button type="submit" class="btn btn-success text-white">Submit</button>
            </div>
            
            </form>

        </div>
    </div>
</div>

<!-- Blaine County Sheriff's Office -->
<div class="modal fade" id="bcsoPAL" tabindex="-1" role="dialog" aria-labelledby="bcsoPALLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title" id="bcsoPALLabel">Blaine County Sheriff's Office</h5>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#palSelector">Back</button>
                
            </div>
        
            <div class="modal-body">

                <div class="row">
                    <div class="col-md-4">
                        <img src="/assets/imgs/depts/bcso.png" style="width:75%;" class="">
                    </div>
                    <div class="col-md-8">
                        <h6 for="duration">Member Informaiton</h6>
                        <p>
                            <b>Name:</b> <span class="text-primary"><?php echo $userDisplayName; ?></span>
                            <br>
                            <b>Web ID:</b> <span class="text-primary"><?php echo $userID; ?></span>
                            <br>
                            <b>Email:</b> <span class="text-primary"><?php echo $userEmail; ?></span>
                        </p>
                    </div>
                </div>

                <br>
                
                <form action="/assets/scripts/pals/palBCSO.php" method="post">

                    <div class="form-row">
                        <div class="col">
                            <label for="startDate">Start Date</label>
                            <input type="date" class="form-control" id="startDate" name="startDate">
                        </div>
                        <div class="col">
                            <label for="startTime">Start Time</label>
                            <input type="time" class="form-control" id="startTime" name="startTime">
                        </div>
                    </div>

                    <br>

                    <div class="form-row">
                        <div class="col">
                            <label for="endDate">End Date</label>
                            <input type="date" class="form-control" id="endDate" name="endDate">
                        </div>
                        <div class="col">
                            <label for="endTime">End Time</label>
                            <input type="time" class="form-control" id="endTime" name="endTime">
                        </div>
                    </div>

                    <br>

                    <div>
                        <label for="duration">Duration</label>
                        <h5 class="text-primary">2 Hours 30 Minutes</h5>
                    </div>

                    <br>

                    <div>
                        <label for="notes">Additional Notes</label>
                        <textarea type="textarea" class="form-control" id="notes" name="notes"></textarea>
                    </div>

                </form>

                <br><br>
        
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel / Close</button>
                <button type="button" class="btn btn-success text-white" data-dismiss="modal">Submit</button>
            </div>

        </div>
    </div>
</div>

<!-- San Andreas State Police -->
<div class="modal fade" id="saspPAL" tabindex="-1" role="dialog" aria-labelledby="saspPALLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title" id="saspPALLabel">San Andreas State Police</h5>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#palSelector">Back</button>
                
            </div>
        
            <div class="modal-body">

                <div class="row">
                    <div class="col-md-4">
                        <img src="/assets/imgs/depts/sasp.png" style="width:75%;" class="">
                    </div>
                    <div class="col-md-8">
                        <h6 for="duration">Member Informaiton</h6>
                        <p>
                            <b>Name:</b> <span class="text-primary"><?php echo $userDisplayName; ?></span>
                            <br>
                            <b>Web ID:</b> <span class="text-primary"><?php echo $userID; ?></span>
                            <br>
                            <b>Email:</b> <span class="text-primary"><?php echo $userEmail; ?></span>
                        </p>
                    </div>
                </div>

                <br>
                
                <form action="/assets/scripts/pals/palSASP.php" method="post">

                    <div class="form-row">
                        <div class="col">
                            <label for="startDate">Start Date</label>
                            <input type="date" class="form-control" id="startDate" name="startDate">
                        </div>
                        <div class="col">
                            <label for="startTime">Start Time</label>
                            <input type="time" class="form-control" id="startTime" name="startTime">
                        </div>
                    </div>

                    <br>

                    <div class="form-row">
                        <div class="col">
                            <label for="endDate">End Date</label>
                            <input type="date" class="form-control" id="endDate" name="endDate">
                        </div>
                        <div class="col">
                            <label for="endTime">End Time</label>
                            <input type="time" class="form-control" id="endTime" name="endTime">
                        </div>
                    </div>

                    <br>

                    <div>
                        <label for="duration">Duration</label>
                        <h5 class="text-primary">2 Hours 30 Minutes</h5>
                    </div>

                    <br>

                    <div>
                        <label for="notes">Additional Notes</label>
                        <textarea type="textarea" class="form-control" id="notes" name="notes"></textarea>
                    </div>

                </form>

                <br><br>
        
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel / Close</button>
                <button type="button" class="btn btn-success text-white" data-dismiss="modal">Submit</button>
            </div>

        </div>
    </div>
</div>

<!-- San Andreas Fire Department -->
<div class="modal fade" id="safdPAL" tabindex="-1" role="dialog" aria-labelledby="safdPALLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title" id="safdPALLabel">San Andreas Fire Department</h5>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#palSelector">Back</button>
                
            </div>
        
            <div class="modal-body">

                <div class="row">
                    <div class="col-md-4">
                        <img src="/assets/imgs/depts/fire.png" style="width:75%;" class="">
                    </div>
                    <div class="col-md-8">
                        <h6 for="duration">Member Informaiton</h6>
                        <p>
                            <b>Name:</b> <span class="text-primary"><?php echo $userDisplayName; ?></span>
                            <br>
                            <b>Web ID:</b> <span class="text-primary"><?php echo $userID; ?></span>
                            <br>
                            <b>Email:</b> <span class="text-primary"><?php echo $userEmail; ?></span>
                        </p>
                    </div>
                </div>

                <br>
                
                <form action="/assets/scripts/pals/palSAFD.php" method="post">

                    <div class="form-row">
                        <div class="col">
                            <label for="startDate">Start Date</label>
                            <input type="date" class="form-control" id="startDate" name="startDate">
                        </div>
                        <div class="col">
                            <label for="startTime">Start Time</label>
                            <input type="time" class="form-control" id="startTime" name="startTime">
                        </div>
                    </div>

                    <br>

                    <div class="form-row">
                        <div class="col">
                            <label for="endDate">End Date</label>
                            <input type="date" class="form-control" id="endDate" name="endDate">
                        </div>
                        <div class="col">
                            <label for="endTime">End Time</label>
                            <input type="time" class="form-control" id="endTime" name="endTime">
                        </div>
                    </div>

                    <br>

                    <div>
                        <label for="duration">Duration</label>
                        <h5 class="text-primary">2 Hours 30 Minutes</h5>
                    </div>

                    <br>

                    <div>
                        <label for="notes">Additional Notes</label>
                        <textarea type="textarea" class="form-control" id="notes" name="notes"></textarea>
                    </div>

                </form>

                <br><br>
        
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel / Close</button>
                <button type="button" class="btn btn-success text-white" data-dismiss="modal">Submit</button>
            </div>

        </div>
    </div>
</div>

<!-- Communications Department -->
<div class="modal fade" id="safdPAL" tabindex="-1" role="dialog" aria-labelledby="safdPALLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title" id="safdPALLabel">Communications Department</h5>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#palSelector">Back</button>
                
            </div>
        
            <div class="modal-body">

                <div class="row">
                    <div class="col-md-4">
                        <img src="/assets/imgs/depts/comms.png" style="width:75%;" class="">
                    </div>
                    <div class="col-md-8">
                        <h6 for="duration">Member Informaiton</h6>
                        <p>
                            <b>Name:</b> <span class="text-primary"><?php echo $userDisplayName; ?></span>
                            <br>
                            <b>Web ID:</b> <span class="text-primary"><?php echo $userID; ?></span>
                            <br>
                            <b>Email:</b> <span class="text-primary"><?php echo $userEmail; ?></span>
                        </p>
                    </div>
                </div>

                <br>
                
                <form action="/assets/scripts/pals/palCOMMS.php" method="post">

                    <div class="form-row">
                        <div class="col">
                            <label for="startDate">Start Date</label>
                            <input type="date" class="form-control" id="startDate" name="startDate">
                        </div>
                        <div class="col">
                            <label for="startTime">Start Time</label>
                            <input type="time" class="form-control" id="startTime" name="startTime">
                        </div>
                    </div>

                    <br>

                    <div class="form-row">
                        <div class="col">
                            <label for="endDate">End Date</label>
                            <input type="date" class="form-control" id="endDate" name="endDate">
                        </div>
                        <div class="col">
                            <label for="endTime">End Time</label>
                            <input type="time" class="form-control" id="endTime" name="endTime">
                        </div>
                    </div>

                    <br>

                    <div>
                        <label for="duration">Duration</label>
                        <h5 class="text-primary">2 Hours 30 Minutes</h5>
                    </div>

                    <br>

                    <div>
                        <label for="notes">Additional Notes</label>
                        <textarea type="textarea" class="form-control" id="notes" name="notes"></textarea>
                    </div>

                </form>

                <br><br>
        
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel / Close</button>
                <button type="button" class="btn btn-success text-white" data-dismiss="modal">Submit</button>
            </div>

        </div>
    </div>
</div>

<!-- Civilian Operations -->
<div class="modal fade" id="civPAL" tabindex="-1" role="dialog" aria-labelledby="civPALLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title" id="civPALLabel">Civilian Operations</h5>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#palSelector">Back</button>
                
            </div>
        
            <div class="modal-body">

                <div class="row">
                    <div class="col-md-4">
                        <img src="/assets/imgs/depts/civ.png" style="width:75%;" class="">
                    </div>
                    <div class="col-md-8">
                        <h6 for="duration">Member Informaiton</h6>
                        <p>
                            <b>Name:</b> <span class="text-primary"><?php echo $userDisplayName; ?></span>
                            <br>
                            <b>Web ID:</b> <span class="text-primary"><?php echo $userID; ?></span>
                            <br>
                            <b>Email:</b> <span class="text-primary"><?php echo $userEmail; ?></span>
                        </p>
                    </div>
                </div>

                <br>
                
                <form action="/assets/scripts/pals/palCIV.php" method="post">

                    <div class="form-row">
                        <div class="col">
                            <label for="startDate">Start Date</label>
                            <input type="date" class="form-control" id="startDate" name="startDate">
                        </div>
                        <div class="col">
                            <label for="duration">Duration</label>
                            <input type="text" class="form-control" id="duration" name="duration">
                        </div>
                    </div>

                    <br>

                    <div>
                        <label for="notes">Areas of Patrol</label>
                        <select name="" id="" class="form-control">
                            <option value=""></option>
                            <option value="">Chumash - West Coast</option>
                            <option value="">Downtown & Southern Los Santos</option>
                            <option value="">Del Perro - Vespucci - Rockford - Little Seoul</option>
                            <option value="">Senora - Harmony - Great Chaparrel</option>
                            <option value="">Port of Los Santos - La Puerta</option>
                            <option value="">Grapeseed - San Chianski mountain range & Gordo - Paleto Bay</option>
                            <option value="">The Town of Sandy Shores</option>

                        </select>
                    </div>

                    <br>

                    <div>
                        <label for="notes">Additional Notes</label>
                        <textarea type="textarea" class="form-control" id="notes" name="notes"></textarea>
                    </div>

                </form>

                <br><br>
        
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel / Close</button>
                <button type="button" class="btn btn-success text-white" data-dismiss="modal">Submit</button>
            </div>

        </div>
    </div>
</div>

<!-- PAL SUBMITTED -->
