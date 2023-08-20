import React, { useState } from 'react';
import { AiOutlineClose,AiOutlineCloudUpload } from 'react-icons/ai';
import first from '../../public/assets/22.jpeg'


const Modal = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleAdd = () => {
    // Do something with the name and image, e.g., send it to a parent component
    onAdd({ name, image });

    // Clear the input fields
    setName('');
    setImage(null);

    // Close the modal
    onClose();
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    console.log(file);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-[#000025] rounded-lg shadow-lg w-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl text-white flex items-start font-bold">Create Cast</h2>
          <button onClick={onClose}>
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div className="mb-4">
          <label className="text-sm text-white flex items-center font-medium">Enter Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full  px-3 py-2 mt-1"
            placeholder="Enter name"
          />
        </div>
        <div className='text-white'>
          Cast Image
          <div
            className={` w-96 h-40 border-2 border-dashed border-white rounded-lg p-4 text-center
       ${isDragging ? 'bg-blue-100' : 'bg-black'
              }`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {isDragging ? (

              <p className="text-blue-500 font-bold">
                Drop the image here (only .jpg and .png files will be accepted)
              </p>
            ) : (
              <>

                <AiOutlineCloudUpload size={40} className="mx-auto mb-2 text-red-500" />
                <p className="text-gray-600">Drag your image here</p>
                <p className="text-sm text-gray-600">(only .jpg and .png files will be accepted)</p>
              </>
            )}

          </div>
          <img src={first} className='w-32 h-32 mt-2 flex items-start border ' />
        </div>
        <div className="flex justify-between mt-4">
        <button
            className="bg-green-500 text-white py-2 px-4 rounded"
            onClick={() => handleAdd()}
            disabled={!name || !image}
          >
            ADD
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded mr-2"
            onClick={() => onClose()}
          >
            Cancel
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default Modal;
