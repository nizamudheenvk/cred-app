import React from 'react'
import { Navbar,Container, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <Navbar style={{zIndex:"1"}} className="bg-dark  w-100">
          <Container>
            <Link to={'/'} style={{textDecoration:"none"}}>
            <Navbar.Brand to={'./Landing'} style={{color:"white"}} className='fs-5 fw-bolder'>
              Garrage
   </Navbar.Brand>
            </Link>

          </Container>
               

        </Navbar>
    )
  }
  
  export default Header