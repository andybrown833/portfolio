let return_url = '/'
var url2 = window.location.href;
if(url2.toLowerCase().includes("?return=")){
	var url3 = url2.split('?return=');
	return_url = url3[1]
}

var token = window.localStorage.getItem('auth_token');
var key = window.localStorage.getItem('auth_key');
if(token && key) { window.location.replace(return_url) }

var email = document.getElementById('email');
var password = document.getElementById('password');

var err_email = document.getElementById('e.email');
var err_password = document.getElementById('e.password');
var err_generic = document.getElementById('e.generic');


function Login() {
      if(!email.value || !password.value) {
            if(!email.value) {
                  document.getElementById('e.email').innerHTML = `Include an email.`;
                  document.getElementById('email').classList.add('border-red-500');
            }
            if(!password.value) {
                  document.getElementById('e.password').innerHTML = `Include a password.`;
                  document.getElementById('password').classList.add('border-red-500');
            }
      } else {
            if(email.value.includes('@')) {
                  let email2 = document.getElementById('email').value;
                  let password2 = sha3_512(document.getElementById('password').value);
                  socket.emit('auth.login.submit', { email:email2, pass:password2 });
            };
      }
}

socket.on('auth.login.responce', function(data) {
      if(data.response == 'error') {
            document.getElementById('e.generic').innerHTML = data.message;
            document.getElementById('e.generic').classList.remove('hidden');
      }
      if(data.response == 'success') {
            document.getElementById('e.generic').innerHTML = `SUCCESS!`;
            document.getElementById('e.generic').classList.remove('hidden');

            window.localStorage.setItem('auth_token', data.token)
            window.localStorage.setItem('auth_key', data.key)
            let permissions = JSON.stringify(data.permissions);
		permissions = JSON.parse(permissions);
		var fullperms = [];
		permissions.forEach(function(data4) { fullperms.push(data4.permission) });
		window.localStorage.setItem('perm_groups', fullperms);
            window.location.replace('/')
      }
});
