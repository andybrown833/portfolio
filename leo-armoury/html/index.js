$(function () {
        function display(bool) {
            if(bool) {
                $("#mainWindow").removeClass('hidden');
            } else {
                $("#mainWindow").addClass('hidden');
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

        $("#flashlight").click(function () {
            var weapon = "flashlight";
            if($("#flashlight").hasClass('weapon-selected')) {
                $("#flashlight").removeClass('weapon-selected');
                $.post('https://fwArmoury/removeWeapon', JSON.stringify({ weapon:weapon }));
            } else {
                $("#flashlight").addClass('weapon-selected');
                $.post('https://fwArmoury/addWeapon', JSON.stringify({ weapon:weapon }));
            }
        })
        $("#9mm").click(function () {
            var weapon = "9mm";
            if($("#9mm").hasClass('weapon-selected')) {
                $("#9mm").removeClass('weapon-selected');
                $("#glock").removeClass('hidden');
                $.post('https://fwArmoury/removeWeapon', JSON.stringify({ weapon:weapon }));
            } else {
                $("#9mm").addClass('weapon-selected');
                $("#glock").addClass('hidden');
                $.post('https://fwArmoury/addWeapon', JSON.stringify({ weapon:weapon }));
            }
        })
        $("#glock").click(function () {
            var weapon = "glock";
            if($("#glock").hasClass('weapon-selected')) {
                $("#glock").removeClass('weapon-selected');
                $("#9mm").removeClass('hidden');
                $.post('https://fwArmoury/removeWeapon', JSON.stringify({ weapon:weapon }));
            } else {
                $("#glock").addClass('weapon-selected');
                $("#9mm").addClass('hidden');
                $.post('https://fwArmoury/addWeapon', JSON.stringify({ weapon:weapon }));
            }
        })
        $("#knife").click(function () {
            var weapon = "knife";
            if($("#knife").hasClass('weapon-selected')) {
                $("#knife").removeClass('weapon-selected');
                $.post('https://fwArmoury/removeWeapon', JSON.stringify({ weapon:weapon }));
            } else {
                $("#knife").addClass('weapon-selected');
                $.post('https://fwArmoury/addWeapon', JSON.stringify({ weapon:weapon }));
            }
        })
        $("#nightstick").click(function () {
            var weapon = "nightstick";
            if($("#nightstick").hasClass('weapon-selected')) {
                $("#nightstick").removeClass('weapon-selected');
                $.post('https://fwArmoury/removeWeapon', JSON.stringify({ weapon:weapon }));
            } else {
                $("#nightstick").addClass('weapon-selected');
                $.post('https://fwArmoury/addWeapon', JSON.stringify({ weapon:weapon }));
            }
        })
        $("#tazer").click(function () {
            var weapon = "tazer";
            if($("#tazer").hasClass('weapon-selected')) {
                $("#tazer").removeClass('weapon-selected');
                $.post('https://fwArmoury/removeWeapon', JSON.stringify({ weapon:weapon }));
            } else {
                $("#tazer").addClass('weapon-selected');
                $.post('https://fwArmoury/addWeapon', JSON.stringify({ weapon:weapon }));
            }
        })

        $("#backBtn-home").click(function () {
            $("#deptselect").show();
            $("#divisionselect-lspd").hide();
            $("#divisionselect-bcso").hide();
            $("#divisionselect-sasp").hide();
        })

        $("#backBtn-home2").click(function () {
            $("#deptselect").show();
            $("#divisionselect-lspd").hide();
            $("#divisionselect-bcso").hide();
            $("#divisionselect-sasp").hide();
        })

        $("#backBtn-home3").click(function () {
            $("#deptselect").show();
            $("#divisionselect-lspd").hide();
            $("#divisionselect-bcso").hide();
            $("#divisionselect-sasp").hide();
        })

        $("#dept-select-lspd").click(function () {
            $("#deptselect").hide();
            $("#divisionselect-lspd").show();
        })

        $("#dept-select-bcso").click(function () {
            $("#deptselect").hide();
            $("#divisionselect-bcso").show();
        })

        $("#dept-select-sasp").click(function () {
            $("#deptselect").hide();
            $("#divisionselect-sasp").show();
        })
        
        $("#closeBtn").click(function () {
            $.post('https://fwArmoury/exit', JSON.stringify({}));
            return
        })

});