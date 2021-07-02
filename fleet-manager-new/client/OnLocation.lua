local locations = {
      {loc = "sandy_shores", x = 1866.43, y = 3688.46, z = 33.3, spawn_x = 1874.24, spawn_y = 3694.23, spawn_z = 33.16, spawn_h = 212.29 },
      { loc = "mission_row", x = 441.6, y = -1001.52, z = 29.75, spawn_x = 431.28, spawn_y = -1014.56, spawn_z = 28.33, spawn_h = 179.22 },
      {loc = "paleto_bay", x = -452.15, y = 6005.76, z = 31.01, spawn_x = -457.45, spawn_y = 5995.24, spawn_z = 31.5, spawn_h = 43.23 },
      {loc = "sasp_hq", x = 2528.19, y = -454.36, z = 92.2, spawn_x = 2521.56, spawn_y = -460.88, spawn_z = 92.67, spawn_h = 181.03 },
      {loc = "vespucci", x = -1078.79, y = -856.65, z = 4.05, spawn_x = -1069.79, spawn_y = -859.67, spawn_z = 4.55, spawn_h = 217.49 },
      {loc = "la_mesa", x = 830.23, y = -1311.5, z = 27.15, spawn_x = 856.38, spawn_y = -1333.29, spawn_z = 25.8, spawn_h = 38.11 },
      {loc = "rockford", x = -566.43, y = -133.34, z = 37.02, spawn_x = -583.72, spawn_y = -156.4, spawn_z = 37.61, spawn_h = 113.14 },
      {loc = "davis", x = 370.11, y = -1607.94, z = 28.3, spawn_x = 378.19, spawn_y = -1613.93, spawn_z = 28.97, spawn_h = 230.07 },
      {loc = "vinewood", x = 621.4, y = 17.67, z = 86.95, spawn_x = 627.08, spawn_y = 24.41, spawn_z = 87.48, spawn_h = 249.41 },
      -- {loc = "port", x = -568.19, y = -149.75, z = 37.0, spawn_x = 431.28, spawn_y = -1014.56, spawn_z = 28.33, spawn_h = 179.22 },
      -- {loc = "lsia", x = -568.19, y = -149.75, z = 37.0, spawn_x = 431.28, spawn_y = -1014.56, spawn_z = 28.33, spawn_h = 179.22 },
}

WhichLocation = '';
WhichLocation_X = '';
WhichLocation_Y = '';
WhichLocation_Z = '';
WhichLocation_H = '';

Citizen.CreateThread(function()
      while true do
          Citizen.Wait(0)
            if(exports.fwCore:pushCharacterType() == 'LEO') then
                  for _, item in pairs(locations) do
                        DrawMarker(23, item.x, item.y, item.z, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0, 0, 255, 100, false, false, 2, nil, nil, false)
                        DrawMarker(36, item.x, item.y, item.z + 0.75, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.75, 0.75, 0.75, 50, 0, 255, 100, false, false, 2, 0.25, nil, false)
                        plyCoords = GetEntityCoords(GetPlayerPed(-1), 0)
                        distance = GetDistanceBetweenCoords(item.x, item.y, item.z,  plyCoords["x"], plyCoords["y"], plyCoords["z"], true)
                        if(distance < 1.35) then
                              DisplayHelpText("Press ~INPUT_CONTEXT~ to open the fleet manager.")
                              if IsControlJustPressed(1, 350) then
                                    WhichLocation = item.loc
                                    WhichLocation_X = item.spawn_x
                                    WhichLocation_Y = item.spawn_y
                                    WhichLocation_Z = item.spawn_z
                                    WhichLocation_H = item.spawn_h
                                    -- ACTION (OPEN FLEET MANAGER MENU)
                                    TriggerEvent("Open_fwFleetManager")
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
