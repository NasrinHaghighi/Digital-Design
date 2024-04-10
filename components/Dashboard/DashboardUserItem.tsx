import React from 'react'
import RemoveUser from './RemoveUser';

interface User {
    _id: string;
    email: string;
    name: string;
    role:string
}

function DashboardUserItem({item}:{item:User}) {

  return (
    <div className='gird grid-cols-1 md:grid-cols-3 gap-5 mb-5'>
    <div className='bg-input-bg2 p-5 rounded-lg shadow-md '>
    <div className='flex flex-col lg:flex-row justify-between text-lg mb-5 gap-y-3 '>
    
                    <div className='text-gary-500'>نام کاربر: <span className='text-green-500 font-semibold '>{item?.name}</span>
                    </div>
                    <div>ایمیل :<span className='px-1 text-lime-700 font-semibold'>{item?.email}</span></div>

                    
                   

  </div>
  <div className='text-2xl'> سمت کاربر :<span className='text-red-400 font-semibold '>{item.role}</span> </div>
       <RemoveUser user={item} />
        </div>
        </div>
  )
}

export default DashboardUserItem