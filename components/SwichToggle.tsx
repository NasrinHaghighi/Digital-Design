'use client'
import Image from 'next/image'
import React from 'react'
import Moon from '../public/img/moon.png'
import Sun from '../public/img/sun.png'
import { useTheme } from 'next-themes'

function SwichToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <div
    onClick={() => setTheme(resolvedTheme === 'light'? 'dark' : 'light')}
     className={`conatiner w-12 h-6  flex  items-center justify-between rounded-full relative cursor-pointer  ${resolvedTheme === 'dark' ? 'bg-white' : 'bg-black'}`}>
         <Image src={Sun} alt='logo' width={14} height={14} className='absolute  left-1' />
         <div className={`w-5 h-5 rounded-full absolute  p-1 z-10 ${resolvedTheme === 'light' ? 'rigth-1' : 'left-1'} ${resolvedTheme === 'light' ? 'bg-white' : 'bg-black'}`}></div>
        <Image src={Moon} alt='logo' width={14} height={14} className='absolute rigth-1'/>
       
    </div>
  )
}

export default SwichToggle