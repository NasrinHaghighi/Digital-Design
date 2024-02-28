import Image from 'next/image'
import React from 'react'
import  Insta  from '../../public/img/instagram.png'
import  Tele  from '../../public/img/telegram.png'
import NavbarLinks from './NavbarLinks'
import NavbarRes from './NavbarRes'
import Link from 'next/link'
function Navbar() {
  return (
    <div className='flex max-w-screen-xl justify-between items-center
    h-14'>
          <div className='flex-1 hidden md:flex'>
            <NavbarLinks />
        </div>
        <div className='flex-1 md:hidden '>
      <NavbarRes/>
        </div>
         <div className=' text-center '><Link href='/'>logo</Link></div>
      

        <div className='hidden lg:flex flex-1 justify-end  '>
            <Image src={Insta} alt='logo' width={30} height={30} style={{marginLeft: 10}}  />
           
            <Image src={Tele} alt='logo' width={30} height={30} style={{marginLeft: 10}} />
        </div>
    </div>
  )
}

export default Navbar