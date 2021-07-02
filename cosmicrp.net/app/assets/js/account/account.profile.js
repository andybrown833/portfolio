// CHECK IF URL HAS ?user=
var url2 = window.location.href;
if(!url2.toLowerCase().includes("?user=")) { window.location.replace('/') } else {
      
      var url3 = url2.split('?user=');
      if(!url3[1]) { window.location.replace('/') } else {
            // IF USER  IN URL IS NOT CURRENT USER
            socket.emit('get.user.info.public', { userid: url3[1] });
            socket.on('recieve.user.info.public', function(data) {
                  if(data) {
                        if(data.responce == 'success') {
                              if(document.getElementById('user.display_name')) {
                                    document.getElementById('user.display_name').innerHTML = data.display_name;
                              }
                              if(data.avatar) {
                                    document.getElementById('user.avatar').innerHTML = `
                                          <img draggable="false" class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src="` + data.avatar + `" alt="">
                                    `;
                              } else {
                                    document.getElementById('user.avatar').innerHTML = `
                                          <img draggable="false" class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src="/assets/imgs/user.png" alt="">
                                    `;
                              }

                        } else if(data.responce == 'err') {
                              document.getElementById('page.content').classList.add('hidden')
                              document.getElementById('page.content2').classList.remove('hidden')
                        }

                        
                  }
            });

            // USER LOGGED IN & IS VIEWING THEIR PROFILE
            if(token && key) {
                  socket.emit('get.user.info2', { token:token, key:key });
                  socket.on('recieve.user.info2', function(data) {
                        if(data) {
                              if(url3[1] == data.id) {
                                    if(document.getElementById('account.tools')) {
                                          document.getElementById('account.tools').innerHTML = `
                                                <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                                                      <a href="/" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-md text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                            <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                                            </svg>
                                                            <span>Home</span>
                                                      </a>
                                                      <a href="/profile/settings" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-md text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                            <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            </svg>
                                                            <span>Settings</span>
                                                      </a>
                                                      <a href="/logout" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-md text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                            <span>Logout</span>
                                                            <svg class="-mr-1 ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                            </svg>
                                                      </a>
                                                </div>
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

                                    // APPLICATION CENTER
                                    if(document.getElementById('application.center')) {
                                          document.getElementById('application.center').innerHTML = `
                                          <div class="bg-white p-6 rounded-xl shadow-md">
                                                <div class="text-md font-bold text-gray-900">Application Center</div>
                                                <div class="text-sm font-medium text-gray-500">Here you will be able to see your application status and take the next steps if needed.</div>

                                                <div id="user.app.options"></div>

                                          </div>
                                          `;
                                    }

                                    socket.emit('get.user.apps', { token:token, key:key, message:'here' });
                                    socket.on('recieve.user.apps', function(data) {
                                          if(data) {
                                                // console.log(data)
                                                if(data.ammount > 0) {
                                                      if(document.getElementById('user.app.options')) {
                                                            document.getElementById('user.app.options').innerHTML = `
                                                                  <div class="mt-2">
                                                                        <table class="w-full divide-y divide-gray-00 mt-2 rounded-xl">
                                                                              <thead class="bg-gray-300">
                                                                                    <tr>
                                                                                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                                                App ID      
                                                                                          </th>
                                                                                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                                                Date Submitted
                                                                                          </th>
                                                                                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                                                Status
                                                                                          </th>
                                                                                          <th scope="col" class="relative px-6 py-3">
                                                                                                <span class="sr-only">View</span>
                                                                                          </th>
                                                                                    </tr>
                                                                              </thead>
                                                                              <tbody id="user.apps.table"></tbody>
                                                                        </table>
                                                                  </div>
                                                            `;
                                                      }
                                                      var data2 = JSON.stringify(data.result);
                                                      var data3 = JSON.parse(data2);
                                                      data3.forEach(function(data4) {
                                                            // console.log(data4)
                                                            if(document.getElementById('user.apps.table')) {
                                                                  document.getElementById('user.apps.table').innerHTML += `
                                                                  <tr class="bg-white">
                                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                              ${data4.id}
                                                                        </td>
                                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                              ${data4.submitted_date}
                                                                        </td>
                                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                              ${data4.status}
                                                                        </td>
                                                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                              <a tagret = "_BLANK" href="/app/view?app=${data4.id}" class="text-indigo-600 hover:text-indigo-900">View</a>
                                                                        </td>
                                                                  </tr>
                                                                  `;
                                                            }
                                                      })
                                                }

                                                if(data.ammount == 0) {
                                                      if(document.getElementById('user.app.options')) { document.getElementById('user.app.options').innerHTML = `
                                                      <div class="mt-2">
                                                            <div class="text-md text-black font-medium">You have no applications on record.</div>
                                                            <button OnClick="OpenNewApplication()" type="button" class="inline-flex items-center px-3 mt-2 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                                  Open New Application
                                                            </button>
                                                      </div>
                                                      `; }
                                                }
                                          }
                                    });

                                    socket.on('recieve.user.apps', function(data) {
                                          if(data) {
                                                console.log(data)
                                                
                                          }

                                    });
                                    
                                                                        

                              }
                        }
                  });


            }



      }

      // PAGE FUNCTIONS
      function DisplayUserName(DisplayName) {
            if(document.getElementById('user.display_name')) {
                  document.getElementById('user.display_name').innerHTML = DisplayName;
            }
      }

      function OpenNewApplication() { window.location.replace('/app/new') }

}

