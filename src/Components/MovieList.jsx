import React from 'react'
import {FaEdit} from 'react-icons/fa'
import {AiFillDelete,AiOutlineCaretDown} from 'react-icons/ai'
import{PiCaretLeftBold,PiCaretRightBold} from 'react-icons/pi'
import image1 from '../../public/assets/1a.jpg'
import image2 from '../../public/assets/22.jpeg'
import image3 from '../../public/assets/33.jpg'
import image4 from '../../public/assets/44.jpg'
import image5 from '../../public/assets/55.jpg'
import image6 from '../../public/assets/66.jpg'
import image7 from '../../public/assets/77.jpg'
import image8 from '../../public/assets/88.jpg'
import image9 from '../../public/assets/99.jpg'
import image10 from '../../public/assets/101.jpg'
import image11 from '../../public/assets/111.jpg'


const MovieList = ({}) => {
  const movieslist = [
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
      {
        id: 6,
        image: image6,
        name: 'Legend of the seeker',
        category: 'Horror',
        language: 'Horror',
        year: 2012,
        hours: 19,
      },
      {
        id: 7,
        image: image7,
        name: 'Scarlet Heart',
        category: 'Fantasy',
        language: 'Korean',
        year: 2005,
        hours: 5,
      },
      {
        id: 8,
        image: image8,
        name: 'BThe Last Dance',
        category: 'Sports',
        language: 'Japanese',
        year: 1999,
        hours: 6,
      },
      {
        id: 9,
        image: image9,
        name: 'Titanic',
        category: 'Drama',
        language: '	Swahili',
        year: 2012,
        hours: 4,
      },
      {
        id: 10,
        image: image10,
        name: 'About Time of the Dead',
        category: 'Comedy',
        language: 'French',
        year: 2002,
        hours: 1,
      },
      {
        id: 11,
        image: image11,
        name: 'Game of Thrones',
        category: '	Action',
        language: '	Chinese',
        year: 2012,
        hours: 9,
      },

  ];
  return (
    <>
    <div className="overflow-x-auto pt-14 relative">
    <div className="flex justify-between items-center mb-4 ">
        <h1 className="text-2xl text-white font-bold">Movies List</h1>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Delete All
        </button>
      </div>
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
          {movieslist.map((movies) => (
            <tr key={movies.id}>
              <td className="border px-4 py-2">
                <img src={movies.image} className="w-12 h-12" />
              </td>
              <td className="border px-4 py-2 text-white">{movies.name}</td>
              <td className="border px-4 py-2 text-white">{movies.category}</td>
              <td className="border px-4 py-2 text-white">{movies.language}</td>
              <td className="border px-4 py-2 text-white">{movies.year}</td>
              <td className="border px-4 py-2 text-white">{movies.hours}</td>
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
      <PiCaretLeftBold
          size={30}
          className="ml-1 text-white hover:cursor-pointer left-4 bottom-4"
        />
        <PiCaretRightBold
          size={30}
          className="ml-1 text-white hover:cursor-pointer absolute bottom-0 right-4 md:right-0"
        />
    </div>
    </>
  )
}

export default MovieList