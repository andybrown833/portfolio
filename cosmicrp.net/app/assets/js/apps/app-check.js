
window.onload = function() {
      document.getElementById('app.main').classList.add('hidden')
      document.getElementById('app.check').classList.remove('hidden')
}

setTimeout(() => {
      socket.emit('get.user.apps', { token:token, key:key });
      socket.on('recieve.user.apps', function(data) {
            console.log(data)
            console.log(data.result[0].status)
            if(data) {
                  if(data.ammount < 1) {
                        // NO APPS IN SYSTEM - CONTINUE
                        document.getElementById('app.main').classList.remove('hidden')
                        document.getElementById('app.check').classList.add('hidden')
                  } else if(data.ammount > 0) {
                        // HAS APPS
                        console.log('User has app.')
                        if(data.result[0].status == 'Application Denied') {
                              document.getElementById('app.main').classList.remove('hidden')
                              document.getElementById('app.check').classList.add('hidden')
                        } else {
                              window.location.replace('/app/view?app=' + data.result[0].id)
                        }
                  }
            }
      });
}, 3000) // WAIT 2 SECONDS


// CHECK IF USER HAS ANY ACTIVE APPS OR APPS FROM CURRENT CYCLE

// CHECK IF THERE ARE ANY APPS FROM THE USER
// IF THERE ARENT ANY APPS ALLOW THEM TO PROCEED
// IF THERE IS AN ACTIVE APP NOTIFY THEM AND REDIRECT TO ACTIVE APP 
// IF THERE IS AN APP DENIED WITHIN CURRENT CYCLE (LAST 30 DAYS) ALERT AND REDIRECT TO APP ERROR PAGE 

