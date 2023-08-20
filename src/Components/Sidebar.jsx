import React from 'react';
import { AiFillDashboard, AiFillSetting, AiOutlineHeart } from 'react-icons/ai';
import { PiFilmReelThin } from 'react-icons/pi';
import { BsCardList } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col md:flex-row">
     
      <div className="bg-[#000025] text-white p-4 md:w-64">
        <div className="flex items-center mb-4">
          <AiFillDashboard className="h-4 w-4 mr-2" />
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="flex items-center mb-4">
          <BsCardList className="h-4 w-4 mr-2" />
          <Link to="/movieslist">Movies List</Link>
        </div>
        <div className="flex items-center mb-4">
          <PiFilmReelThin className="h-4 w-4 mr-2" />
          <Link to="/addmovies"> Add Movies</Link>
         
        </div>
        <div className="flex items-center mb-4">
          <BiCategory className="h-4 w-4 mr-2" />
          <Link to="/categories">Categories</Link>
        </div>
        <div className="flex items-center mb-4">
          <FaUsers className="h-4 w-4 mr-2" />
          <Link to="/user">  Users</Link>
        
        </div>
        <div className="flex items-center mb-4">
          <AiFillSetting className="h-4 w-4 mr-2" />
          <Link to="/updateprofile">   Update Profile</Link>
         
        </div>
        <div className="flex items-center mb-4">
          <AiOutlineHeart className="h-4 w-4 mr-2" />
          <Link to="/favoritesMovies">   Favorite Movies</Link>
         
        </div>
        <div className="flex items-center mb-4">
          <RiLockPasswordLine className="h-4 w-4 mr-2" />
          <Link to="/changepassword">    Change Password</Link>
         
        </div>
      </div>

    
    </div>
  );
};

export default Sidebar;
