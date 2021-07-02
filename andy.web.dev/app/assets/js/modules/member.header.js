window.onclick = function(event) {
    if(document.getElementById('MobileMenuOpen').contains(event.target)) {
        document.getElementById('member.mobile.menu').classList.remove("hidden")
        document.getElementById('MobileMenuOpen').classList.add("hidden")
        document.getElementById('MobileMenuClose').classList.remove("hidden")
    } else if(document.getElementById('MobileMenuClose').contains(event.target)) {
        document.getElementById('member.mobile.menu').classList.add("hidden")
        document.getElementById('MobileMenuOpen').classList.remove("hidden")
        document.getElementById('MobileMenuClose').classList.add("hidden")
    }
    
    if(document.getElementById('NotifyButton').contains(event.target)) {
        document.getElementById('NotifyDropList').classList.toggle("hidden")
    }
    if(document.getElementById('NotifyDropHide').contains(event.target)) {
        document.getElementById('NotifyDropList').classList.add("hidden")
    }
    if(document.getElementById('MobileMediaDropButton').contains(event.target)) {
        document.getElementById('MobileMediaDropList').classList.toggle("hidden")
    }

    if (document.getElementById('MediaDropButton').contains(event.target)) {
        if(document.getElementById('MediaDropButton').contains(event.target)) {
            document.getElementById('MediaDropList').classList.toggle("hidden")
        }
    } else {
        document.getElementById('MediaDropList').classList.add("hidden")
    }

}
var point = document.getElementById('member.header');
if(point) {
      point.innerHTML = `
      <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                      <svg id="MobileMenuOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                      <svg id="MobileMenuClose" class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
              </div>
              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div class="flex-shrink-0 flex items-center">
                      <img class="block lg:hidden h-8 w-auto" src="/assets/imgs/anderson_avatar_banner.png" alt="AndyBrown833">
                      <img class="hidden lg:block h-8 w-auto" src="/assets/imgs/anderson_avatar_banner.png" alt="AndyBrown833">
                  </div>
                  <div class="hidden sm:block sm:ml-6">
                      <div class="flex space-x-4">
                          <a href="/member" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Member</a>
                          <button id="MediaDropButton" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Media</button>
                          <a href="/about-me" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Me</a>
                          <a href="/projects" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                      </div>
                  </div>
              </div>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div id="management.panel.button"></div>
                    <!-- NOTIFICATIONS BELL -->
                  <button id="NotifyButton" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                  </button>
                  
          
                  <!-- PROFILE DROPDOWN -->
                  <div class="ml-3 relative">
                        <a href="/logout">
                            <button type="button" class="sm:inline-flex hidden items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-andy-dark hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Logout
                                <svg class="-mr-1 ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                            <button type="button" class="sm:hidden items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-andy-dark hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <svg class="mx-auto h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                        </a>
                  </div>
              </div>
          </div>
      </div>
  
      <div id="member.mobile.menu" class="hidden sm:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
              <a href="/member" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Member</a>
              <button id="MobileMediaDropButton" OnClick="" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Media</button>
              <div id="MobileMediaDropList" class="hidden">
                  <br>
                  <a href="/twitch" class="text-andy-gray hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md text-md font-medium">Twitch</a>
                  <br><br>
                  <a href="/youtube" class="text-andy-gray hover:bg-gray-700 hover:text-white px-3 pt-2 rounded-md text-md font-medium">YouTube</a>
                  <br><br>
                  <a href="/discord" class="text-andy-gray hover:bg-gray-700 hover:text-white px-3 pt-2 rounded-md text-md font-medium">Discord</a>
                  <br><br>
                  <a href="/instagram" class="text-andy-gray hover:bg-gray-700 hover:text-white px-3 pt-2 rounded-md text-md font-medium">Instagram</a>
                  <br><br>
                  <a href="/twitter" class="text-andy-gray hover:bg-gray-700 hover:text-white px-3 pt-2 rounded-md text-md font-medium">Twitter</a>
                  <br><br>
              </div>
              <a href="/about-me" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Me</a>
              <a href="/projects" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
              <div id="management.panel.button.mobile"></div>
          </div>
      </div>

  </nav>

  <div id="NotifyDropList" class="hidden fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
      
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div class="block absolute top-0 right-0 pt-4 pr-4">
                  <button id="NotifyDropHide" type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
              </div>
              <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                          No Notifications
                      </h3>
                      <div class="mt-2">
                          <p class="text-sm text-gray-500">
                              There are currenly no outstanding notifications to be shown.
                          </p>
                      </div>
                  </div>
              </div>
              <!-- <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                      Deactivate
                  </button>
                  <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">
                      Cancel
                  </button>
              </div> -->
          </div>
      </div>
  </div>

  <header id="MediaDropList" class="hidden bg-gray-900 shadow-sm">
      <div class="max-w-7xl mx-auto py-2 pl-52 px-8">
          <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                  <a href="/twitch" class="text-andy-gray hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Twitch</a>
                  <a href="/youtube" class="text-andy-gray hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">YouTube</a>
                  <a href="/discord" class="text-andy-gray hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Discord</a>
                  <a href="/instagram" class="text-andy-gray hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Instagram</a>
                  <a href="/twitter" class="text-andy-gray hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Twitter</a>
              </div>
          </div>
      </div>
  </header>
      `;
}