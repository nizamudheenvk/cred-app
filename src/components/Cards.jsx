import React, { useEffect, useState } from 'react'
import { Card, Modal,FloatingLabel,Form,Button } from 'react-bootstrap'
import { deletevehicleCardApi, updatevehicleCardApi } from '../services/allAPI'



const Cards = ({displayData,setdeletcardResponsefromvehicleCard}) => {

const [editVehicleDetails,seteditVehicleDetails] = useState()
useEffect(()=>{

},[editVehicleDetails])
// for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const removeVehicleCard = async (id)=>{
try{
  const result = await deletevehicleCardApi(id)
   setdeletcardResponsefromvehicleCard(result)
}catch(err){
  console.log(err);

}
  }
const handleEdit = (getAllvehicles)=>{
  seteditVehicleDetails(getAllvehicles)
  handleShow()
}

const updateVeivles= async()=>{
  try{
    const result =  await updatevehicleCardApi(editVehicleDetails)
    console.log(result);
    handleClose()
    

  }catch(err){
    console.log(err);
    
  }
}

  return (
    <>
    <Card   style={{height:"350px",width:"300px",color:"white",marginLeft:"60px",backgroundColor:"grey"}} >
    <Card.Img  variant="top" height={"250px"}  src={displayData?.imgUrl} />
    <Card.Body>
      <Card.Title>{displayData?.Name}</Card.Title>
      <Card.Text className='d-flex justify-content-between' > 
      <p >{`price : ${displayData?.price}`}</p>  
      <button onClick={()=>handleEdit(displayData)} style={{marginLeft:"60px"}} className='rounded py-2 px-2 bg-dark text-white'>Edit</button>
{
  <button onClick={()=>removeVehicleCard(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i>  
</button>

} 
   </Card.Text>
    </Card.Body>
  </Card>
  <Modal
show={show}
onHide={handleClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Update vehicle details</Modal.Title>
</Modal.Header>
<Modal.Body>
 <div className='border rounded p-3 '>
 <FloatingLabel className='p-2' controlId="floatingName" label="Vehicle Name">
        <Form.Control value={editVehicleDetails?.Name} onChange={e=>seteditVehicleDetails({...editVehicleDetails,Name:e.target.value})}  type="text" placeholder="Video Name" />
        </FloatingLabel>
 <FloatingLabel className='p-2' controlId="floatingLink" label="Vehicle Url">
 <Form.Control value={editVehicleDetails?.imgUrl} onChange={e=>seteditVehicleDetails({...editVehicleDetails,imgUrl:e.target.value})}  type="text" placeholder="Vehicle price" />
  </FloatingLabel>
  <FloatingLabel className='p-2' controlId="floatingptice" label="Vehicle price">
 <Form.Control value={editVehicleDetails?.price} onChange={e=>seteditVehicleDetails({...editVehicleDetails,price:e.target.value})}  type="text" placeholder="vehicle price" />
  </FloatingLabel>

 </div>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button  onClick={updateVeivles} variant="primary">update</Button>
</Modal.Footer>
</Modal>


</>
  )
}

export default Cards