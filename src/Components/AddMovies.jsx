import React, { useState } from 'react';
import { AiOutlineCloudUpload, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import {ImUpload} from 'react-icons/im'

import first from '../../public/assets/88.jpg'
import second from '../../public/assets/99.jpg'
import tom from '../../public/assets/c1.png';
import Emily from '../../public/assets/c2.png';
import john from '../../public/assets/c3.png';
import wills from '../../public/assets/c4.png';
import Minah from '../../public/assets/c5.jpg';
import Modal from './Model';


const AddMovies = ({ onClick, children }) => {
  const [movieTitle, setMovieTitle] = useState('');
  const [hours, setHours] = useState('');
  const [language, setLanguage] = useState('');
  const [year, setYear] = useState('');
  const [message, setMessage] = useState('');
  const [moviecategory, setMoviecategory] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  //Map method
  const castList = [
    {

      image: tom,
      name: 'Tom Cruise'
    },
    {

      image: Emily,
      name: "Emily Blunt"
    },
    {

      image:john,
      name: 'John Snow'
    },
    {

      image: wills,
      name: 'Will Smith'
    },
    {

      image: Minah,
      name: 'Minah Lee'
    },
  ];





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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      movieTitle,
      hours,
      language,
      year,
      message,
      moviecategory,
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
        <div className='text-white'>
          Image With Title
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
          <img src={first} className='w-32 h-32 mt-2 flex items-start border-8  border-black rounded-lg' />
        </div>

        <div className='text-white'>
          Image Without Title
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
          <img src={second} className='w-32 h-32 mt-2 flex items-start border-8 border-black rounded-lg' />
        </div>
        <div className='mb-4 col-span-2'>


          <label className="flex items-start text-white font-bold mb-2">Movie Description</label>
          <textarea
            placeholder='Type your message here'
            type="message"
            className=" w-full h-36 border bg-white border-gray-300 rounded-md px-4 py-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
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
       ${isDragging ? 'bg-blue-100' : 'bg-black'
              }`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {isDragging ? (

              <p className="text-white font-bold">
                Drop the Video here (only .mp4 files will be accepted)
              </p>
            ) : (
              <>

                <AiOutlineCloudUpload size={40} className="mx-auto mb-2 text-red-500" />
                <p className="text-gray-600">Drag your Video here</p>
                <p className="text-sm text-gray-600">(only .mp4 files will be accepted)</p>
              </>
            )}
          </div>
        </div>
        <div className='flex col-span-2 justify-start'>
         <div className=' w-2/3'>
         <button
            className="bg-black  w-full h-12 text-white font-bold border border-red-500 border-dashed py-2 px-4 rounded "
            onClick={toggleModal}
          >
            ADD CAST
            {children}
          </button>
         </div>
          <div className="grid grid-cols-3 gap-4 ml-8">
            {castList.map((cast, index) => (
              <div key={index} className="bg-[#1d1d25] border p-2 text-center">
                <img src={cast.image} alt={cast.name} className=" w-44 h-20 object-cover mb-2" />
                <p className=" text-sm text-white">{cast.name}</p>
                <div className="flex justify-center mt-2 gap-1">
                 
                    <AiOutlineEdit size={20}  className='border text-green-600' />
                    <AiOutlineDelete size={20}  className='border text-red-600'/>
                  
                </div>
              </div>
            ))}
          </div>
          {isModalOpen && (
        <Modal
          onClose={toggleModal} // Close the modal when the "Cancel" button is clicked
          onAdd={(data) => {
            // Handle adding cast data here, e.g., push the data to the `castList`
            // array or send it to the server
            console.log('New cast data:', data);
          }}
        />
      )}
          
        </div>
        <button
            className=" bg-red-600 flex justify-center gap-4 col-span-2 w-full h-12 text-white font-bold  py-2 px-4 rounded "
            onClick={onClick}
            
          >
            <ImUpload size={20}  />
           Publish Movie
            {children}
          </button>
      </form>

    </div>
  );
};

export default AddMovies;
