import React from 'react'
import { getServerSession } from 'next-auth'
import { options } from '@/utils/auth'
import Image from 'next/image';
import Photo from '../../public/img/profile_av.jpg';
import DashboardLinks from './DashboardLinks';


async function Sidebar() {
    const session = await getServerSession(options);
    
  return (
    <div className='h-full bg-gray-200 p-5 '>
        <div className=' w-full grid  place-items-center  py-5 border-b border-gray-300'>
            <div>
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