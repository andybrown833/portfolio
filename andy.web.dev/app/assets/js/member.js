// ------------------------------------------------------------------------------------------------
socket.emit('account.get.data', { 
      token:token,
      secretkey:key
});

socket.on('account.recieve.data', function(data) { 
      var point2 = document.getElementById('get.member.name');
      if(point2) {
            point2.innerHTML = `${data.display_name}`;
      }
});


async function ExperimentFeature() { socket.emit('member.experiment', { token:token, secretkey:key }); };

socket.on('member.experiment.sent2', function(data) { window.localStorage.setItem('code2', data.code); });

socket.on('member.experiment.sent', function(data) {
      var content2 = document.getElementById('page.content2')
      var content3 = document.getElementById('page.content3')
      content2.classList.add('hidden');
      content3.innerHTML = `
            <div class="hidden container mx-auto mt-20 lg:w-2/5 md:w-3/5 w-4/5">
                  <div class="overflow-hidden shadow-md rounded-lg" style="background-color:#151719 !important;">
                        <div class="px-4 py-5 sm:p-6">
                              <div class="font-bold text-andy-gray text-xl text-center uppercase">
                                    Enter Your Code
                              </div>
                              <div class="p-4">
                                    <input type="text" id="experiment.code" placeholder="ENTER CODE HERE" class="text-center h-14 text-white bg-andy-dark appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <button onclick="MemberExperimentCodeEntered()" type="submit" class="mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-andy-dark hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                          SUBMIT
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      `;
      content3.classList.remove('hidden');
});

async function MemberExperimentCodeEntered() {
      let code_input = document.getElementById('experiment.code').value;
      let storage_code = window.localStorage.getItem('code2');
      if(code_input == storage_code) {
            document.getElementById('page.content3').classList.add('hidden');
            document.getElementById('video.here').innerHTML = `<iframe width="480" height="270" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=true&controls=false" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            document.getElementById('page.content4').classList.remove('hidden');
      }
};

async function MemberExperimentConcluded() {
      var content2 = document.getElementById('page.content2')
      var content4 = document.getElementById('page.content3')
      content4.innerHTML = `
      <div id="page.content4" class="hidden container mx-auto mt-20 lg:w-2/5 md:w-3/5 w-4/5">
            <div class="overflow-hidden shadow-md bg-andy-gray rounded-lg">
                  <div class="px-4 py-5 sm:p-6">
                        <div class="text-andy-dark h-auto w-auto flex justify-center">
                              <div id="video.here"></div>
                        </div>
                        <div>
                              <button onclick="MemberExperimentConcluded()" type="submit" class="mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-andy-dark hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    STOP THIS MADNESS
                              </button>
                        </div>
                  </div>
            </div>
      </div>`;
      content4.classList.add('hidden');
      content2.classList.remove('hidden');
}


if(permissions.includes('p_management_panel')) {
      if(document.getElementById('management.panel.button')) {
            document.getElementById('management.panel.button').innerHTML = `
            <div class="mr-4 relative">      
                  <a href="/management">
                              <button type="button" class="sm:inline-flex hidden items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-andy-dark hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Management Portal
                                    <svg class="-mr-1 ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                    </svg>
                              </button>
                        </a>
                  </div>
            `;
      }
      if(document.getElementById('management.panel.button.mobile')) {
            document.getElementById('management.panel.button.mobile').innerHTML = `
                  <a href="/management" class="bg-andy-dark text-white block px-3 py-2 rounded-md text-base font-medium">Management Portal</a>
            `;
      }
}

{/* <div id="page.content3" class="hidden container mx-auto mt-20 lg:w-2/5 md:w-3/5 w-4/5">
      <div class="overflow-hidden shadow-md rounded-lg" style="background-color:#151719 !important;">
            <div class="px-4 py-5 sm:p-6">
                  <div class="font-bold text-andy-gray text-xl text-center uppercase">
                        Enter Your Code
                  </div>
                  <div class="p-4">
                        <input type="text" id="experiment.code" placeholder="ENTER CODE HERE" class="text-center h-14 text-white bg-andy-dark appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <button onclick="MemberExperimentCodeEntered()" type="submit" class="mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-andy-dark hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              SUBMIT
                        </button>
                  </div>
            </div>
      </div>
</div> */}

