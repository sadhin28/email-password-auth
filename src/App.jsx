
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-50px)]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
