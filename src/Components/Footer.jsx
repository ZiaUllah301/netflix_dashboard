import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#000025] text-white p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Company</h2>
          <ul className="list-none">
            <li className="text-white hover:text-red-700 cursor-pointer">Home</li>
            <li className="text-white hover:text-red-700 cursor-pointer">Movies</li>
            <li className="text-white hover:text-red-700 cursor-pointer">About Us</li>
            <li className="text-white hover:text-red-700 cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Top Categories</h2>
          <ul className="list-none">
            <li className="text-white hover:text-red-700 cursor-pointer">Action</li>
            <li className="text-white hover:text-red-700 cursor-pointer">Drama</li>
            <li className="text-white hover:text-red-700 cursor-pointer">Romantic</li>
            <li className="text-white hover:text-red-700 cursor-pointer">Historical</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-bold">My Account</h2>
          <ul className="list-none">
            <li className="text-white hover:text-red-700 cursor-pointer">Dashboard</li>
            <li className="text-white hover:text-red-700 cursor-pointer">Favorite Movies</li>
            <li className="text-white hover:text-red-700 cursor-pointer">Update Profile</li>
            <li className="text-white hover:text-red-700 cursor-pointer">Change Password</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-red-900">NETFLIXO</h2>
          <ul className="list-none">
            <li className="text-white">Lorem 196 Andrew Road, Suite 200,</li>
            <li className="text-white">New York, NY 10007</li>
            <li className="text-white">Tell: +255 754 661 423</li>
            <li className="text-white">Email: info@zpunet.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
