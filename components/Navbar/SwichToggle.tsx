'use client'
import Image from 'next/image'
import React,{useEffect,useState} from 'react'
import Moon from '../../public/img/moon.png'
import Sun from '../../public/img/sun.png'
import { useTheme } from 'next-themes'



function SwichToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] =useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  return (
    <div
    onClick={() => setTheme(resolvedTheme === 'light'? 'dark' : 'light')}
     className={`conatiner w-12 h-6  flex  items-center justify-between rounded-full relative cursor-pointer 5 ${resolvedTheme === 'dark' ? 'bg-white' : 'bg-black'} md:mx-1 mx-5 `}>
         <Image src={Sun} alt='logo' width={14} height={14} className='absolute  left-1' />
         <div className={`w-5 h-5 rounded-full absolute  p-1 z-10 ${resolvedTheme === 'dark' ?   'rigth-1' :'left-1'} ${resolvedTheme === 'dark' ?   'bg-black' :'bg-white' } transition ease-in-out delay-150`}></div>
        <Image src={Moon} alt='logo' width={14} height={14} className='absolute rigth-1'/>
       
    </div>
  )
}

export default SwichToggle