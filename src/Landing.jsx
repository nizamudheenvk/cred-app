import React from 'react';
import carbg from '../src/assets/car2.jpg';
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <div style={{
      padding: "100px",
      backgroundImage: `url(${carbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    }}>
      <h1 style={{ fontSize: "60px" }} className='text-center fw-bolder'>GARRAGE</h1>
      <Link to={'./home'} className='btn btn-dark text-white ' style={{marginLeft:"520px"}} > View Latest Collections <i className='fa-solid fa-arrow-right text-white me-2'></i> </Link>
    </div>
  );
}

export default Landing;