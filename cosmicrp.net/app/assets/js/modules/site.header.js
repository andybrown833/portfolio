// CORE SITE HEADER CONFIGURATION
window.onclick = function(click) {

      var mobile_menu_show = document.getElementById('mobile.menu.show');
      var mobile_menu_hide = document.getElementById('mobile.menu.hide');
      var mobile_menu = document.getElementById('mobile.menu');

      var dept_drop_btn = document.getElementById('departments.drop.btn');
      var dept_drop_list = document.getElementById('departments.drop');
      var resources_drop_btn = document.getElementById('resources.drop.btn');
      var resources_drop_list = document.getElementById('resources.drop');
      
      var profile_drop_btn = document.getElementById('profile.drop.btn');
      var profile_drop_list = document.getElementById('profile.drop');

      if(document.getElementById('site.header.main')) {
            if(mobile_menu_show.contains(click.target)) {
                  mobile_menu.classList.remove('hidden')
            } else if(mobile_menu_hide.contains(click.target)) {
                  mobile_menu.classList.add('hidden')
            }
            
            if(dept_drop_btn.contains(click.target)) {
                  dept_drop_list.classList.toggle('hidden')
            } else if(!dept_drop_list.contains(click.target)) {
                  dept_drop_list.classList.add('hidden')
            }
            
            if(resources_drop_btn.contains(click.target)) {
                  resources_drop_list.classList.toggle('hidden')
            } else if(!resources_drop_list.contains(click.target)) {
                  resources_drop_list.classList.add('hidden')
            }

            if(profile_drop_btn.contains(click.target)) {
                  profile_drop_list.classList.toggle('hidden')
            } else if(!profile_drop_list.contains(click.target)) {
                  profile_drop_list.classList.add('hidden')
            }
      }

};

var headerPoint = document.getElementById('site.header');
if(headerPoint) {
      headerPoint.innerHTML = `<div id="site.header.main" class="relative bg-gray-100 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                  <div class="flex justify-start lg:w-0 lg:flex-1">
                        <a href="/">
                              <img class="h-8 w-auto sm:h-10 transition duration-500 ease-in-out transform hover:scale-110" src="/assets/imgs/logo.png" alt="">
                        </a>
                  </div>
                  <div class="-mr-2 -my-2 md:hidden">
                        <button id="mobile.menu.show" type="button" class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                              </svg>
                        </button>
                  </div>
                  <nav class="hidden md:flex space-x-10">
                        
                        <a href="/about" class="text-base font-medium text-gray-500 hover:text-gray-900 transition duration-500 ease-in-out transform hover:scale-110">
                              About
                        </a>

                        <div class="relative hidden">
                              <button id="departments.drop.btn" type="button" class="transition duration-500 ease-in-out transform hover:scale-110 text-gray-500 group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
                                    <span>Departments</span>
                                          <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                              </button>
                              <div id="departments.drop" class="hidden absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                          <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                
                                                <a href="/dept/publicsafety" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition duration-500 ease-in-out transform hover:scale-105">
                                                      <img src="/assets/imgs/public_safety.png" class="h-8" alt="">
                                                      <div class="ml-4">
                                                            <p class="text-base font-medium text-gray-900">
                                                                  Department of Public Safety
                                                            </p>
                                                            <p class="mt-1 text-sm text-gray-500">
                                                                  Los Santos Police Department, San Andreas Highway Patrol, Blaine County Sheriff's Department & San Andreas Fire & EMS
                                                            </p>
                                                      </div>
                                                </a>
                                                <a href="/dept/publicsafety" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition duration-500 ease-in-out transform hover:scale-105">
                                                      <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                      </svg>
                                                      <div class="ml-4">
                                                            <p class="text-base font-medium text-gray-900">
                                                                  San Andreas Communications
                                                            </p>
                                                      </div>
                                                </a>
                                                <a href="/dept/publicsafety" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition duration-500 ease-in-out transform hover:scale-105">
                                                      <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                      </svg>
                                                      <div class="ml-4">
                                                            <p class="text-base font-medium text-gray-900">
                                                                  Citizens of San Andreas
                                                            </p>
                                                      </div>
                                                </a>

                                          </div>
                                    </div>
                              </div>
                        </div>
            
                        <div class="relative">
                              <button id="resources.drop.btn" type="button" class="transition duration-500 ease-in-out transform hover:scale-110 text-gray-500 group  rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
                                    <span>Resources</span>
                                    <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                              </button>
                              <div id="resources.drop" class="hidden absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                          <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">

                                                <a href="/handbook" target="_BLANK" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition duration-500 ease-in-out transform hover:scale-105">
                                                      <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                                      </svg>
                                                      <div class="ml-4">
                                                            <p class="text-base font-medium text-gray-900">
                                                                  Rules & Guidelines
                                                            </p>
                                                            <p class="mt-1 text-sm text-gray-500">
                                                                  CosmicRP Community Rules & Guidelines
                                                            </p>
                                                      </div>
                                                </a>

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </nav>

                  <div id="site.header.btn" class="md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a href="/login" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Login
                              <svg class="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                              </svg>
                        </a>
                  </div>

            </div>
      </div>



      <!-- MOBILE MENU -->
      <div id="mobile.menu" class="hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div class="pt-5 pb-6 px-5">
                        <div class="flex items-center justify-between">
                              <div>
                                    <img class="h-8 w-auto" src="/assets/imgs/logo.png" alt="Workflow">
                              </div>
                              <div class="-mr-2">
                                    <button id="mobile.menu.hide" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                          </svg>
                                    </button>
                              </div>
                        </div>
                        <div class="mt-6">
                              <nav class="grid gap-y-8">

                                    <a href="/about" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                          <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                          </svg>
                                          <span class="ml-3 text-base font-medium text-gray-900">
                                                About
                                          </span>
                                    </a>

                                    <div class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                          <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                          </svg>
                                          <span class="ml-3 text-base font-medium text-gray-900">
                                                Departments
                                          </span>
                                          <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                          </svg>
                                    </div>

                                    <div class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                          <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                          </svg>
                                          <span class="ml-3 text-base font-medium text-gray-900">
                                                Resources
                                          </span>
                                          <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                          </svg>
                                    </div>

                              </nav>
                        </div>
                  </div>
                  <div class="py-6 px-5 space-y-6">
                        <div>
                              <a href="/register" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-700 hover:bg-indigo-900">
                                    Register
                              </a>
                              <p class="mt-6 text-center text-base font-medium text-gray-500">
                                    Have an account?
                                    <a href="/login" class="text-indigo-700 hover:text-indigo-900">
                                          Login
                                    </a>
                              </p>
                        </div>
                  </div>
            </div>
      </div>
</div>`;
}




socket.emit('get.user.info', { token:token, key:key });
socket.on('recieve.user.info', function(data) {
      if(data) {
            if(data.responce == 'success') {
                  if(document.getElementById('get.info')) {
                        document.getElementById('get.info').innerHTML = `Welcome, <b>${data.display_name}</b>`;
                  }
                  if(document.getElementById('site.header.main')) {
                        document.getElementById('site.header.btn').innerHTML = `
                              <div class="relative flex-shrink-0 ml-4">
                                    <div>
                                          <div id="profile.drop.btn" class="transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer rounded-full flex text-sm text-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                                <span class="mr-2 mt-1 uppercase font-medium text-gray-900">${data.display_name}</span>
                                                <img class="rounded-full h-8 w-8" src="assets/imgs/user.png" alt="">
                                          </div>
                                    </div>
            
                                    <div id="profile.drop" class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                          <a href="/profile/?user=${data.id}" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                                          <a href="/profile/settings" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                          <a href="/logout" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</a>
                                    </div>
                              </div>
      
                        `;
      
                  }
            }
            

      }

});
