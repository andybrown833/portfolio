local locations = {
      {loc = "sandy_shores", x = 1849.03, y = 3690.14, z = 34.27-1.15},
      { loc = "mission_row", x = 452.22, y = -980.11, z = 29.65 },
      {loc = "paleto_bay", x = -448.8, y = 6008.73, z = 30.6},
      -- {loc = "sasp_hq", x = 2501.48, y = -462.98, z = 92.1},
      {loc = "vespucci", x = -1057.78, y = -840.99, z = 4.0},
      {loc = "la_mesa", x = 847.15, y = -1315.12, z = 25.3},
      {loc = "rockford", x = -557.19, y = -129.36, z = 37.0},
      {loc = "davis", x = 371.56, y = -1612.53, z = 28.2},
      {loc = "vinewood", x = 618.87, y = 18.51, z = 86.9},
      -- {loc = "port", x = -568.19, y = -149.75, z = 37.0},
      -- {loc = "lsia", x = -568.19, y = -149.75, z = 37.0},
}

Citizen.CreateThread(function()
      while true do
          Citizen.Wait(0)
            if(exports.fwCore:pushCharacterType() == 'LEO') then
                  for _, item in pairs(locations) do
                        DrawMarker(1, item.x, item.y, item.z, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0, 0, 255, 100, false, false, 2, nil, nil, false)
                        plyCoords = GetEntityCoords(GetPlayerPed(-1), 0)
                        distance = GetDistanceBetweenCoords(item.x, item.y, item.z,  plyCoords["x"], plyCoords["y"], plyCoords["z"], true)
                        if(distance < 1.35) then
                              DisplayHelpText("Press ~INPUT_CONTEXT~ to open.")
                              if IsControlJustPressed(1, 350) then
                                    -- ACTION (OPEN ARMOURY MENU)
                                    TriggerEvent("openmenu")
                              end
                        end
                  end
            end
      end
end)


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
