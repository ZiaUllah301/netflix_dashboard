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
    <div className="h-screen w-full pt-14 px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl text-white font-bold mb-4 md:mb-0">Users</h1>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Create User
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border bg-[#000025] ">
          <thead className="bg-white">
            <tr>
              <th className="px-4 py-2">IMAGE</th>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">DATE</th>
              <th className="px-4 py-2">FULL NAME</th>
              <th className="px-4 py-2">EMAIL</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">
                  <img src={user.image} className="w-12 h-12 rounded-full" alt={`User ${user.id}`} />
                </td>
                <td className="border px-4 py-2 text-white">{user.ID}</td>
                <td className="border px-4 py-2 text-white">{user.Date}</td>
                <td className="border px-4 py-2 text-white">{user.name}</td>
                <td className="border px-4 py-2 text-white">{user.Email}</td>
                <td className="border px-4 py-2 text-white">
                  <div className="flex items-center">
                    <button className="text-red-500 ml-2">
                      <AiFillDelete size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default User