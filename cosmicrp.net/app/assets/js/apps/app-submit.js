
function ProcessApplication() {

    document.getElementById("app.main").classList.add('hidden');
    document.getElementById("app.processing").classList.remove('hidden');

    setTimeout(() => {

        var FirstName = document.getElementById('FirstName').value;
        var LastName = document.getElementById('LastName').value;
        var app01 = document.getElementById('app01').value;
        var app02 = document.getElementById('app02').value;
        var app03 = document.getElementById('app03').value;
        var app04 = document.getElementById('app04').value;
        var Department = document.getElementById('Department').value;
        var app05 = document.getElementById('app05').value;
        var app06 = document.getElementById('app06').value;

        if(FirstName == '' || LastName == '' || app01 == '' || app02 == '' || app03 == '' || app04 == '' || Department == '' || app05 == '' || app06 == ''){
            alert('All fields are required!')
        } else {
            socket.emit('new.application.submitted', {
                token:token,
                key:key,
                status:'Application Submitted',
                department:Department,
                app01:app01,
                app02:app02,
                app03:app03,
                app04:app04,
                app05:app05,
                app06:app06,
            });
            socket.on('new.application.recieved', function(data) {
                if(data) {
                    document.getElementById("app.processing").classList.add('hidden');
                    document.getElementById("app.processed").classList.remove('hidden');

                    setTimeout(() => {
                        window.location.replace('/app/view/?app=' + data.app_id);
                    }, 2000);
                }
            })
            
            
        }



    }, 3000)



}

















