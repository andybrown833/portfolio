local locations = {
    {loc = "sandy_shores", x = 1860.92, y = 3707.55, z = 32.02},
    {loc = "mission_row", x = 450.02, y = -1013.09, z = 27.49},
    {loc = "paleto_bay", x = -452.27, y = 5990.65, z = 30.20},
    {loc = "sasp_hq", x = 2501.48, y = -462.98, z = 92.1},
    {loc = "vespucci", x = -1069.34, y = -852.01, z = 3.90},
    {loc = "la_mesa", x = 823.75, y = -1371.1, z = 25.0},
    {loc = "rockford", x = -568.19, y = -149.75, z = 37.0},
    {loc = "davis", x = 383.14, y = -1623.99, z = 28.2},
    {loc = "vinewood", x = 539.13, y = -40.21, z = 69.8},
    -- {loc = "port", x = -568.19, y = -149.75, z = 37.0},
    -- {loc = "lsia", x = -568.19, y = -149.75, z = 37.0},
}
-- STORE YOUR VEHICLE
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        if(exports.fwCore:pushCharacterType() == 'LEO') then
            if IsPedInAnyVehicle(PlayerPedId(), false) then
                if(GetVehicleClass(GetPlayersLastVehicle()) == 18)then
                    for _, item in pairs(locations) do
                        DrawMarker(1, item.x, item.y, item.z, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.5, 3.5, 1.0, 255, 0, 0, 100, false, false, 2, nil, nil, false)
                        plyCoords = GetEntityCoords(GetPlayerPed(-1), 0)
                        distance = GetDistanceBetweenCoords(item.x, item.y, item.z,  plyCoords["x"], plyCoords["y"], plyCoords["z"], true)
                        if(distance < 3.0) then
                            DisplayHelpText("Press ~INPUT_CONTEXT~ to store your vehicle.")
                            if IsControlJustPressed(1, 350) then
                                -- ACTION (DELETE VEHICLE & TELEPORT PERSON TO POINT)
                                TriggerEvent("delveh2")
                            end
                        end
                    end
                end
            end
        end
    end
end)

AddEventHandler("delveh2", function()
	local ped = GetPlayerPed(-1)
	if (IsPedSittingInAnyVehicle(ped)) then
		local vehicle = GetVehiclePedIsIn(ped, false)
		if (GetPedInVehicleSeat(vehicle, -1) == ped) then
			SetEntityAsMissionEntity(vehicle, true, true)
			Citizen.InvokeNative(0xEA386986E786A54F, Citizen.PointerValueIntInitialized(vehicle))
            if not (DoesEntityExist(vehicle)) then
                ShowNotification("~b~Success: ~w~Vehicle Stored.")
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
