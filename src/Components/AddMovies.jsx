import React, { useState } from 'react';
import {AiOutlineCloudUpload} from 'react-icons/ai'
import first from '../../public/assets/88.jpg'
import second from '../../public/assets/99.jpg'

const AddMovies = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [hours, setHours] = useState('');
  const [language, setLanguage] = useState('');
  const [year, setYear] = useState('');
  const [moviecategory, setMoviecategory] = useState('');
  const [isDragging, setIsDragging] = useState(false);

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
    // You can handle the dropped file here (e.g., read its contents or upload it)
    console.log(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      movieTitle,
      hours,
      language,
      year,
      moviecategory,
    });
  };

  return (
    <div>
      <h1 className="text-2xl flex items-start text-white font-bold mb-4">Create Movie</h1>
      <form onSubmit={handleSubmit} className=' grid grid-cols-2 gap-4'>
        <div className="mb-4">
          <label className="flex items-start text-white font-bold mb-2">Movie Title:</label>
          <input
            type="text"
            placeholder='Game of throns'
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex items-start text-white font-bold mb-2">Hours:</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex items-start text-white font-bold mb-2">Language Used:</label>
          <input
            type="text"
            placeholder='English'
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex items-start text-white font-bold mb-2">Year:</label>
          <select
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          >
            <option value="">Select a year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            {/* Add more years as needed */}
          </select>
        </div>
    <div>
    <div
      className={` w-96 h-40 border-2 border-dashed border-white rounded-lg p-4 text-center
       ${
        isDragging ? 'bg-blue-100' : 'bg-black'
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
    <img src={first} className='w-32 h-32 flex items-start border-8 border-black rounded-lg' />
    </div>
   
    <div>
    <div
      className={` w-96 h-40 border-2 border-dashed border-white rounded-lg p-4 text-center
       ${
        isDragging ? 'bg-blue-100' : 'bg-black'
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
    <img src={second} className='w-32 h-32 flex items-start border-8 border-black rounded-lg' />
    </div>
<div className='mb-4 col-span-2'>
  

       <label className="flex items-start text-white font-bold mb-2">Movie Description</label>
       <input
       placeholder='Type your message here'
         type="message"
         className=" w-full h-36 border bg-black border-gray-300 rounded-md px-4 py-2"
       
      />
</div>
<div className="mb-4 col-span-2">
          <label className="flex items-start text-white font-bold mb-2">Movie Category</label>
          <select
            className="w-full h-14 bg-black text-white border border-gray-300  px-4 py-2"
            value={moviecategory}
            onChange={(e) => setMoviecategory(e.target.value)}
            required
          >
            <option value="">Select a Movie</option>
            <option >Romentic</option>
            <>Action</>
            <option >Horror</option>
            <option >Comedy</option>
            <option >Adventure</option>
            <option >Sports</option>
            <option >Fantasy</option>
            <option >Musicals</option>
            <option >Thriller</option>
            <option >Westren</option>
          </select>
        </div>
       <div className='mb-4 col-span-2 text-white '>
        Movie Video
       <div
      className={` w-full h-40  border-2 border-dashed border-white rounded-lg p-4 text-center
       ${
        isDragging ? 'bg-blue-100' : 'bg-black'
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {isDragging ? (
        
        <p className="text-white font-bold">
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
       </div>
      </form>
    </div>
  );
};

export default AddMovies;
