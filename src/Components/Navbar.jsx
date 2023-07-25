// Navbar.js
import React from 'react';
import {BiSearch} from 'react-icons/bi'
import {BsHeart} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className=" p-4 bg-gray-900 flex items-center justify-between">
      <div className="flex items-center">
        <div className=" text-red-900 text-2xl font-bold">NETFLIXO</div>
        <div className="ml-4 flex">
          <div className=' bg-red-700  px-5 py-[12px] border rounded-l-lg border-red-700 '>
            <BiSearch size={14} color='white' />
          </div>
          <input
            type="text"
            placeholder="Search Movie Name From Here"
            className="px-4 py-2 w-96 rounded-r-lg   bg-gray-200 text-white focus:outline-none"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-white">Movies</div>
        <div className="text-white">About Us</div>
        <div className="text-white">Contact Us</div>
        <div className="text-white flex items-center">
         
        </div>
        <div className="text-white">
          
          <span ><BsHeart size={30}/></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
