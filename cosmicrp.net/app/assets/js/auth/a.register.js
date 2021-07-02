// CHECK FOR RETURN URL & COOKIES
let return_url = '/';
var url2 = window.location.href;
if(url2.toLowerCase().includes("?return=")){
	var url3 = url2.split('?return=');
	return_url = url3[1]
}

var token = window.localStorage.getItem('auth_token');
var key = window.localStorage.getItem('auth_key');
if(token && key) { window.location.replace(return_url) }

// REGISTRATION STUFF
var display_name = document.getElementById('display.name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirm_password = document.getElementById('password.confirm');

var err_display_name = document.getElementById('e.display.name');
var err_email = document.getElementById('e.email');
var err_password = document.getElementById('e.password');
var err_confirm_password = document.getElementById('e.password.confirm');

var err_generic = document.getElementById('e.generic');


function Register() {
      if(!display_name.value || !email.value || !password.value || !confirm_password.value) {
            if(!display_name.value || display_name.value == '') {
                  err_display_name.innerHTML = `Include a password.`;
                  display_name.classList.add('border-red-500');
            }
            if(!email.value || email.value == '') {
                  err_email.innerHTML = `Include a valid email address.`;
                  email.classList.add('border-red-500');
            }
            if(!password.value || password.value == '') {
                  err_password.innerHTML = `Include a password.`;
                  password.classList.add('border-red-500');
            }
            if(!confirm_password.value || confirm_password.value == '') {
                  err_confirm_password.innerHTML = `Confirm the password above.`;
                  confirm_password.classList.add('border-red-500');
            }
      } else {
            if(email.value.includes('@')) {
                  if(password.value == confirm_password.value) {
                        let name2 = display_name.value;
                        let email2 = email.value;
                        let password2 = password.value;
                        socket.emit('auth.registration.submit', {
                              name:name2,
                              email:email2,
                              password:sha3_512(password2)
                        });
                  } else {
                        err_confirm_password.innerHTML = `Your passwords must match.`;
                        confirm_password.classList.add('border-red-500');
                        password.classList.add('border-red-500');
                  }
            } else {
                  err_email.innerHTML = `Include a valid email address.`;
                  email.classList.add('border-red-500');
            }
      }
}

socket.on('auth.registration.responce', function(data) {
      console.log(data)
      if(data.responce == 'error') {
            document.getElementById('e.generic').innerHTML = data.message;
            document.getElementById('e.generic').classList.remove('hidden');
      } else if(data.responce == 'success') {
            window.location.replace('/login')
      }
});