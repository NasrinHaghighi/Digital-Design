import React from 'react'
import Link from 'next/link'
import AuthLinks from './AuthLinks'
import SwichToggle from './SwichToggle'

function NavbarLinks() {
  return (
    <div className='text-left flex justify-start gap-5 items-center font-semibold text-lg'>
<Link href='/' > خانه</Link>
<Link href='/'> درباره ما</Link>
<Link href='/'> ار تباط با ما</Link>
<AuthLinks />
<SwichToggle />
    </div>
  )
}

export default NavbarLinks