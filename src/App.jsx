
import { Outlet } from 'react-router-dom'


import Navbar from './Component/Navbar'
import Home from './Component/Home'

function App() {


  return (
    <>

     <Navbar></Navbar>
     <Home></Home>
     <Outlet />
    </>
  )
}

export default App
