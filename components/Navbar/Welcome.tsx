'use client'

import { useSession } from 'next-auth/react';
import React from 'react'

function Welcome() {
    const {data:sesstion} = useSession();
  return (
    <div className={` flex justify-between transition-opacity duration-900 ease-in ${sesstion ? 'opacity-100' : 'opacity-0'} font-semibold`}> 
           
           {sesstion && 
           <div className='flex'>
           <span className='text-green-500'>{sesstion?.user.name}</span>
           <span className='flex mx-2'></span>
           <span>سلام </span>
           </div>
           }
           </div>
  )
}

export default Welcome