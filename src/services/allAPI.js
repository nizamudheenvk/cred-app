import commonApi from "./commonapi"
import SERVERURL from "./severURL"

export const saveVehicleAPI = async (vehicleDetails)=>{
    return await commonApi("POST",`${SERVERURL}/uploadvideos`,vehicleDetails)
    }

export const getVehicleAPI = async ()=>{
    return await commonApi("GET",`${SERVERURL}/uploadvideos`,{})
    }

export const deletevehicleCardApi = async (id)=>{
    return await commonApi("DELETE",`${SERVERURL}/uploadvideos/${id}`,{})
    }

    export const updatevehicleCardApi = async (vehicleDetails)=>{
        return await commonApi("PUT",`${SERVERURL}/uploadvideos/${vehicleDetails.id}`,vehicleDetails)
        }
    