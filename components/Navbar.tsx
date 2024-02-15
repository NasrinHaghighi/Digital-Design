import Image from 'next/image'
import React from 'react'
import  Insta  from '../public/img/instagram.png'
import  Tele  from '../public/img/telegram.png'
import NavbarLinks from './NavbarLinks'
function Navbar() {
  return (
    <div className='flex mx-auto max-w-screen-xl justify-between items-center
    h-14'>
          <div className='flex-1'>
            <NavbarLinks />
        </div>
         <div className=' text-center '>logo</div>
      

        <div className='flex flex-1 justify-end '>
            <Image src={Insta} alt='logo' width={30} height={30} style={{marginLeft: 10}}  />
           
            <Image src={Tele} alt='logo' width={30} height={30} style={{marginLeft: 10}} />
        </div>
    </div>
  )
}

export default Navbar