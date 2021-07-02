var token = window.localStorage.getItem('auth_token');
var key = window.localStorage.getItem('auth_key');
var perms = window.localStorage.getItem('perm_groups');
let permissions = JSON.stringify(perms);
permissions = JSON.parse(permissions);

if(token && key) {
    socket.emit('get.user.info', { token:token, key:key });
    socket.on('recieve.user.info', function(data) {
        if(data) {
            if(data.responce == 'success') {
                if(document.getElementById('get.info')) {
                    document.getElementById('get.info').innerHTML = `Welcome, <b>${data.display_name}</b>`;
                }
            }
            if(data.responce == 'failed') {
                window.localStorage.clear();
                window.location.replace('/')
            }
        }
    });
}

var loader = document.getElementById('page.loader');
if(loader) {
    loader.innerHTML = `
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-200 opacity-100"></div>
            </div>
        
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div class="inline-block align-bottom rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div>
                    <div class="animate-pulse mx-auto flex items-center justify-center h-32 w-32 rounded-full">
                        <img src="/assets/imgs/logo.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    setTimeout(function(){
        loader.innerHTML = ``;
        document.getElementById('page.content').classList.remove('hidden');
    }, 2000);

}


function Return() { window.history.back() };