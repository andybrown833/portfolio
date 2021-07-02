local display = false
local playerID = PlayerId()
local serverID = GetPlayerServerId(playerID)
local playerPedID = PlayerPedId()





AddEventHandler("openmenu", function(eventParam1, eventParam2)
      SetDisplay(true)
      SetNuiFocus(true, true)
end)


function SetDisplay(bool)
      display = bool
      SetNuiFocus(bool, bool)
      SendNUIMessage({
            type = "ui",
            status = bool,
            name = exports.fwCore:pushCharacterName()
      })
end

RegisterNUICallback("exit", function(data)
      print('should have exited')
      SetDisplay(false)
end)


RegisterNUICallback("removeWeapon", function(data)
      local weapon = tostring(data.weapon)
      if weapon == "flashlight" then
            RemoveWeaponFromPed(playerPedID, 0x8BB05FD7)
      elseif weapon == "9mm" then
            RemoveWeaponFromPed(playerPedID, 0x1B06D571)
      elseif weapon == "glock" then
            RemoveWeaponFromPed(playerPedID, 0x5EF9FEC4)
      elseif weapon == "tazer" then
            RemoveWeaponFromPed(playerPedID, 0x3656C8C1)
      elseif weapon == "knife" then
            RemoveWeaponFromPed(playerPedID, 0x99B507EA)
      elseif weapon == "nightstick" then
            RemoveWeaponFromPed(playerPedID, 0x678B81B1)
      end
end)

RegisterNUICallback("addWeapon", function(data)
      local weapon = tostring(data.weapon)
      if weapon == "flashlight" then
            GiveWeaponToPed(playerPedID, 0x8BB05FD7, 48, false, false)
      elseif weapon == "9mm" then
            GiveWeaponToPed(playerPedID, 0x1B06D571, 48, false, false)
            GiveWeaponComponentToPed(playerPedID, 0x1B06D571, 0x359B7AAE) -- flashlight attachment
      elseif weapon == "glock" then
            GiveWeaponToPed(playerPedID, 0x5EF9FEC4, 48, false, false)
            GiveWeaponComponentToPed(playerPedID, 0x5EF9FEC4, 0x359B7AAE) -- flashlight attachment
      elseif weapon == "tazer" then
            GiveWeaponToPed(playerPedID, 0x3656C8C1, 48, false, false)
      elseif weapon == "knife" then
            GiveWeaponToPed(playerPedID, 0x99B507EA, 48, false, false)
      elseif weapon == "nightstick" then
            GiveWeaponToPed(playerPedID, 0x678B81B1, 48, false, false)
      end
      
end)




-- RegisterNUICallback("getLoadout", function(data)

--       RemoveAllPedWeapons(playerPedID, true)
--       local CombatPistol = GiveWeaponToPed(playerPedID, 0x5EF9FEC4 , 48, false, false) -- COMBAT PISTOL
--       GiveWeaponComponentToPed(playerPedID, 0x5EF9FEC4, 0x359B7AAE) -- flashlight attachment
--       local Tazer = GiveWeaponToPed(playerPedID, 0x3656C8C1 , 48, false, false) -- TAZER
--       local Flashlight = GiveWeaponToPed(playerPedID, 0x8BB05FD7 , 48, false, false) -- FLASHLIGHT
--       local NightStick = GiveWeaponToPed(playerPedID, 0x678B81B1 , 48, false, false) -- BATON


--       print('success')
--       SetDisplay(false)
-- end)