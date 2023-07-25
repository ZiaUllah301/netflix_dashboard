import React from 'react';
import {FaEdit} from 'react-icons/fa'
import  {BsCardList} from 'react-icons/bs'
import {BiCategory} from 'react-icons/bi'
import {FaUsers} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'
import image1 from '../../public/assets/1a.jpg'
import image2 from '../../public/assets/22.jpeg'
import image3 from '../../public/assets/33.jpg'
import image4 from '../../public/assets/44.jpg'
import image5 from '../../public/assets/55.jpg'


const MovieTable = () => {
  // Example data for the table rows
  const movies = [
    {
      id: 1,
      image: image1,
      name: 'Army Of The Dead',
      category: 'Western',
      language: 'English',
      year: 2022,
      hours: 3,
    },
    {
      id: 2,
      image: image2,
      name: 'The Conjuring',
      category: 'Thriller',
      language: 'Chinese',
      year: 1999,
      hours: 4,
    },
    {
        id: 3,
        image: image3,
        name: 'My Favorite Person',
        category: 'Adventure',
        language: 'Korean',
        year: 2000,
        hours: 11,
      },
      {
        id: 4,
        image: image4,
        name: 'Lets Be a crops',
        category: 'Musicals',
        language: 'English',
        year: 2022,
        hours: 5,
      },
      {
        id: 5,
        image: image5,
        name: 'Below her mouth',
        category: 'Romantic',
        language: 'English',
        year: 1899,
        hours: 1,
      },

  ];

  return (
    <>
    <div className="p-4 bg-blue-900 text-white">
        <h1 className="text-2xl items-start flex font-bold mb-4">Dashboard</h1>
        <div className="flex space-x-8">
        <div className="flex items-center bg-black px-8 py-4">
            <div className='px-2 py-2 rounded-full bg-orange-600'><BsCardList className="h-4 w-4 text-white  " /></div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Total Movies</h2>
              <p className="text-xl font-bold">90</p>
            </div>
          </div>
          <div className="flex items-center bg-black px-8 py-4">
            <div className=' px-2 py-2 rounded-full bg-blue-500'> <BiCategory className="h-4 w-4 text-white" /></div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Total Categories</h2>
              <p className="text-xl font-bold">8</p>
            </div>
          </div>
          <div className="flex items-center bg-black px-8 py-4">
            <div className='px-2 py-2 bg-green-500 rounded-full'><FaUsers className="h-4 w-4 text-white " /></div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Total Users</h2>
              <p className="text-xl font-bold">134</p>
            </div>
          </div>
        </div>
      </div>
      
      
    <div className="overflow-x-auto pt-14">
      <table className="table-auto border-collapse border bg-blue-700">
        <thead className='bg-white'>
          <tr>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2 ">Name</th>
            <th className="px-4 py-2 ">Category</th>
            <th className="px-4 py-2 ">Language</th>
            <th className="px-4 py-2 ">Year</th>
            <th className="px-4 py-2 ">Hours</th>
            <th className="px-4 py-2 ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td className="border px-4 py-2">
                <img src={movie.image} className="w-12 h-12" />
              </td>
              <td className="border px-4 py-2 text-white">{movie.name}</td>
              <td className="border px-4 py-2 text-white">{movie.category}</td>
              <td className="border px-4 py-2 text-white">{movie.language}</td>
              <td className="border px-4 py-2 text-white">{movie.year}</td>
              <td className="border px-4 py-2 text-white">{movie.hours}</td>
              <td className="border px-4 py-2 text-white">
               <div className='flex items-center'>
               <button className="flex items-center text-blue-500 px-2 py-2 bg-gray-900">
                  Edit <FaEdit className="ml-1 text-green-400" />
                </button>
                <button className="text-red-500 ml-2"><AiFillDelete size={20}/></button>
               </div>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default MovieTable;
