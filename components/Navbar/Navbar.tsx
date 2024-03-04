import Image from 'next/image'
import React from 'react'
import  Linkedin  from '../../public/img/linked.png'
import NavbarLinks from './NavbarLinks'
import NavbarRes from './NavbarRes'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { options } from '@/utils/auth'
import Welcome from './Welcome'


async function Navbar() {
 const sesstion = await getServerSession(options)
 console.log('sesstttion', sesstion?.user)
  return (
    <div className='flex max-w-screen-xl justify-between items-center align-baseline 
    h-20 '>
          <div className='flex-1 hidden md:flex'>
            <NavbarLinks />
        </div>
        <div className='flex-1 md:hidden '>
      <NavbarRes/>
        </div>
         <div className=' text-center '><Link href='/'>logo</Link></div>
      

        <div className='hidden lg:flex flex-1 justify-end  gap-5 '>
       
           
          
           
           <Welcome />
            <Image src={Linkedin} alt='logo' width={80} height={15} style={{marginLeft: 10}} />
        </div>
    </div>
  )
}

export default Navbar