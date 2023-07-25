import React from 'react';

const UpdateProfile = () => {
  return (
    <div className="p-4 bg-[#000025] ">
      <h1 className="text-2xl text-white font-bold mb-4">Profile</h1>
      <div className="grid gap-4">
        <div>
          <div className="mb-4">
            <label className="flex items-start text-white text-lg font-semibold mb-2" htmlFor="profileImage">
              Profile Image
            </label>
            <input
              type="file"
              id="profileImage"
              className="border py-2 px-4 w-full bg-black"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-start text-white text-lg font-semibold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="border py-2 px-4 w-full bg-black"
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
              className="border py-2 px-4 w-full bg-black"
              placeholder="Enter your email address"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
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
