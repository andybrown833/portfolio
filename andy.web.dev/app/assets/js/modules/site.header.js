// ------------------------------------------------------------------------------------------------
window.onclick = function(event) {
    if (document.getElementById('MobileMenuButton').contains(event.target) || document.getElementById('MobileMenuButton2').contains(event.target)) {
        document.getElementById('MobileMenu').classList.toggle("hidden")
    }
    if (document.getElementById('MediaDropButton').contains(event.target) || document.getElementById('MoreDropButton').contains(event.target)) {
        if(document.getElementById('MediaDropButton').contains(event.target)) {
            document.getElementById('MediaDropList').classList.toggle("hidden")
            document.getElementById('MoreDropList').classList.add("hidden")
        } else {
            if(document.getElementById('MoreDropButton').contains(event.target)) {
                document.getElementById('MoreDropList').classList.toggle("hidden")
                document.getElementById('MediaDropList').classList.add("hidden")
            }
        }
    } else {
        document.getElementById('MoreDropList').classList.add("hidden")
        document.getElementById('MediaDropList').classList.add("hidden")
    }
}
// ------------------------------------------------------------------------------------------------
var point = document.getElementById('site.header');
if(point) {
    point.innerHTML = `
    <div class="relative bg-andy-gray">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <a href="/">
                        <span class="sr-only">AndyBrown833</span>
                        <img class="h-8 w-auto sm:h-10 md:h-16" src="/assets/imgs/logo1.png" alt="AndyBrown833">
                    </a>
                </div>
                <div class="-mr-2 -my-2 md:hidden">
                    <button id="MobileMenuButton" type="button" class="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span class="sr-only">AndyBrown833</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <nav class="hidden md:flex space-x-8">
                    <div class="relative">
                        <button id="MediaDropButton" type="button" class="droplist group rounded-md text-white inline-flex items-center text-base font-medium hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span>Media</span>
                            <svg class="ml-2 h-5 w-5 text-white group-hover:text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        
            
                        <!-- MEDIA DROP DOWN -->
                        <div id="MediaDropList" class="header-drop hidden absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    <a href="/twitch" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100">
                                        <svg class="flex-shrink-0 h-6 w-6 text-andy-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Twitch
                                            </p>
                                        </div>
                                    </a>
                    
                                    <a href="/youtube" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100">
                                        <svg class="flex-shrink-0 h-6 w-6 text-andy-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                        </svg>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                YouTube
                                            </p>
                                        </div>
                                    </a>
                    
                                    <a href="/discord" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100">
                                        <svg class="flex-shrink-0 h-6 w-6 text-andy-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Discord
                                            </p>
                                        </div>
                                    </a>
                    
                                    <a href="/instagram" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100">
                                        <svg class="flex-shrink-0 h-6 w-6 text-andy-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Instagram
                                            </p>
                                        </div>
                                    </a>
                    
                                    <a href="/twitter" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100">
                                        <svg class="flex-shrink-0 h-6 w-6 text-andy-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Twitter
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
            
                    <a href="/about" class="text-base font-medium text-white hover:text-gray-200">
                        About Me
                    </a>
                    <a href="/projects" class="text-base font-medium text-white hover:text-gray-200">
                        Projects
                    </a>
            
                    <div class="relative">
                        <button id="MoreDropButton" type="button" class="droplist group rounded-md text-white inline-flex items-center text-base font-medium hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span>More</span>
                            <svg class="ml-2 h-5 w-5 text-white group-hover:text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
            
                        <!-- MORE DROPDOWN -->
                        <div id="MoreDropList" class="header-drop hidden absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    
                                    <a href="/contact-me" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100">
                                        <svg class="flex-shrink-0 h-6 w-6 text-andy-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">
                                                Contact Me
                                            </p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Have questions, want to collaborate? Contact Me!
                                            </p>
                                        </div>
                                    </a>

                                </div>
                                <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                    <div>
                                        <h3 class="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                            Recent News
                                        </h3>

                                        <ul class="mt-4 space-y-4">

                                            <li class="text-base truncate">
                                                <a href="/news/back-at-it-again" class="font-medium text-gray-900 hover:text-gray-700">
                                                    Back At It Again!
                                                </a>
                                            </li>

                                        </ul>

                                    </div>
                                    <div class="mt-5 text-sm">
                                        <a href="/news" class="font-medium text-andy-dark hover:text-blue-500">View all posts <span aria-hidden="true">&rarr;</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>
                <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <a href="/member" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-andy-dark hover:bg-gray-800">
                        Member Access
                    </a>
                </div>
            </div>
        </div>

        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 hidden" id="MobileMenu">
                <div class="pt-5 pb-6 px-5">
                    <div class="flex items-center justify-between">
                        <div>
                            <img class="h-8 w-auto" src="/assets/imgs/logo1.png" alt="AndyBrown833">
                        </div>
                        <div class="-mr-2">
                            <button id="MobileMenuButton2" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span class="sr-only">Close menu</span>
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="mt-6">
                        <nav class="grid gap-y-8">
                            <a href="/twitch" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                <span class="ml-3 text-base font-medium text-gray-900">
                                    Twitch
                                </span>
                            </a>
                
                            <a href="/youtube" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                                <span class="ml-3 text-base font-medium text-gray-900">
                                    Youtube
                                </span>
                            </a>
                
                            <a href="/discord" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span class="ml-3 text-base font-medium text-gray-900">
                                    Discord
                                </span>
                            </a>
                
                            <a href="/instagram" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                <span class="ml-3 text-base font-medium text-gray-900">
                                    Instagram
                                </span>
                            </a>
                
                            <a href="/twitter" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <span class="ml-3 text-base font-medium text-gray-900">
                                    Twitter
                                </span>
                            </a>
                        </nav>
                    </div>
                </div>
                <div class="py-6 px-5 space-y-6">
                    <div>
                        <a href="/member" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Member Access
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
};
// ------------------------------------------------------------------------------------------------
