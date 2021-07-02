var token = window.localStorage.getItem('auth_token');
var key = window.localStorage.getItem('auth_key');
if(token && key) {
      socket.emit('get.user.info', { token:token, key:key });
      socket.on('recieve.user.info', function(data) {
            if(data) {

                  if(document.getElementById('user.display_name')) {
                        document.getElementById('user.display_name').innerHTML = data.display_name;
                  }
                  if(document.getElementById('change.display.name')) {
                        document.getElementById('change.display.name').innerHTML = `
                              <input id="display.name" name="display.name" type="text" class="appearance-none block w-3/5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="` + data.display_name + `">
                        `;
                  }
                  if(document.getElementById('change.avatar')) {
                        document.getElementById('change.avatar').innerHTML = `
                              <input id="avatar" name="avatar" type="text" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="` + data.avatar + `">
                        `;
                  }
                  if(document.getElementById('user.avatar')) {
                        if(data.avatar) {
                              document.getElementById('user.avatar').innerHTML = `
                                    <img draggable="false" class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src="` + data.avatar + `" alt="">
                              `;
                        } else {
                              document.getElementById('user.avatar').innerHTML = `
                                    <img draggable="false" class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src="/assets/imgs/user.png" alt="">
                              `;
                        }
                  }
                  if(document.getElementById('user.toolbar')) {
                        document.getElementById('user.toolbar').innerHTML = `
                              <a href="/profile/?user=${data.id}" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-md text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Profile</span>
                              </a>
                              <a href="/logout" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-md text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    <span>Logout</span>
                                    <svg class="-mr-1 ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                              </a>
                        `;
                  }


            }
      });

      socket.on('update.user.display_name.recieve', function(data){
            if(data && data.responce == 'success') { window.location.reload() }
      });


      function UpdateDisplayName() {
            var display_name = document.getElementById('display.name');
            if(display_name.value) { socket.emit('update.user.display_name', { token:token, key:key, new:display_name.value }) }
      }
      function UpdateAvatar() {
            var avatar = document.getElementById('avatar');
            if(avatar.value) { socket.emit('update.user.avatar', { token:token, key:key, new:avatar.value }) }
      }
      function GoToProfile() {
            window.location.replace(`/profile/?user=${UserID}`)
      }



} else { window.history.back(); }

