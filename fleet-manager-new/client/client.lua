local display = false
local playerID = PlayerId()
local serverID = GetPlayerServerId(playerID)
local playerPedID = PlayerPedId()


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

function SetDisplay(bool)
      display = bool
      SetNuiFocus(bool, bool)
      SendNUIMessage({
            type = "ui",
            status = bool,
            name = exports.fwCore:pushCharacterName()
      })
end

AddEventHandler("Open_fwFleetManager", function(eventParam1, eventParam2)
      SetDisplay(true)
      SetNuiFocus(true, true)
end)

RegisterNUICallback("exit", function(data)
      SetDisplay(false)
      SetNuiFocus(false, false)
end)


-- ---------------------------------------------------------------------
-- VEHICLE SPAWN SECTIONS ----------------------------------------------
-- ---------------------------------------------------------------------
RegisterNUICallback("spawnVehicle", function(data)
      vehicle = data.veh
      package = data.package

      if package == 'patrol' then

            -- SASP
            if vehicle == 'legacycharg2' then
                  SpawnVehicle("legacycharg2", 0,0,1,0,1,0, 1,1, 1,0,0,1, 0)
            elseif vehicle == 'legacycharg' then
                  SpawnVehicle("legacycharg", 0,0,1,0,1,0, 1,1, 1,0,0,1, 0)
            elseif vehicle == 'legacyfpiu' then
                  SpawnVehicle("legacyfpiu", 0,0,1,0,1,0, 1,1, 0,1,0,1, 0)
            elseif vehicle == 'legacyfpis' then
                  SpawnVehicle("legacyfpis", 0,0,1,0,1,0, 1,1, 1,0,0,1, 0)
            elseif vehicle == 'legacytahoe' then
                  SpawnVehicle("legacytahoe", 0,0,1,0,1,0, 1,1, 0,1,0,1, 0)
            elseif vehicle == 'legacyram' then
                  SpawnVehicle("legacyram", 0,0,1,0,1,0, 1,1, 0,1,0,1, 0)
            elseif vehicle == 'legacycap' then
                  SpawnVehicle("legacycap", 0,0,1,0,1,0, 1,1, 1,0,0,1, 0)
            elseif vehicle == 'legacycvpi' then
                  SpawnVehicle("legacycvpi", 0,0,1,0,1,0, 1,1, 0,1,0,1, 0)
            end

      elseif package == 'slicktop' then

            -- SASP
            if vehicle == 'legacycharg2' then
                  SpawnVehicle("legacycharg2", 1,0,1,0,0,0, 1,1, 1,0,0,1, 0)
            elseif vehicle == 'legacycharg' then
                  SpawnVehicle("legacycharg", 1,0,1,0,0,0, 1,1, 1,0,0,1, 0)
            elseif vehicle == 'legacyfpiu' then
                  SpawnVehicle("legacyfpiu", 1,0,1,0,0,0, 1,1, 0,1,0,1, 0)
            elseif vehicle == 'legacyfpis' then
                  SpawnVehicle("legacyfpis", 1,0,1,0,0,0, 1,1, 1,0,0,1, 0)
            elseif vehicle == 'legacytahoe' then
                  SpawnVehicle("legacytahoe", 1,0,1,0,0,0, 1,1, 0,1,0,1, 0)
            elseif vehicle == 'legacyram' then
                  SpawnVehicle("legacyram", 1,0,1,0,0,0, 1,1, 0,1,0,1, 0)
            elseif vehicle == 'legacycap' then
                  SpawnVehicle("legacycap", 1,0,1,0,0,0, 1,1, 1,0,0,1, 0)
            elseif vehicle == 'legacycvpi' then
                  SpawnVehicle("legacycvpi", 1,0,1,0,0,0, 1,1, 0,1,0,1, 0)
            end      
            
      elseif package == 'unmarked' then

            -- SASP
            if vehicle == 'legacycharg2' then
                  SpawnVehicle("legacycharg2", 1,0,1,0,0,0, 1,1, 1,0,0,1, 1)
            elseif vehicle == 'legacycharg' then
                  SpawnVehicle("legacycharg", 1,0,1,0,0,0, 1,1, 1,0,0,1, 1)
            elseif vehicle == 'legacyfpiu' then
                  SpawnVehicle("legacyfpiu", 1,0,1,0,0,0, 1,1, 0,1,0,1, 1)
            elseif vehicle == 'legacyfpis' then
                  SpawnVehicle("legacyfpis", 1,0,1,0,0,0, 1,1, 1,0,0,1, 1)
            elseif vehicle == 'legacytahoe' then
                  SpawnVehicle("legacytahoe", 1,0,1,0,0,0, 1,1, 0,1,0,1, 1)
            elseif vehicle == 'legacyram' then
                  SpawnVehicle("legacyram", 1,0,1,0,0,0, 1,1, 0,1,0,1, 1)
            elseif vehicle == 'legacycap' then
                  SpawnVehicle("legacycap", 1,0,1,0,0,0, 1,1, 1,0,0,1, 1)
            elseif vehicle == 'legacycvpi' then
                  SpawnVehicle("legacycvpi", 1,0,1,0,0,0, 1,1, 0,1,0,1, 1)
            end

      end

end)



function SpawnVehicle(veh, ex1,ex2,ex3,ex4,ex5,ex6,ex7,ex8,ex9,ex10,ex11,ex12, liv) -- ex1-12 (1/0) -- liv(int)
      local plate = exports.fwCore:pushUserIdentifier()
      local vehiclehash = GetHashKey(veh)
      local vehicle2 = RequestModel(vehiclehash)

      local spawn_x = WhichLocation_X
      local spawn_y = WhichLocation_Y
      local spawn_z = WhichLocation_Z
      local spawn_h = WhichLocation_H

      Citizen.CreateThread(function()
            Citizen.Wait(1000)

            vehicle3 = CreateVehicle(vehiclehash, spawn_x, spawn_y, spawn_z, spawn_h, true, true)
            SetVehicleCustomPrimaryColour(vehicle3, 255, 255, 255)
            SetVehicleLivery(vehicle3, liv)
            SetVehicleExtra(vehicle3, 1, ex1)
            SetVehicleExtra(vehicle3, 2, ex2)
            SetVehicleExtra(vehicle3, 3, ex3)
            SetVehicleExtra(vehicle3, 4, ex4)
            SetVehicleExtra(vehicle3, 5, ex5)
            SetVehicleExtra(vehicle3, 6, ex6)
            SetVehicleExtra(vehicle3, 7, ex7)
            SetVehicleExtra(vehicle3, 8, ex8)
            SetVehicleExtra(vehicle3, 9, ex9)
            SetVehicleExtra(vehicle3, 10, ex10)
            SetVehicleExtra(vehicle3, 11, ex11)
            SetVehicleExtra(vehicle3, 12, ex12)
            SetVehicleNumberPlateText(vehicle3, plate)
            if SetPedIntoVehicle(GetPlayerPed(-1), vehicle3, -1) then
                  SetDisplay(false)
                  SetNuiFocus(false, false)
            end
            ShowNotification("~g~Vehicle Checked Out")
            ShowNotification("~r~Quickly move your vehicle so another can be pulled out of the garage.")
            
      end)
  end