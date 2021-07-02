// CHECK IF USER IS LOGGED IN AND HAS PERMISSION TO BE VIEWING APPLICATIONS
if(token && key && permissions.includes('p_applications_manage')) {

      var current_app_view = '';
      
      ToggleAllApplications()
      // TogglePendingApplications()

      socket.emit('get.apps.all', { token:token, key:key });
      socket.emit('get.apps.pending', { token:token, key:key });
      socket.emit('get.apps.denied', { token:token, key:key });
      socket.emit('get.apps.acepted', { token:token, key:key });
      socket.emit('get.apps.closed', { token:token, key:key });

      socket.on('recieve.apps.all', function(data) {
            if(data) {
                  var data2 = JSON.stringify(data.result);
                  var data3 = JSON.parse(data2);
                  data3.forEach(function(data4) {
                        if(document.getElementById('app.table.all')) {
                              document.getElementById('app.table.all').innerHTML += `
                              <tr class="bg-white">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                          ${data4.id}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.user_name}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.user_email}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.department}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.status}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                          <a href="/app/manage/view?app=${data4.id}" class="text-indigo-600 hover:text-indigo-900">View</a>
                                    </td>
                              </tr>
                              `;
                        }
                  })
            }
      });

      socket.on('recieve.apps.pending', function(data) {
            if(data) {
                  var data2 = JSON.stringify(data.result);
                  var data3 = JSON.parse(data2);
                  data3.forEach(function(data4) {
                        if(document.getElementById('app.table.pending')) {
                              document.getElementById('app.table.pending').innerHTML += `
                              <tr class="bg-white">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                          ${data4.id}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.user_name}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.user_email}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.department}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.status}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                          <a href="/app/manage/view?app=${data4.id}" class="text-indigo-600 hover:text-indigo-900">View</a>
                                    </td>
                              </tr>
                              `;
                        }
                  })
            }
      });

      socket.on('recieve.apps.denied', function(data) {
            if(data) {
                  var data2 = JSON.stringify(data.result);
                  var data3 = JSON.parse(data2);
                  data3.forEach(function(data4) {
                        if(document.getElementById('app.table.denied')) {
                              document.getElementById('app.table.denied').innerHTML += `
                              <tr class="bg-white">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                          ${data4.id}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.user_name}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.user_email}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.department}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.status}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                          <a href="/app/manage/view?app=${data4.id}" class="text-indigo-600 hover:text-indigo-900">View</a>
                                    </td>
                              </tr>
                              `;
                        }
                  })
            }
      });

      socket.on('recieve.apps.accepted', function(data) {
            if(data) {
                  var data2 = JSON.stringify(data.result);
                  var data3 = JSON.parse(data2);
                  data3.forEach(function(data4) {
                        if(document.getElementById('app.table.accepted')) {
                              document.getElementById('app.table.accepted').innerHTML += `
                              <tr class="bg-white">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                          ${data4.id}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.user_name}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.user_email}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.department}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.status}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                          <a href="/app/manage/view?app=${data4.id}" class="text-indigo-600 hover:text-indigo-900">View</a>
                                    </td>
                              </tr>
                              `;
                        }
                  })
            }
      });

      socket.on('recieve.apps.closed', function(data) {
            if(data) {
                  var data2 = JSON.stringify(data.result);
                  var data3 = JSON.parse(data2);
                  data3.forEach(function(data4) {
                        if(document.getElementById('app.table.closed')) {
                              document.getElementById('app.table.closed').innerHTML += `
                              <tr class="bg-white">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                          ${data4.id}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.user_name}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.user_email}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.department}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                          ${data4.status}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                          <a href="/app/manage/view?app=${data4.id}" class="text-indigo-600 hover:text-indigo-900">View</a>
                                    </td>
                              </tr>
                              `;
                        }
                  })
            }
      });











} else { window.location.replace('/') }













// DISPLAY ALL APPLICATIONS IN THE FOLLOWING TABS - PENDING, ACCEPTED, DENIED

// SET UP THE FOLLOWING FUNCTIONS - ACCEPT, DENY, PENDING ADMIN, PENDING RESOURCES COMMAND

