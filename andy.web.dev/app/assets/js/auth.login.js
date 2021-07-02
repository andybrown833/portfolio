// CHECK IF USER IS LOGGED IN
function checkToken(){
      let return_url = '/member'
      var url2 = window.location.href;
      if(url2.toLowerCase().includes("?return=")){
            var url3 = url2.split('?return=');
            return_url = url3[1]
      }
	var token = window.localStorage.getItem('auth_token');
	var key = window.localStorage.getItem('auth_key');
	if(token && key){
		window.location.replace(return_url);
	}
}

checkToken();

var login_alert_content_a = `
<div class="bg-yellow-100 border-l-4 border-yellow-400 p-4 mt-4 mx-auto w-4/5 rounded-xl">
      <div class="flex">
            <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
            </div>
            <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                        You need to fill out all fields!
                  </p>
            </div>
      </div>
</div>
`;
var login_alert_content_b = `
<div class="bg-yellow-100 border-l-4 border-yellow-400 p-4 mt-4 mx-auto w-4/5 rounded-xl">
      <div class="flex">
            <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
            </div>
            <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                        You need to include an email in the proper format.
                  </p>
            </div>
      </div>
</div>
`;
var login_success = `
<div class="bg-blue-100 border-l-4 border-blue-400 p-4 mt-8 mx-auto w-4/5 rounded-xl">
      <div class="flex">
            <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
            </div>
            <div class="ml-3">
                  <p class="text-sm text-blue-700">
                        Login successful.
                  </p>
            </div>
      </div>
</div>
`;


// IF NOT LOGGED IN CONTINUE AND WAIT FOR BUTTON PUSH
function login() {
      // FORM INPUTS
      var email_input = document.getElementById("email").value;
      var password_input = document.getElementById("password").value;

	document.getElementById('login_alert').innerHTML = '';
	// document.getElementById("signin-password").value = '';

	if(email_input == '' || password_input == '') {
		document.getElementById('login_alert').innerHTML = `${login_alert_content_a}`;
	} else {
		if(email_input.includes('@')) {
			var email = email_input.toLowerCase();
			socket.emit('auth.login', {
				email: email,
				pass: sha3_512(password_input)
			});
		} else {
			document.getElementById('login_alert').innerHTML = `${login_alert_content_b}`;
		}
	}
}

socket.on('auth.login.responce', function(data){
      
      console.log(data)
	if(data.response == 'success'){
            document.getElementById('login.hide').innerHTML = ``;
            document.getElementById('login.hide2').innerHTML = ``;
            document.getElementById('login.hide3').innerHTML = ``;
            document.getElementById('login.hide4').innerHTML = ``;
            document.getElementById('login_alert').innerHTML = `${login_success}`;
            setTimeout(function() { 
                  window.localStorage.setItem('auth_token', data.token);
                  window.localStorage.setItem('auth_key', data.secretkey);
                  let permissions = JSON.stringify(data.permissions);
                  permissions = JSON.parse(permissions);
                  var fullperms = [];
                  permissions.forEach(function(data4){
                        fullperms.push(data4.p_name)
                  });
                  window.localStorage.setItem('perm_groups', fullperms);
                  checkToken();
            }, 2000);
	}
	if(data.response == 'error') {

            
            var login_alert_content_c = `
            <div class="bg-yellow-100 border-l-4 border-yellow-400 p-4 mt-4 mx-auto w-4/5 rounded-xl">
                  <div class="flex">
                        <div class="flex-shrink-0">
                              <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                              </svg>
                        </div>
                        <div class="ml-3">
                              <p class="text-sm text-yellow-700">
                                    ${data.message}
                              </p>
                        </div>
                  </div>
            </div>
            `;

		document.getElementById('login_alert').innerHTML = `${login_alert_content_c}`;
		
	}
});