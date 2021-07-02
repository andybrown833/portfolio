// CHECK FOR RETURN URL
let return_url = '/'
var url2 = window.location.href;
if(url2.toLowerCase().includes("?return=")){
	var url3 = url2.split('?return=');
      return_url = url3[1];
}

// CHECK FOR TOKEN && KEY

function Check() {
      var token = window.localStorage.getItem('auth_token');
      var key = window.localStorage.getItem('auth_key');
      if(!token || !key) { window.location.replace(return_url) };

}

setTimeout(function() {
      Check()
}, 5000);




