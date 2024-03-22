import React from 'react'
import { getServerSession } from 'next-auth'
import { options } from '@/utils/auth'
import Image from 'next/image';
import Photo from '../../public/img/profile_av.jpg';
import DashboardLinks from './DashboardLinks';


async function Sidebar() {
    const session = await getServerSession(options);
    
  return (
    <div className='min-h-max bg-input-bg md:p-5 p-2 rounded-md shadow-sm'>
         <div className=' border-gray-300 flex flex-col justify-center items-center border-b-2 pb-5'>
            <div >
                <Image src={Photo} alt='photo' width={80} height={80} className='rounded-full mb-8'/>
            </div>
            <div className='mb-2 font-semibold'>{session?.user?.name}</div>
            <div>طراح دیجیتال</div>
      </div> 
     <DashboardLinks />
   </div>
    
  )
}

export default Sidebar