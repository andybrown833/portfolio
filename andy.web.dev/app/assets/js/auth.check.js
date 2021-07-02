// CHECK FOR AUTH
// IF NOT AUTH - DIRECT TO LOGIN
// IF AUTH - DIRECT TO REDIRECT IF IN URL OR MAIN PAGE

var url = window.location;
function checkToken(){
	var token = window.localStorage.getItem('auth_token');
	var key = window.localStorage.getItem('auth_key');
	if(!token && !key){
		window.location.replace(`/login?return=${url}`);
	}
}

function checkToken2(){
	var token = window.localStorage.getItem('auth_token');
	var key = window.localStorage.getItem('auth_key');
	socket.emit('auth.check', {
		token:token,
		secretkey:key
	});
}

checkToken();
checkToken2();

window.setInterval(function(){ checkToken2(); }, 10000);

socket.on('auth.check.logout', function(data){
	window.location.replace("/logout");
});