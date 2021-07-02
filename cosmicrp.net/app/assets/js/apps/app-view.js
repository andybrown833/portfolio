
var url2 = window.location.href;
if(!url2.toLowerCase().includes("?app=") && token && key) { window.location.replace('/') } else {
      
      var url3 = url2.split('?app=');
      if(!url3[1]) { window.location.replace('/') } else {

            window.onload = function() {
                  document.getElementById('app.view').classList.add('hidden')
                  document.getElementById('app.check').classList.remove('hidden')
                  document.getElementById('confetti').classList.add('hidden')
            }
            
            socket.emit('get.user.info2', { token:token, key:key });
            socket.on('recieve.user.info2', function(data) {
                  if(document.getElementById('user.display_name')) {
                        document.getElementById('user.display_name').innerHTML = data.display_name;
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

                  
            });

            

            setTimeout(() => {
                  socket.emit('app.check', { token:token, key, key, appid:url3[1] });
                  socket.on('app.check.recieve', function(data) {
                        if(data.status == 'success') {
                              document.getElementById('app.check').classList.add('hidden')
                              document.getElementById('app.view').classList.remove('hidden')

                              if(data.result) {
                                    // console.log(data)
                                    if(document.getElementById('app.id')) {
                                          document.getElementById('app.id').innerHTML = data.result.id;
                                    }
                                    if(document.getElementById('app.status')) {
                                          document.getElementById('app.status').innerHTML = data.result.status;
                                    }
                                    if(document.getElementById('app.submitted_date')) {
                                          document.getElementById('app.submitted_date').innerHTML = data.result.submitted_date;
                                    }
                                    if(document.getElementById('app.responces')) {
                                          document.getElementById('app.responces').innerHTML = `
                                          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                      Have you been a member of another FiveM roleplay community?
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                      ${data.result.app01}
                                                </dd>
                                          </div>
                                          <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                      Are you currently in a FiveM roleplay community?
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                      ${data.result.app02}
                                                </dd>
                                          </div>
                                          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                      Why should you be accepted into the CosmicRP Community over another applicant?
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                      ${data.result.app03}
                                                </dd>
                                          </div>
                                          <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                      Do you have any experience with roleplay?
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                      ${data.result.app04}
                                                </dd>
                                          </div>
                                          <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                      Which department are you applying for?
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                      ${data.result.department}
                                                </dd>
                                          </div>
                                          <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                      Why would you like to join this department?
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                      ${data.result.app05}
                                                </dd>
                                          </div>
                                          <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                      Do you have any experience in this departments field of work?
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                      ${data.result.app06}
                                                </dd>
                                          </div>
                                          `;
                                    }

                                    if(data.result.status == 'Application Submitted' || data.result.status == 'Application Pending') {
                                          if(document.getElementById('app.notify')) {
                                                document.getElementById('app.notify').innerHTML = ``;
                                          }
                                    }
                                    
                                    if(data.result.status == 'Application Accepted') {
                                          if(document.getElementById('app.responces.section')) {
                                                document.getElementById('app.responces.section').classList.add('hidden') 
                                          }
                                          if(document.getElementById('confetti')) {
                                                document.getElementById('confetti').classList.remove('hidden') 
                                          }
                                          if(document.getElementById('app.notify')) {
                                                document.getElementById('app.notify').classList.remove('hidden')
                                                document.getElementById('app.notify').innerHTML = `
                                                <div class="px-4 py-5 sm:p-6">
                                                      <h3 class="text-lg leading-6 font-medium text-gray-900">
                                                            CONGRATULATIONS!
                                                      </h3>
                                                      <div class="mt-2 sm:flex sm:items-start sm:justify-between">
                                                            <div class="max-w-xl text-sm text-gray-500">
                                                                  <p>
                                                                        Your application has been accepted! You are now able to participate in an interview. You have been provided a link to the CosmicRP Interview Discord. You have 7 days to complete your interview. If you need an extension please contact a member of the Resources Department.
                                                                  </p>
                                                            </div>
                                                            <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                                                                  <a href="/discord/link/resources" class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">
                                                                        CosmicRP Interview Discord
                                                                  </a>
                                                            </div>
                                                      </div>
                                                </div>
                                          `;
                                          }
                                          // ----------------

                                          var duration = 8 * 1000;
                                          var end = Date.now() + duration;

                                          (function frame() {
                                                confetti({
                                                      particleCount: 5,
                                                      angle: 90,
                                                      spread: 180,
                                                      origin: { x: 0.5, y:0 }
                                                });
                                                confetti({
                                                      particleCount: 4,
                                                      angle: 220,
                                                      spread: 180,
                                                      origin: { x: 0, y:0 }
                                                });
                                                confetti({
                                                      particleCount: 4,
                                                      angle: 320,
                                                      spread: 180,
                                                      origin: { x: 1, y:0 }
                                                });

                                                // keep going until we are out of time
                                                if (Date.now() < end) {
                                                      requestAnimationFrame(frame);
                                                }
                                          }());


                                          // -------------


                                    }
                                    if(data.result.status == 'Application Denied') {
                                          if(document.getElementById('app.responces.section')) {
                                                document.getElementById('app.responces.section').classList.add('hidden') 
                                          }
                                          if(document.getElementById('app.notify')) {
                                                document.getElementById('app.notify').classList.remove('hidden')
                                                document.getElementById('app.notify').innerHTML = `
                                                <div class="px-4 py-5 sm:p-6">
                                                      <h3 class="text-lg leading-6 font-medium text-gray-900">
                                                            Application Denied.
                                                      </h3>
                                                      <div class="mt-2 sm:flex sm:items-start sm:justify-between">
                                                            <div class="max-w-xl text-sm text-gray-500">
                                                                  <p>
                                                                        At this time we have decided to deny your application. We have listed below the possible reason(s) as to why it was denied and when you are able to apply again.
                                                                  </p>
                                                            </div>
                                                      </div>
                                                      <div class="mt-2 sm:flex sm:items-start sm:justify-between">
                                                            <div class="max-w-xl text-md text-gray-900">
                                                                  Reason(s)
                                                            </div>
                                                      </div>
                                                      <div class="mt-1 sm:flex sm:items-start sm:justify-between">
                                                            <div class="max-w-xl text-md text-gray-500">
                                                                  ${data.result.denied_reasons}
                                                            </div>
                                                      </div>
                                                </div>
                                          `;
                                          }


                                    }

                              }

                        }
                        if(data.status == 'err') { window.history.back(); }
                        
                  });
            }, 2000);


      }
      
}