import React from 'react'
import {FaEdit} from 'react-icons/fa'
import{AiFillDelete} from 'react-icons/ai'
import {PiCaretLeftBold,PiCaretRightBold} from 'react-icons/pi'
import {HiPlusCircle} from 'react-icons/hi'

const Categories = () => {
    const category = [
        {
          id: 1,
          ID:'2R75T8',
         Date:'12, Jan 2023',
         Title:'Romantic',
          
        },
        {
            id: 2,
            ID:'2R75T8',
           Date:'12, Jan 2023',
           Title:'Action',
            
          },
          {
            id: 3,
            ID:'2R75T8',
           Date:'12, Jan 2023',
           Title:'Horror',
            
          },
          {
            id: 4,
            ID:'2R75T8',
           Date:'12, Jan 2023',
           Title:'	Comedy',
            
          },
          {
            id: 5,
            ID:'2R75T8',
           Date:'12, Jan 2023',
           Title:'	Adventure',
            
          },
          {
            id: 6,
            ID:'2R75T8',
           Date:'12, Jan 2023',
           Title:'Sports',
            
          },
          {
            id: 7,
            ID:'2R75T8',
           Date:'12, Jan 2023',
           Title:'	Fantasy',
            
          },
          {
            id: 8,
            ID:'2R75T8',
           Date:'12, Jan 2023',
           Title:'	Musicals',
            
          },
          {
            id: 9,
            ID:'2R75T8',
           Date:'12, Jan 2023',
           Title:'	Drama',
            
          },
          {
            id: 10,
            ID:'2R75T8',
           Date:'12, Jan 2023',
           Title:'Thriller',
            
          },
          {
            id: 11,
            ID:'2R75T8',
           Date:'12, Jan 2023',
           Title:'Western',
            
          },
          {
            id: 12,
            ID:'2R75T8',
           Date:'12, Jan 2023',
           Title:'Historical',
            
          },
          {
            id: 13,
            ID:'2R75T8',
           Date:'12, Jan 2023',
           Title:'Science',
            
          },
          {
            id: 14,
            ID:'2R75T8',
           Date:'12, Jan 2023',
           Title:'	Mystery',
            
          },
        
    
      ];
  return (
    <>
    <div className="overflow-x-auto h-screen w-full pt-14">
    <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-white font-bold">Categories</h1>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mb-4 flex items-center rounded">
        <HiPlusCircle className='h-4 w-4 mr-2 text-white'/>
          Create
        </button>
      </div>
      <table className="table-auto border-collapse border bg-blue-700">
        <thead className='bg-white'>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2 ">Date</th>
            <th className="px-4 py-2 ">Title</th>
            <th className="px-4 py-2 ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {category.map((category) => (
            <tr key={category.id}>
              <td className="border px-4 py-2 text-white">{category.ID}</td>
              <td className="border px-4 py-2 text-white">{category.Date}</td>
              <td className="border px-4 py-2 text-white">{category.Title}</td>
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

export default Categories