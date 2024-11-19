import React, { useEffect, useState } from 'react'
import { Col,Row } from 'react-bootstrap'
import Cards from './Cards'
import { getVehicleAPI } from '../services/allAPI'

const View = ({addresponseFromHome}) => {
  const [deletcardResponsefromvehicleCard,setdeletcardResponsefromvehicleCard] = useState("")

  const [allVehicles,setallVehicles]=useState([])

  useEffect(()=>{
    getAllvehicles()
  },[addresponseFromHome,deletcardResponsefromvehicleCard,allVehicles])
  console.log(allVehicles);

const getAllvehicles = async()=>{
  try{
    const result = await getVehicleAPI()
    console.log(result);
    if(result.status>=200 && result.status<300){
      setallVehicles(result.data)
    }
    
  }catch(err){
    console.log(err);
    
  }
}


  return (
   <Row>
{
  allVehicles?.length>0?
  allVehicles?.map(vehicles=>(
    <Col key={vehicles?.id} className='mb-2' sm={12} md={6} lg={4}>
    <Cards displayData={vehicles} setdeletcardResponsefromvehicleCard={setdeletcardResponsefromvehicleCard}/>
    </Col>

  ))

  :
  <div className='text-danger fw-bolder fs-3'>no vehicles are added</div>
}    </Row>
    

)
}

export default View