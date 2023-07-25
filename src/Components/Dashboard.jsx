import React from 'react';
import { LuLayoutDashboard, LuSettings, LuHeart } from 'react-icons/lu';
import { PiFilmReelThin } from 'react-icons/pi';
import { BsCardList } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Left Side */}
      <div className=" text-white p-4 flex flex-col items-start space-y-4">
        <div className="flex items-center">
          <LuLayoutDashboard className="h-4 w-4 mr-2" />
          Dashboard
        </div>
        <div className="flex items-center">
          <BsCardList className="h-4 w-4 mr-2" />
          Movies List
        </div>
        <div className="flex items-center">
          <PiFilmReelThin className="h-4 w-4 mr-2" />
          Add Movies
        </div>
        <div className="flex items-center">
          <BiCategory className="h-4 w-4 mr-2" />
          Categories
        </div>
        <div className="flex items-center">
          <FaUsers className="h-4 w-4 mr-2" />
          Users
        </div>
        <div className="flex items-center">
          <LuSettings className="h-4 w-4 mr-2" />
          Update Profile
        </div>
        <div className="flex items-center">
          <LuHeart className="h-4 w-4 mr-2" />
          Favorite Movies
        </div>
        <div className="flex items-center">
          <RiLockPasswordLine className="h-4 w-4 mr-2" />
          Change Password
        </div>
      </div>

      {/* Right Side */}
      
    </div>
  );
};

export default Dashboard;
