import React,{ useState } from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap';
import { saveVehicleAPI } from '../services/allAPI';

const Add = ({setAddresponseFromHome}) => {
  
const[vehicleDetails,setvehicleDetails] = useState({
    Name:"",imgUrl:"",price:""
})
console.log(vehicleDetails);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUploadVehicledetails = async()=>{
    const {Name,imgUrl,price}= vehicleDetails
    if(Name && imgUrl && price){
        // store details permenetally
       try{
        const result = await saveVehicleAPI(vehicleDetails)
        console.log(result);
        if(result.status>=200 && result.status<300){
          handleClose()
          setAddresponseFromHome(result)
        }else{
          console.log(result); 
        }
       }catch(err){
        console.log(err);
        
       }

    }else{
        alert("please fill the form")
    }
  }


    return (
        <>
       
        <div className=' d-flex justify-content-around' style={{marginLeft:"40px"}} >
            <h3 className='text-warning mt-5'>Upload your vehicle details</h3>
            <button onClick={handleShow} style={{marginLeft:"30px",padding:"10px 30px",marginTop:"20px"}} className='btn btn-warning fw-bolder fs-3 '>+</button>
        </div>

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
        <Form.Control onChange={e=>setvehicleDetails({...vehicleDetails,Name:e.target.value})}  type="text" placeholder="Video Name" />
        </FloatingLabel>
 <FloatingLabel className='p-2' controlId="floatingLink" label="Vehicle Url">
 <Form.Control onChange={e=>setvehicleDetails({...vehicleDetails,imgUrl:e.target.value})}  type="text" placeholder="Vehicle price" />
  </FloatingLabel>
  <FloatingLabel className='p-2' controlId="floatingptice" label="Vehicle price">
 <Form.Control onChange={e=>setvehicleDetails({...vehicleDetails,price:e.target.value})}  type="text" placeholder="vehicle price" />
  </FloatingLabel>

 </div>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button onClick={handleUploadVehicledetails} variant="primary">Add</Button>
</Modal.Footer>
</Modal>
</>  
)

}

export default Add