import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-900 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center mb-4 md:mb-0">
        <div className="text-red-900 text-2xl font-bold">NETFLIXO</div>
        <div className="ml-4 flex">
          <div className="bg-red-700 px-5 py-[12px] border rounded-l-lg border-red-700">
            <BiSearch size={14} color="white" />
          </div>
          <input
            type="text"
            placeholder="Search Movie Name From Here"
            className="px-4 py-2 w-36 md:w-96 rounded-r-lg bg-gray-200 text-white focus:outline-none"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4 flex-wrap">
        <div className="text-white hidden md:block">Movies</div>
        <div className="text-white hidden md:block">About Us</div>
        <div className="text-white hidden md:block">Contact Us</div>
        <div className="text-white">
          <BsHeart size={30} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
