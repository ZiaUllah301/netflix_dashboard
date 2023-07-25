import { useState } from 'react'
import './App.css'
// import{BrowseRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Dashboard from './Components/Dashboard'
import MovieTable from './Components/MovieTabel'
import MovieList from './Components/MovieList'

function App() {
  

  return (
    <>
    {/* <Router> */}
    <Navbar/>
    <div className='min-h-screen px-6 bg-[#000019]'>
<div className='grid grid-cols-8 gap-10 items-start md:py-12 py-6'>
  <div className='hidden md:block col-span-2 sticky border border-gray-800 bg-[#000025] rounded-md xl:mb-0 mb-5'>
  <Dashboard/>
  </div>
<div className='col-span-8 md:col-span-6 rounded-md bg-[#000025] border border-gray-800 p-6'>
<MovieTable/>
<MovieList/>
{/* <Routes>

</Routes> */}
</div>
</div>
    </div>
    {/* </Router> */}
   
    
    
    </>
  )
}

export default App
