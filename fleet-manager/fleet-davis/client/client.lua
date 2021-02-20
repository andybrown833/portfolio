-- LOCALS
local marker_x = 370.11
local marker_y = -1607.94
local marker_z = 28.3
local spawn_x = 378.19
local spawn_y = -1613.93
local spawn_z = 28.97
local spawn_h = 230.07

-- VEHICLE GARAGE MARKER
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        if(exports.fwCore:pushCharacterType() == 'LEO') then
            DrawMarker(23, marker_x, marker_y, marker_z, 0.0, 0.0, 0.0, 0.0, 180.0, 0.0, 1.5, 1.5, 1.5, 50, 143, 168, 150, false, false, 2, nil, nil, false)
            DrawMarker(36, marker_x, marker_y, marker_z + 0.75, 0.0, 0.0, 0.0, 0.0, 0, 0.0, 1.0, 1.0, 1.0, 50, 143, 168, 150, false, false, 2, 0.5, nil, false)
            plyCoords = GetEntityCoords(GetPlayerPed(-1), 0)
            distance = GetDistanceBetweenCoords(marker_x, marker_y, marker_z, plyCoords["x"], plyCoords["y"], plyCoords["z"], true)
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
function SASPMenu(menu)
    local main = _menuPool:AddSubMenu(menu, "San Andreas State Police", nil, nil, Menuthing, Menuthing)

    -- 2011 Ford CVPI
    local cvpi = _menuPool:AddSubMenu(main, "2011 Ford CVPI", nil, nil, Menuthing, Menuthing)
    local cvpi_opt1 = NativeUI.CreateItem('Patrol Package','')
    local cvpi_opt2 = NativeUI.CreateItem('SlickTop Package','')
    local cvpi_opt3 = NativeUI.CreateItem('Unmarked Package','')
    cvpi:AddItem(cvpi_opt1)
    cvpi:AddItem(cvpi_opt2)
    cvpi:AddItem(cvpi_opt3)
    cvpi.OnItemSelect = function(sender, item, index)
        if item == cvpi_opt1 then
            SpawnVehicle("legacycvpi", spawn_x, spawn_y, spawn_z, spawn_h, 0,0,1,0,1,0, 1,1, 0,1,0,1, 0) -- 0(yes) 1(no)
        elseif item == cvpi_opt2 then
            SpawnVehicle("legacycvpi", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 0,1,0,1, 0) -- 0(yes) 1(no)
        elseif item == cvpi_opt3 then
            SpawnVehicle("legacycvpi", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 0,1,0,1, 1) -- 0(yes) 1(no)
        end
    end

    -- 2014 Dodge Charger
    local charg14 = _menuPool:AddSubMenu(main, "2014 Dodge Charger", nil, nil, Menuthing, Menuthing)
    local charg14_opt1 = NativeUI.CreateItem('Patrol Package','')
    local charg14_opt2 = NativeUI.CreateItem('SlickTop Package','')
    local charg14_opt3 = NativeUI.CreateItem('Unmarked Package','')
    charg14:AddItem(charg14_opt1)
    charg14:AddItem(charg14_opt2)
    charg14:AddItem(charg14_opt3)
    charg14.OnItemSelect = function(sender, item, index)
        if item == charg14_opt1 then
            SpawnVehicle("legacycharg2", spawn_x, spawn_y, spawn_z, spawn_h, 0,0,1,0,1,0, 1,1, 1,0,0,1, 0) -- 0(yes) 1(no)
        elseif item == charg14_opt2 then
            SpawnVehicle("legacycharg2", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 1,0,0,1, 0) -- 0(yes) 1(no)
        elseif item == charg14_opt3 then
            SpawnVehicle("legacycharg2", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 1,0,0,1, 1) -- 0(yes) 1(no)
        end
    end

    -- 2018 Dodge Charger
    local charg18 = _menuPool:AddSubMenu(main, "2018 Dodge Charger", nil, nil, Menuthing, Menuthing)
    local charg18_opt1 = NativeUI.CreateItem('Patrol Package','')
    local charg18_opt2 = NativeUI.CreateItem('SlickTop Package','')
    local charg18_opt3 = NativeUI.CreateItem('Unmarked Package','')
    charg18:AddItem(charg18_opt1)
    charg18:AddItem(charg18_opt2)
    charg18:AddItem(charg18_opt3)
    charg18.OnItemSelect = function(sender, item, index)
        if item == charg18_opt1 then
            SpawnVehicle("legacycharg", spawn_x, spawn_y, spawn_z, spawn_h, 0,0,1,0,1,0, 1,1, 1,0,0,1, 0) -- 0(yes) 1(no)
        elseif item == charg18_opt2 then
            SpawnVehicle("legacycharg", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 1,0,0,1, 0) -- 0(yes) 1(no)
        elseif item == charg18_opt3 then
            SpawnVehicle("legacycharg", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 1,0,0,1, 1) -- 0(yes) 1(no)
        end
    end

    -- 2016 CAPRICE
    local cap = _menuPool:AddSubMenu(main, "2014 Chevy Caprice", nil, nil, Menuthing, Menuthing)
    local cap_opt1 = NativeUI.CreateItem('Patrol Package','')
    local cap_opt2 = NativeUI.CreateItem('SlickTop Package','')
    local cap_opt3 = NativeUI.CreateItem('Unmarked Package','')
    cap:AddItem(cap_opt1)
    cap:AddItem(cap_opt2)
    cap:AddItem(cap_opt3)
    cap.OnItemSelect = function(sender, item, index)
        if item == cap_opt1 then
            SpawnVehicle("legacycap", spawn_x, spawn_y, spawn_z, spawn_h, 0,0,1,0,1,0, 1,1, 1,0,0,1, 0) -- 0(yes) 1(no)
        elseif item == cap_opt2 then
            SpawnVehicle("legacycap", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 1,0,0,1, 0) -- 0(yes) 1(no)
        elseif item == cap_opt3 then
            SpawnVehicle("legacycap", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 1,0,0,1, 1) -- 0(yes) 1(no)
        end
    end

    -- 2016 FPIS
    local fpis = _menuPool:AddSubMenu(main, "2014 Ford Taurus", nil, nil, Menuthing, Menuthing)
    local fpis_opt1 = NativeUI.CreateItem('Patrol Package','')
    local fpis_opt2 = NativeUI.CreateItem('SlickTop Package','')
    local fpis_opt3 = NativeUI.CreateItem('Unmarked Package','')
    fpis:AddItem(fpis_opt1)
    fpis:AddItem(fpis_opt2)
    fpis:AddItem(fpis_opt3)
    fpis.OnItemSelect = function(sender, item, index)
        if item == fpis_opt1 then
            SpawnVehicle("legacyfpis", spawn_x, spawn_y, spawn_z, spawn_h, 0,0,1,0,1,0, 1,1, 1,0,0,1, 0) -- 0(yes) 1(no)
        elseif item == fpis_opt2 then
            SpawnVehicle("legacyfpis", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 1,0,0,1, 0) -- 0(yes) 1(no)
        elseif item == fpis_opt3 then
            SpawnVehicle("legacyfpis", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 1,0,0,1, 1) -- 0(yes) 1(no)
        end
    end

    -- 2016 FPIU
    local fpiu = _menuPool:AddSubMenu(main, "2014 Ford Explorer", nil, nil, Menuthing, Menuthing)
    local fpiu_opt1 = NativeUI.CreateItem('Patrol Package','')
    local fpiu_opt2 = NativeUI.CreateItem('SlickTop Package','')
    local fpiu_opt3 = NativeUI.CreateItem('Unmarked Package','')
    fpiu:AddItem(fpiu_opt1)
    fpiu:AddItem(fpiu_opt2)
    fpiu:AddItem(fpiu_opt3)
    fpiu.OnItemSelect = function(sender, item, index)
        if item == fpiu_opt1 then
            SpawnVehicle("legacyfpiu", spawn_x, spawn_y, spawn_z, spawn_h, 0,0,1,0,1,0, 1,1, 0,1,0,1, 0) -- 0(yes) 1(no)
        elseif item == fpiu_opt2 then
            SpawnVehicle("legacyfpiu", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 0,1,0,1, 0) -- 0(yes) 1(no)
        elseif item == fpiu_opt3 then
            SpawnVehicle("legacyfpiu", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 0,1,0,1, 1) -- 0(yes) 1(no)
        end
    end

    -- 2018 Chevy Tahoe
    local tahoe18 = _menuPool:AddSubMenu(main, "2018 Chevy Tahoe", nil, nil, Menuthing, Menuthing)
    local tahoe18_opt1 = NativeUI.CreateItem('Patrol Package','')
    local tahoe18_opt2 = NativeUI.CreateItem('SlickTop Package','')
    local tahoe18_opt3 = NativeUI.CreateItem('Unmarked Package','')
    tahoe18:AddItem(tahoe18_opt1)
    tahoe18:AddItem(tahoe18_opt2)
    tahoe18:AddItem(tahoe18_opt3)
    tahoe18.OnItemSelect = function(sender, item, index)
        if item == tahoe18_opt1 then
            SpawnVehicle("legacytahoe", spawn_x, spawn_y, spawn_z, spawn_h, 0,0,1,0,1,0, 1,1, 0,1,0,1, 0) -- 0(yes) 1(no)
        elseif item == tahoe18_opt2 then
            SpawnVehicle("legacytahoe", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 0,1,0,1, 0) -- 0(yes) 1(no)
        elseif item == tahoe18_opt3 then
            SpawnVehicle("legacytahoe", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 0,1,0,1, 1) -- 0(yes) 1(no)
        end
    end

    -- 2016 Dodge Ram
    local ram = _menuPool:AddSubMenu(main, "2016 Dodge Ram", nil, nil, Menuthing, Menuthing)
    local ram_opt1 = NativeUI.CreateItem('Patrol Package','')
    local ram_opt2 = NativeUI.CreateItem('SlickTop Package','')
    local ram_opt3 = NativeUI.CreateItem('Unmarked Package','')
    ram:AddItem(ram_opt1)
    ram:AddItem(ram_opt2)
    ram:AddItem(ram_opt3)
    ram.OnItemSelect = function(sender, item, index)
        if item == ram_opt1 then
            SpawnVehicle("legacyram", spawn_x, spawn_y, spawn_z, spawn_h, 0,0,1,0,1,0, 1,1, 0,1,0,1, 0) -- 0(yes) 1(no)
        elseif item == ram_opt2 then
            SpawnVehicle("legacyram", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 0,1,0,1, 0) -- 0(yes) 1(no)
        elseif item == ram_opt3 then
            SpawnVehicle("legacyram", spawn_x, spawn_y, spawn_z, spawn_h, 1,0,1,0,0,0, 1,1, 0,1,0,1, 1) -- 0(yes) 1(no)
        end
    end


end

-- LSPD
function LSPDMenu(menu)
    local main = _menuPool:AddSubMenu(menu, "Los Santos Police Department", "", "", Menuthing, Menuthing)
    
end

-- BCSO
function BCSOMenu(menu)
    local main = _menuPool:AddSubMenu(menu, "Blaine County Sheriff's Office", "", "", Menuthing, Menuthing)

end

-- UTILITY
function UtilityMenu(menu)
    local main = _menuPool:AddSubMenu(menu, "Utility Vehicles", "", "", Menuthing, Menuthing)

end


-- GarageMenu(mainMenu)
SASPMenu(mainMenu)
-- LSPDMenu(mainMenu)
-- BCSOMenu(mainMenu)
UtilityMenu(mainMenu)

_menuPool:RefreshIndex()
_menuPool:MouseControlsEnabled(false)
_menuPool:ControlDisablingEnabled(false)

-- VEHICLES
function SpawnVehicle(veh, x,y,z,h, ex1,ex2,ex3,ex4,ex5,ex6,ex7,ex8,ex9,ex10,ex11,ex12, liv) -- ex1-12 (1/0) -- liv(int)
    local plate = exports.fwCore:pushUserIdentifier()
    local vehiclehash = GetHashKey(veh)
    RequestModel(vehiclehash)
    print('WE GOT HERE')
    Citizen.CreateThread(function()
        Citizen.Wait(100)
        print('NO')
        mainMenu:Visible(false)
        vehicle2 = CreateVehicle(vehiclehash, x,y,z,h, true, true)
        SetVehicleCustomPrimaryColour(vehicle2, 255, 255, 255)
        SetVehicleLivery(vehicle2, liv)
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