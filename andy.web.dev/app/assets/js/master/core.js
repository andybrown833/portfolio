var token = window.localStorage.getItem('auth_token');
var key = window.localStorage.getItem('auth_key');
var perms = window.localStorage.getItem('perm_groups');
let permissions = JSON.stringify(perms);
permissions = JSON.parse(permissions);

window.onload = function() {
      document.getElementById('page.loading').innerHTML = `
      <div draggable="false" id="page.content2" class="select-none mx-auto flex justify-center">
            <div class="fixed z-10 inset-0 overflow-y-auto">
                  <div class="flex sm:items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div class="inline-block align-bottom px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                              <div>
                                    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-andy-dark">
                                          <svg class="animate-spin h-20 w-20 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                          </svg>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
      `;
      setTimeout(function() {
            document.getElementById('page.loading').innerHTML = ``;
            document.getElementById('page.content').classList.remove('hidden')
      }, 2000)
};
