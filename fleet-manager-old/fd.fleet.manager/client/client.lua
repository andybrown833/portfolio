local locations = {
    { x = -646.31 , y = -104.85 , z = 37.97 },
    { x = 205.98 , y = -1661.28 , z = 29.8 },
    { x = 1193.48 , y = -1487.58 , z = 34.84 },
    { x = 1695.36 , y = 3594.56 , z = 35.62 },
    { x = -379.62 , y = 6118.33 , z = 31.85 },
    { x = -1069.97 , y = -2379.03 , z = 14.1 },
}


-- VEHICLE GARAGE MARKER
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        if(exports.fwCore:pushCharacterType() == 'LEO') then
            for _, item in pairs(locations) do
                print(item.x)
                DrawMarker(23, item.x, item.y, item.z, 0.0, 0.0, 0.0, 0.0, 180.0, 0.0, 1.5, 1.5, 1.5, 50, 143, 168, 150, false, false, 2, nil, nil, false)
                DrawMarker(36, item.x, item.y, item.z + 0.75, 0.0, 0.0, 0.0, 0.0, 0, 0.0, 1.0, 1.0, 1.0, 50, 143, 168, 150, false, false, 2, 0.5, nil, false)
                plyCoords = GetEntityCoords(GetPlayerPed(-1), 0)
                distance = GetDistanceBetweenCoords(item.x, item.y, item.z, plyCoords["x"], plyCoords["y"], plyCoords["z"], true)
                if(distance < 1.5) then
                    DisplayHelpText("Press ~b~E~s~ to open the garage menu.")
                    _menuPool:ProcessMenus()
                    if IsControlJustPressed(1, 350) then
                        mainMenu:Visible(true)
                    end
                else
                    mainMenu:Visible(false)
                end
            end
        end
    end
end)

-- BANNER
local RuntimeTXD = CreateRuntimeTxd('Custom_Menu_Heads')
local MenuImage = "https://cdn.discordapp.com/attachments/752875040734969908/794696724110639134/banner2.png"
local Object = CreateDui(MenuImage, 512, 128)
_G.Object = Object
local TextureThing = GetDuiHandle(Object)
local Texture = CreateRuntimeTextureFromDuiHandle(RuntimeTXD, 'Custom_Menu_Heads', TextureThing)
Menuthing = "Custom_Menu_Heads"

_menuPool = NativeUI.CreatePool()
mainMenu = NativeUI.CreateMenu("Fleet Manager", "Select A Department", nil, nil, Menuthing, Menuthing)
_menuPool:Add(mainMenu)
_menuPool:MouseControlsEnabled(false)
_menuPool:ControlDisablingEnabled(false)

-- SASP
function FleetManager(menu)

    local utility = _menuPool:AddSubMenu(menu, "Ford Utility Truck (Smaller)", nil, nil, Menuthing, Menuthing)
    local utility2 = _menuPool:AddSubMenu(menu, "Ford Utility Truck (Larger)", nil, nil, Menuthing, Menuthing)
    local brush = _menuPool:AddSubMenu(menu, "Ford Utility Truck (Smaller)", nil, nil, Menuthing, Menuthing)
    local brush2 = _menuPool:AddSubMenu(menu, "Ford Utility Truck (Larger)", nil, nil, Menuthing, Menuthing)
    local gatorfire = _menuPool:AddSubMenu(menu, "Fire Gator", nil, nil, Menuthing, Menuthing)
    local ambulance = _menuPool:AddSubMenu(menu, "Ambulance", nil, nil, Menuthing, Menuthing)
    local engine = _menuPool:AddSubMenu(menu, "Fire Engine", nil, nil, Menuthing, Menuthing)
    local ladder = _menuPool:AddSubMenu(menu, "Ambulance", nil, nil, Menuthing, Menuthing)
    local ladder2 = _menuPool:AddSubMenu(menu, "Fire Engine", nil, nil, Menuthing, Menuthing)
    local tahoe = _menuPool:AddSubMenu(menu, "Ambulance", nil, nil, Menuthing, Menuthing)
    local charg = _menuPool:AddSubMenu(menu, "Ambulance", nil, nil, Menuthing, Menuthing)
    local fpiu = _menuPool:AddSubMenu(menu, "Ambulance", nil, nil, Menuthing, Menuthing)
    local fordfire = _menuPool:AddSubMenu(menu, "Ambulance", nil, nil, Menuthing, Menuthing)
    local silvfire = _menuPool:AddSubMenu(menu, "Ambulance", nil, nil, Menuthing, Menuthing)
    local ramfire = _menuPool:AddSubMenu(menu, "Ambulance", nil, nil, Menuthing, Menuthing)
    local ramfire2 = _menuPool:AddSubMenu(menu, "Ambulance", nil, nil, Menuthing, Menuthing)

    local utility = NativeUI.CreateItem('Ford Utility Truck (Smaller)','')
    menu:AddItem(utility)
    local utility2 = NativeUI.CreateItem('Ford Utility Truck (Larger)','')
    menu:AddItem(utility2)
    local brush = NativeUI.CreateItem('Ford Brush Truck (Smaller)','')
    menu:AddItem(brush)
    local brush2 = NativeUI.CreateItem('Ford Brush Truck (Larger)','')
    menu:AddItem(brush2)
    local gatorfire = NativeUI.CreateItem('Fire Gator','')
    menu:AddItem(gatorfire)
    local ambulance = NativeUI.CreateItem('Ambulance','')
    menu:AddItem(ambulance)
    local engine = NativeUI.CreateItem('Fire Engine','')
    menu:AddItem(engine)
    local ladder = NativeUI.CreateItem('Fire Ladder','')
    menu:AddItem(ladder)
    local tahoe = NativeUI.CreateItem('Fire Patrol Tahoe','')
    menu:AddItem(tahoe)
    local charg = NativeUI.CreateItem('Fire Patrol Charger','')
    menu:AddItem(charg)
    local fpiu = NativeUI.CreateItem('Fire Patrol FPIU','')
    menu:AddItem(fpiu)
    local fordfire = NativeUI.CreateItem('Fire Patrol Ford F-350','')
    menu:AddItem(fordfire)
    local silvfire = NativeUI.CreateItem('Fire Patrol Silverado','')
    menu:AddItem(silvfire)
    local ramfire = NativeUI.CreateItem('Fire Patrol Ram','')
    menu:AddItem(ramfire)

    menu.OnItemSelect = function(sender, item, index)
        if item == utility then
            SpawnVehicle("utility", 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0) -- 0(yes) 1(no)
        elseif item == utility2 then
            SpawnVehicle("utility2", 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0) -- 0(yes) 1(no)
        elseif item == brush then
            SpawnVehicle("brush", 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1) -- 0(yes) 1(no)
        elseif item == brush2 then
            SpawnVehicle("brush2", 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1) -- 0(yes) 1(no)
        elseif item == gatorfire then
            SpawnVehicle("gatorfire", 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0) -- 0(yes) 1(no)
        elseif item == ambulance then
            SpawnVehicle("ambulance", 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0) -- 0(yes) 1(no)
        elseif item == engine then
            SpawnVehicle("engine", 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1) -- 0(yes) 1(no)
        elseif item == ladder then
            SpawnVehicle("ladder", 0,0,1,0,1,0, 1,1, 0,1,0,1, 0) -- 0(yes) 1(no)
        elseif item == tahoe then
            SpawnVehicle("tahoe", 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0) -- 0(yes) 1(no)
        elseif item == charg then
            SpawnVehicle("charg", 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0) -- 0(yes) 1(no)
        elseif item == fpiu then
            SpawnVehicle("fpiu", 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0) -- 0(yes) 1(no)
        elseif item == fordfire then
            SpawnVehicle("fordfire", 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0) -- 0(yes) 1(no)
        elseif item == silvfire then
            SpawnVehicle("silvfire", 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0) -- 0(yes) 1(no)
        elseif item == ramfire then
            SpawnVehicle("ramfire", 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0) -- 0(yes) 1(no)
        end
    end
end

FleetManager(mainMenu)
_menuPool:RefreshIndex()
_menuPool:MouseControlsEnabled(false)
_menuPool:ControlDisablingEnabled(false)

function SpawnVehicle(veh, ex1,ex2,ex3,ex4,ex5,ex6,ex7,ex8,ex9,ex10,ex11,ex12) -- ex1-12 (1/0) -- liv(int)
    
    local spawnX = GetEntityCoords(GetPlayerPed(-1), 0)["x"]
    local spawnY = GetEntityCoords(GetPlayerPed(-1), 0)["y"]
    local spawnZ = GetEntityCoords(GetPlayerPed(-1), 0)["z"]
    local spawnH = GetEntityCoords(GetPlayerPed(-1), 0)["h"]

    local plate = exports.fwCore:pushUserIdentifier()
    local vehiclehash = GetHashKey(veh)
    RequestModel(vehiclehash)
    print('WE GOT HERE')
    Citizen.CreateThread(function()
        Citizen.Wait(100)
        print('NO')
        mainMenu:Visible(false)
        vehicle2 = CreateVehicle(vehiclehash, spawnX,spawnY,spawnZ,spawnH, true, true)
        SetVehicleCustomPrimaryColour(vehicle2, 255, 255, 255)
        -- SetVehicleLivery(vehicle2, liv)
        SetVehicleExtra(vehicle2, 1, ex1)
        SetVehicleExtra(vehicle2, 2, ex2)
        SetVehicleExtra(vehicle2, 3, ex3)
        SetVehicleExtra(vehicle2, 4, ex4)
        SetVehicleExtra(vehicle2, 5, ex5)
        SetVehicleExtra(vehicle2, 6, ex6)
        SetVehicleExtra(vehicle2, 7, ex7)
        SetVehicleExtra(vehicle2, 8, ex8)
        SetVehicleExtra(vehicle2, 9, ex9)
        SetVehicleExtra(vehicle2, 10, ex10)
        SetVehicleExtra(vehicle2, 11, ex11)
        SetVehicleExtra(vehicle2, 12, ex12)
        SetVehicleNumberPlateText(vehicle2, plate)
        SetPedIntoVehicle(GetPlayerPed(-1), vehicle2, -1)
        ShowNotification("~g~Vehicle Checked Out")
        ShowNotification("~r~Quickly move your vehicle so another can be pulled out of the garage.")
    end)
end

function DisplayHelpText(text)
    SetTextComponentFormat("STRING")
    AddTextComponentString(text)
    DisplayHelpTextFromStringLabel(0, 0, 1, -1)
end
function ShowNotification(text)
    SetNotificationTextEntry("STRING")
    AddTextComponentString(text)
    DrawNotification(false, false)
end