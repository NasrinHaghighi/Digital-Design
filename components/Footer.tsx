import Link from 'next/link'
import React from 'react'
import Linkedin from '../public/img/linkedin.png'
import Image from 'next/image'
function Footer() {
  return (
    <div className='border-t border-gray-300 pt-48 my-24 '>
      <div className='flex flex-col justify-center items-center '>
        <div className='mb-12'>LOGO</div>
<Link href='https://www.linkedin.com/in/nasrin-haghighi-615488a4/'>
        <Image src={Linkedin} alt='logo' width={80} height={15} style={{marginLeft: 10}} />
        </Link>
      </div>
      <div className='text-center py-5'>برای داشتن یک وب‌سایت مانند این، با ما در لینکدین تماس بگیرید.</div>
    </div>
  )
}

export default Footer