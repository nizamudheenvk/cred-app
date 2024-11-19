import React,{useState} from 'react'
import Add from './components/Add'
import View from './components/View'
import carbg from '../src/assets/carbg.jpg'
import Footer from '../src/components/Footer'
const Home = () => {
  const [addresponseFromHome,setAddresponseFromHome]=useState("")

  return (
    <><div 
    style={{
      backgroundImage:`url(${carbg})`,
      backgroundSize:"cover"
      
      }}>
      <div className="c mb-5 d-flex justify-content-between">
        <Add setAddresponseFromHome={setAddresponseFromHome}/>
      </div>
      <div className='container'>
        <View addresponseFromHome={addresponseFromHome}/>
      </div>
      </div>
      <Footer/>
      </>
  )
}

export default Home