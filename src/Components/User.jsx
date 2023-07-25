import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import{PiCaretLeftBold,PiCaretRightBold} from 'react-icons/pi'
import tom from '../../public/assets/c1.png';
import Emily from '../../public/assets/c2.png';
import john from '../../public/assets/c3.png';
import wills from '../../public/assets/c4.png';
import Minah from '../../public/assets/c5.jpg';

const User = () => {
    const users=[
        {
            id: 1,
            image: tom,
            ID:'2R75T8',
            Date:'12, Jan 2023',
            name: '	Tom Cruise',
            Email:"tomcruise@gmail.com"
        },
        {
            id: 2,
            image: Emily,
            ID:'2R75T8',
            Date:'12, Jan 2023',
            name: '		Emily Blunt',
            Email:"emilyblunt@gmail.com"
        },
        {
            id: 3,
            image: john,
            ID:'2R75T8',
            Date:'12, Jan 2023',
            name: '	John Snow',
            Email:"	johnsnow@gmail.com"
        },
        {
            id: 4,
            image: wills,
            ID:'2R75T8',
            Date:'12, Jan 2023',
            name: '		Will Smith',
            Email:"	Will Smith@gmail.com"
        },
        {
            id: 5,
            image: Minah,
            ID:'2R75T8',
            Date:'12, Jan 2023',
            name: '	Tom Cruise',
            Email:"tomcruise@gmail.com"
        },
    ];
  return (
    <>
    <div className="overflow-x-auto h-screen w-full pt-14">
    <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-white font-bold">Users</h1>

      </div>
      <table className="table-auto border-collapse border bg-blue-700">
        <thead className='bg-white'>
          <tr>
          <th className="px-4 py-2">IMAGE</th>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2 ">DATE</th>
            <th className="px-4 py-2 ">FULL NAME</th>
            <th className="px-4 py-2">EMAIL</th>
            <th className="px-4 py-2 ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users) => (
            <tr key={users.id}>
                <td className="border px-4 py-2">
                  <img src={users.image} className="w-12 h-12"  />
                </td>
              <td className="border px-4 py-2 text-white">{users.ID}</td>
              <td className="border px-4 py-2 text-white">{users.Date}</td>
              <td className="border px-4 py-2 text-white">{users.name}</td>
              <td className="border px-4 py-2 text-white">{users.Email}</td>
              <td className="border px-4 py-2 text-white">
               <div className='flex items-center'>
               
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

export default User