var discord_users_list = document.getElementById('m.discord.users.list');
var discord_bots_list = document.getElementById('m.discord.bots.list');
var discord_channels_list = document.getElementById('m.discord.channels.list');
var discord_roles_list = document.getElementById('m.discord.roles.list');

socket.emit('m.discord.get.info', { token:token, secretkey:key });
setInterval(function() {
    socket.emit('m.discord.get.info', { token:token, secretkey:key });
}, 5000)


socket.on('m.discord.recieve.info', function(data) {

    discord_users_list.innerHTML = ``;
    discord_bots_list.innerHTML = ``;
    discord_channels_list.innerHTML = ``;
    discord_roles_list.innerHTML = ``;

    var users = data.users;
    var bots = data.bots;
    var channels = data.channels;
    var roles = data.roles;
    users.forEach(data => {
        discord_users_list.innerHTML += `
        <li class="py-4">
            <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <img class="h-8 w-8 rounded-full" src="${data.avatarURL}" alt="">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-300 truncate">
                        ${data.username}
                    </p>
                    <p class="text-sm text-gray-400 truncate">
                        @${data.tag}
                    </p>
                    </div>
                <div>
                    <a href="/management/discord?user=${data.id}" class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                        View
                    </a>
                </div>
            </div>
        </li>
        `;
    });
    bots.forEach(data => {
        discord_bots_list.innerHTML += `
        <li class="py-4">
            <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <img class="h-8 w-8 rounded-full" src="${data.avatarURL}" alt="">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-300 truncate">
                        ${data.username}
                    </p>
                    <p class="text-sm text-gray-400 truncate">
                        @${data.tag}
                    </p>
                    </div>
                <div>
                    <a href="/management/discord?user=${data.id}" class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                        View
                    </a>
                </div>
            </div>
        </li>
        `;
    });
    channels.forEach(data => {
        let badge = '';
        if(data.type === 'voice') {
            badge = `<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mr-4">V</span>`
        } else if(data.type === 'text') {
            badge = `<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mr-4">T</span>`
        } else if(data.type === 'category') {
            badge = `<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mr-4">C</span>`
        }
        discord_channels_list.innerHTML += `
        <li class="py-4">
            <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-300 truncate">
                        ${badge} ${data.name}
                    </p>
                </div>
                <div>
                    <a href="/management/discord?channel=${data.id}" class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                        View
                    </a>
                </div>
            </div>
        </li>
        `;
    });
    roles.forEach(data => {
        discord_roles_list.innerHTML += `
        <li class="py-4">
            <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-300 truncate">
                        ${data.name}
                    </p>
                </div>
                <div>
                    <a href="/management/discord?role=${data.id}" class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                        View
                    </a>
                </div>
            </div>
        </li>
        `;
    });
});

