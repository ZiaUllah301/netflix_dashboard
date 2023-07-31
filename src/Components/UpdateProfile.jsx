import React, { useState } from 'react';
import {FiUpload} from 'react-icons/fi'

const UpdateProfile = () => {
  const [image, setImage] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 bg-[#000025] ">
      <h1 className="text-2xl text-white font-bold mb-4">Profile</h1>
      <div className=" gap-4">
          <div className="mb-4">
            <label className="flex items-start text-white text-lg font-semibold mb-2" htmlFor="profileImage">
              Profile Image
            </label>
            <div className="flex items-center">
            <input
              type="file"
              id="profileImage"
              onChange={handleImageUpload}
              className="border py-2 px-4 w-full text-white bg-black"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-start text-white text-lg font-semibold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border py-2 px-4 w-full text-white bg-black"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-start text-white text-lg font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border py-2 px-4 w-full text-white bg-black"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex justify-between">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-4 md:mb-0">
              Delete Account
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default UpdateProfile;
