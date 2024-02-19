'use client'
import React,{useState} from 'react'
import { RiMenu5Line } from "react-icons/ri";
import SwichToggle from './SwichToggle';
import AuthLinks from './AuthLinks';
import Link from 'next/link';
import { useTheme } from 'next-themes'


function NavbarRes() {
    const { resolvedTheme, setTheme } = useTheme()
    const [open,setOpen]=useState(false)
  return (
    <>
    <div className='flex relative'>

<div onClick={()=>setOpen(!open)}><RiMenu5Line /></div>
<SwichToggle />
{open && <div className={`mt-14 z-10 mb-20 absolute w-full h-[500px] text-center pt-8 pb-8 flex flex-col gap-5 text-xl rounded-md ${resolvedTheme === 'dark' ? 'bg-white' : 'bg-black'} ${resolvedTheme === 'dark' ?  'text-black':'text-white' } `}>
<Link href='/' > خانه</Link>
<Link href='/'> درباره ما</Link>
<Link href='/'> ار تباط با ما</Link>
<AuthLinks />
    
    </div>}
    </div>
  
    </>
  )
}

export default NavbarRes