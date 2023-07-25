import React from 'react';
import { LuLayoutDashboard, LuSettings, LuHeart } from 'react-icons/lu';
import { PiFilmReelThin } from 'react-icons/pi';
import { BsCardList } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="bg-gray-800 text-white p-4 md:w-64">
        <div className="flex items-center mb-4">
          <LuLayoutDashboard className="h-4 w-4 mr-2" />
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="flex items-center mb-4">
          <BsCardList className="h-4 w-4 mr-2" />
          <Link to="/movieslist">Movies List</Link>
        </div>
        <div className="flex items-center mb-4">
          <PiFilmReelThin className="h-4 w-4 mr-2" />
          Add Movies
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
          <LuSettings className="h-4 w-4 mr-2" />
          Update Profile
        </div>
        <div className="flex items-center mb-4">
          <LuHeart className="h-4 w-4 mr-2" />
          Favorite Movies
        </div>
        <div className="flex items-center mb-4">
          <RiLockPasswordLine className="h-4 w-4 mr-2" />
          Change Password
        </div>
      </div>

    
    </div>
  );
};

export default Sidebar;
