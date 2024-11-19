import { Route,Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Home'
import Landing from './Landing'


function App() {

  return (
    <>
          <Header/>
          <Routes>
          <Route path='/'element={<Landing/>}/>
          <Route path='/Home' element={<Home/>}/>
          </Routes>
          

    </>
  )
}

export default App
