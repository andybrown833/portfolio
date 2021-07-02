$(function () {
        function display(bool) {
            if(bool) {
                $("#mainWindow2").removeClass('hidden');
                $("#deptSelectionDisplay").removeClass('hidden');
                $("#saspSelection").addClass('hidden');
                $("#lspdSelection").addClass('hidden');
                $("#bcsoSelection").addClass('hidden');
                $("#utilitySelection").addClass('hidden');
                $("#vehPresetDisplay").addClass('hidden');
            } else {
                $("#mainWindow2").addClass('hidden');
            }
        }

        display(false)

        window.addEventListener('message', function(event) {
            var item = event.data;
            if (item.type === "ui") {
                if (item.status == true) {
                    display(true)
                } else {
                    display(false)
                }
            }

        })
        
        $("#saspSelect").click(function() {
            $("#saspSelection").removeClass('hidden');
            $("#deptSelectionDisplay").addClass('hidden');
        })
        // $("#lspdSelect").click(function() {
        //     $("#deptSelectionDisplay").addClass('hidden');
        // })
        // $("#bcsoSelect").click(function() {
        //     $("#deptSelectionDisplay").addClass('hidden');
        // })
        // $("#utilitySelect").click(function() {
        //     $("#deptSelectionDisplay").addClass('hidden');
        // })


        $("#deptReturn").click(function() {
            $("#deptSelectionDisplay").removeClass('hidden');
            $("#saspSelection").addClass('hidden');
            $("#lspdSelection").addClass('hidden');
            $("#bcsoSelection").addClass('hidden');
            $("#utilitySelection").addClass('hidden');
            $("#vehPresetDisplay").addClass('hidden');
        })

        $("#saspVehReturn").click(function() {
            $("#saspSelection").removeClass('hidden');
            $("#vehPresetDisplay").addClass('hidden');
        })
        // $("#lspdVehReturn").click(function() {
        //     $("#lspdSelection").removeClass('hidden');
        //     $("#vehPresetDisplay").addClass('hidden');
        // })
        // $("#bcsoVehReturn").click(function() {
        //     $("#bcsoSelection").removeClass('hidden');
        //     $("#vehPresetDisplay").addClass('hidden');
        // })
        // $("#utilityVehReturn").click(function() {
        //     $("#utilitySelection").removeClass('hidden');
        //     $("#vehPresetDisplay").addClass('hidden');
        // })

        let vehicle = '';
        let package = '';
            
        $("#sasp14charg").click(function() {
            vehicle = 'legacycharg2';
            VehicleSelected()
        })
        $("#sasp18charg").click(function() {
            vehicle = 'legacycharg';
            VehicleSelected()
        })
        $("#sasp16exp").click(function() {
            vehicle = 'legacyfpiu';
            VehicleSelected()
        })
        $("#sasp16tau").click(function() {
            vehicle = 'legacyfpis';
            VehicleSelected()
        })
        $("#sasp18tah").click(function() {
            vehicle = 'legacytahoe';
            VehicleSelected()
        })
        $("#sasp18ram").click(function() {
            vehicle = 'legacyram';
            VehicleSelected()
        })
        $("#sasp16cap").click(function() {
            vehicle = 'legacycap';
            VehicleSelected()
        })
        $("#sasp11cvpi").click(function() {
            vehicle = 'legacycvpi';
            VehicleSelected()
        })


        $("#packagePatrol").click(function() {
            package = 'patrol';
            $.post('https://fwFleetManager/spawnVehicle', JSON.stringify({
            veh:vehicle,
            package:package,
            }));
            $.post('https://fwFleetManager/exit', JSON.stringify({}));
            return
        })

        $("#packageSlicktop").click(function() {
            package = 'slicktop';
            $.post('https://fwFleetManager/spawnVehicle', JSON.stringify({
            veh:vehicle,
            package:package,
            }));
            $.post('https://fwFleetManager/exit', JSON.stringify({}));
            return
        })

        $("#packageUnmarked").click(function() {
            package = 'unmarked';
            $.post('https://fwFleetManager/spawnVehicle', JSON.stringify({
            veh:vehicle,
            package:package,
            }));
            $.post('https://fwFleetManager/exit', JSON.stringify({}));
            return
        })


        function VehicleSelected(veh) {
            
            $("#vehPresetDisplay").removeClass('hidden');
            $("#saspSelection").addClass('hidden');
            $("#lspdSelection").addClass('hidden');
            $("#bcsoSelection").addClass('hidden');
            $("#utilitySelection").addClass('hidden');
        }

        $("#closeBtn2").click(function() {
            $.post('https://fwFleetManager/exit', JSON.stringify({}));
            return
        })

});