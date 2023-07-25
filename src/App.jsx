import { useState } from 'react'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import MovieList from './Components/MovieList'
import Categories from './Components/Categories'
import User from './Components/User'
import FavoritesMovies from './Components/FavoritesMovies'
import ChangePassword from './Components/ChangePassword'
import Footer from './Components/Footer'
import UpdateProfile from './Components/UpdateProfile'


function App() {
  

  return (
    <>
    <Router>
    <Navbar/>
    <div className='min-h-screen px-6 bg-[#000019]'>
<div className='grid grid-cols-8 gap-10 items-start md:py-12 py-6'>
  <div className='hidden md:block col-span-2 sticky border border-gray-800 bg-[#000025] rounded-md xl:mb-0 mb-5'>
  <Sidebar/>
  </div>
<div className='col-span-8 md:col-span-6 rounded-md bg-[#000025] border border-gray-800 p-6'>
<Routes>
<Route path='/dashboard' element={<Dashboard />}></Route>
<Route path='/movieslist' element={<MovieList />}></Route>
<Route path='/categories' element={<Categories />}></Route>
<Route path='/user' element={<User />}></Route>
<Route path='/updateprofile' element={<UpdateProfile />}></Route>
<Route path='/favoritesMovies' element={<FavoritesMovies />}></Route>
<Route path='/changepassword' element={<ChangePassword />}></Route>
</Routes>

</div>
</div>
    </div>
    <Footer/>
    </Router>
   
    
    
    </>
  )
}

export default App
