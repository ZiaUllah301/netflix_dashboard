import React, { useState } from 'react';

const AddCastModal = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    // Handle image upload logic here if needed
    setImage(e.target.value);
  };

  const handleAdd = () => {
    onAdd({ name, image });
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg p-4 w-80">
        <h2 className="text-xl font-bold mb-4">Add Cast</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          className="border border-gray-300 p-2 mb-4 w-full"
        />
        {/* Add image upload input here if needed */}
        {/* <input type="file" onChange={handleImageChange} className="mb-4 w-full" /> */}
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
            onClick={handleAdd}
          >
            Add
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCastModal;
