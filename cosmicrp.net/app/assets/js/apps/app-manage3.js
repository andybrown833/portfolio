// CHECK IF USER IS LOGGED IN AND HAS PERMISSION TO BE VIEWING APPLICATIONS
if(token && key && permissions.includes('p_applications_manage')) {

      var url2 = window.location.href;
      if(url2.toLowerCase().includes("?app=")){
            var url3 = url2.split('?app=');
            currentApp = url3[1]
      } else { window.location.replace('/app/manage') };


      socket.emit('get.current.app', { token:token, key:key, appid:currentApp });
      socket.on('recieved.current.app', function(data) {
            if(data) {
                  if(data.responce == 'success') {
                        socket.emit('get.app.user.info', { token:token, key:key, userid:data.result[0].userid });
                        socket.on('recieve.app.user.info', function(data01) {
                              if(data01) {
                                    var data02 = JSON.stringify(data01.result[0]);
                                    var data03 = JSON.parse(data02);

                                    if(document.getElementById('app.user.name')) {
                                          document.getElementById('app.user.name').innerHTML = ` ${data03.p_display_name}`;
                                    }
                                    if(document.getElementById('app.user.email')) {
                                          document.getElementById('app.user.email').innerHTML = ` ${data03.email}`;
                                    }
                              }
                        });
                        // 

                        var data2 = JSON.stringify(data.result[0]);
                        var data3 = JSON.parse(data2);

                        // 

                        if(document.getElementById('current.app.id')) {
                              document.getElementById('current.app.id').innerHTML = `Application ID: ${data3.id}`;
                        }
                        if(document.getElementById('app.submitted_date')) {
                              document.getElementById('app.submitted_date').innerHTML = ` ${data3.submitted_date}`;
                        }
                        if(document.getElementById('app.status')) {
                              document.getElementById('app.status').innerHTML = ` ${data3.status}`;
                        }
                        if(document.getElementById('app.app01')) {
                              document.getElementById('app.app01').innerHTML = ` ${data3.app01}`;
                        }
                        if(document.getElementById('app.app02')) {
                              document.getElementById('app.app02').innerHTML = ` ${data3.app02}`;
                        }
                        if(document.getElementById('app.app03')) {
                              document.getElementById('app.app03').innerHTML = ` ${data3.app03}`;
                        }
                        if(document.getElementById('app.app04')) {
                              document.getElementById('app.app04').innerHTML = ` ${data3.app04}`;
                        }
                        if(document.getElementById('app.department')) {
                              document.getElementById('app.department').innerHTML = ` ${data3.department}`;
                        }
                        if(document.getElementById('app.app05')) {
                              document.getElementById('app.app05').innerHTML = ` ${data3.app05}`;
                        }
                        if(document.getElementById('app.app06')) {
                              document.getElementById('app.app06').innerHTML = ` ${data3.app06}`;
                        }

                        if(data3.pending_reasons) {
                              if(document.getElementById('app.pending.reasons')) {
                                    document.getElementById('app.pending.reasons').innerHTML = `
                                          <div class="p-4 mt-1 text-center">
                                                <div class="grid grid-cols-12 space-x-2">
                                                      <div class="col-span-1"></div>
                                                      <div class="col-span-10 bg-yellow-600 p-2 rounded-t-xl shadow-md text-white font-bold uppercase">
                                                            Pending Reasons
                                                      </div>
                                                      <div class="col-span-1"></div>
                                                      
                                                      <div class="col-span-1"></div>
                                                      <div class="col-span-10 bg-gray-900 p-2 rounded-b-xl shadow-md text-white font-medium">
                                                            <span class="text-white">${data3.pending_reasons}</span>
                                                      </div>
                                                      <div class="col-span-1"></div>
                                                </div>
                                          </div>
                                    `;
                              }
                        }

                        if(data3.denied_reasons) {
                              if(document.getElementById('app.denial.reasons')) {
                                    document.getElementById('app.denial.reasons').innerHTML = `
                                          <div class="p-4 mt-1 text-center">
                                                <div class="grid grid-cols-12 space-x-2">
                                                      <div class="col-span-1"></div>
                                                      <div class="col-span-10 bg-red-600 p-2 rounded-t-xl shadow-md text-white font-bold uppercase">
                                                            Denial Reasons
                                                      </div>
                                                      <div class="col-span-1"></div>
                                                      
                                                      <div class="col-span-1"></div>
                                                      <div class="col-span-10 bg-gray-900 p-2 rounded-b-xl shadow-md text-white font-medium">
                                                            <span class="text-white">${data3.denied_reasons}</span>
                                                      </div>
                                                      <div class="col-span-1"></div>
                                                </div>
                                          </div>
                                    `;
                              }
                        }


                        // 

                  } else if(data.responce == 'failed') {
                        window.location.replace('/app/manage')
                  }
            }
            
      });

      socket.on('current.app.updated', function(data) {
            if(data) {
                  if(data.responce = 'success') {
                        window.location.replace('/app/manage');
                  } else {
                        if(data.responce = 'err') {
                              ShowErrorPopup();
                        }
                  }
            }
      });

      



      function ShowErrorPopup() {
            if(document.getElementById('error.occrued')) { document.getElementById('error.occrued').classList.remove('hidden') } 
      }

      function C_AcceptApplication() {
            if(document.getElementById('accept.app.confirm')) { document.getElementById('accept.app.confirm').classList.remove('hidden') }
      }
      function C_PendingApplication() {
            if(document.getElementById('pending.app.confirm')) { document.getElementById('pending.app.confirm').classList.remove('hidden') }
      }
      function C_DenyApplication() {
            if(document.getElementById('deny.app.confirm')) { document.getElementById('deny.app.confirm').classList.remove('hidden') }
      }

      function CloseConfirmation() {
            if(document.getElementById('accept.app.confirm')) { document.getElementById('accept.app.confirm').classList.add('hidden') }
            if(document.getElementById('pending.app.confirm')) { document.getElementById('pending.app.confirm').classList.add('hidden') }
            if(document.getElementById('deny.app.confirm')) { document.getElementById('deny.app.confirm').classList.add('hidden') }
            if(document.getElementById('error.occrued')) { document.getElementById('error.occrued').classList.add('hidden') }
      }


      function F_AcceptApplication() { socket.emit('accept.current.app', { token:token, key:key, appID:currentApp }); }
      function F_PendingApplication(TYPE) {
            if(document.getElementById('pending.reasons')) {
                  if(document. getElementById('pending.reasons').value.length !== 0) {
                        let REASONS = document.getElementById('pending.reasons').value;
                        socket.emit('pending.current.app', { token:token, key:key, appID:currentApp, type:TYPE, reasons:REASONS });
                  } else {
                        document.getElementById('pending.reasons').classList.add('border-2')
                        document.getElementById('pending.reasons').classList.add('border-red-500')
                        if(document.getElementById('pending.err')) {
                              document.getElementById('pending.err').classList.remove('hidden')
                        }
                  }
            }
      }
      function F_DenyApplication() {
            if(document.getElementById('denial.reasons')) {
                  if(document. getElementById('denial.reasons').value.length !== 0) {
                        let REASONS = document.getElementById('denial.reasons').value;
                        socket.emit('deny.current.app', { token:token, key:key, appID:currentApp, reasons:REASONS });
                  } else {
                        document.getElementById('denial.reasons').classList.add('border-2')
                        document.getElementById('denial.reasons').classList.add('border-red-500')
                        if(document.getElementById('denial.err')) {
                              document.getElementById('denial.err').classList.remove('hidden')
                        }
                  }
            }
      }


} else { window.location.replace('/') }









