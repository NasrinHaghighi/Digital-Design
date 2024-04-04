import React from 'react'
import Link from 'next/link'
import AuthLinks from './AuthLinks'
import SwichToggle from './SwichToggle'


function NavbarLinks() {
  return (
    <>
    <div className='text-left  justify-start gap-5 items-center font-semibold text-lg md:flex'>
     <Link href='/'>خانه</Link>
     <Link href='/about'>درباره ما</Link>
 <AuthLinks />
<SwichToggle /> 
    </div>
   
    </>
  )
}

export default NavbarLinks