import Link from 'next/link'
import React from 'react'
import Linkedin from '../public/img/linkedin.png'
import Image from 'next/image'
import NavbarLinks from './Navbar/NavbarLinks'
import AuthLinks from './Navbar/AuthLinks'
function Footer() {
  return (
    <>
    <div className='border-t border-gray-300 pt-24 my-24  justify-between md:flex-row flex-col text-center' >
      <div>Logo</div>
< div className='flex justify-center items-center  gap-5 font-semibold my-5'>
      <Link href='/'>خانه</Link>
     <Link href='/about'>درباره ما</Link>
    
 
 </div>
 <div className='text-center '><AuthLinks /> </div>
      {/* */}
    </div>
    <div className='text-center py-5 font-semibold md:text-xl text-base px-3 mb-44 '>برای داشتن یک وب‌سایت مانند این، با ما در <Link href='https://www.linkedin.com/in/nasrin-haghighi-615488a4/ ' className='text-red-400'>لینکدین </Link> یا <Link href='@WebDeveloperNasrin' className='text-red-400'> تلگرام</Link> تماس بگیرید.</div> 
    </>
  )
}

export default Footer


{/* <div className='flex flex-col justify-center items-center '>
<div className='mb-12'>LOGO</div>
<Link href='https://www.linkedin.com/in/nasrin-haghighi-615488a4/'>
<Image src={Linkedin} alt='logo' width={80} height={15} style={{marginLeft: 10}} />
</Link>
</div> */}