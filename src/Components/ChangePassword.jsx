import React from 'react';

const ChangePassword = () => {
  return (
    <div className="p-4  bg-[#000025]  text-white relative">
      <h1 className="text-2xl flex items-start font-bold mb-4">Change Password</h1>
      <div className=" gap-4">
        <div className="space-y-4">
          <div>
            <label className=" items-start flex text-white font-semibold mb-1">Previous Password</label>
            <input
              type="password"
              placeholder='*******'
              className="w-full b px-4 py-2 bg-black rounded-md focus:outline-none focus:ring focus:border-blue-600"
            />
          </div>
          <div>
            <label className="flex items-start text-white font-semibold mb-1">New Password</label>
            <input
              type="password"
              placeholder='*******'
              className="w-full  px-4 py-2 bg-black rounded-md focus:outline-none focus:ring focus:border-blue-600"
            />
          </div>
          <div>
            <label className="flex items-start text-white font-semibold mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder='*******'
              className="w-full  px-4 py-2 bg-black rounded-md focus:outline-none focus:ring focus:border-blue-600"
            />
          </div>
        </div>
        <div className="md:ml-4 mt-6 self-end md:self-start">
          <button
            className="bg-red-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none absolute bottom-4 right-4 md:static"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
