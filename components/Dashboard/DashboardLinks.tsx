'use client'

import Link from 'next/link'
import React from 'react'

function DashboardLinks() {
  return (
   
<ul className='grid place-items-center py-5 gap-10 mt-5'>
    <li 
    className="hover:border-b-2 border-gray-600 border-transparent transition duration-300 ease-in-out">
        <Link href='/dashboard'>داشبورد</Link></li>
    <li 
    className="hover:border-b-2 border-gray-600 border-transparent transition duration-300 ease-in-out">
        <Link href='/dashboard/posts'>پست ها</Link></li>
    <li 
    className="hover:border-b-2 border-gray-600 border-transparent transition duration-300 ease-in-out">
        <Link href='/dashboard/write'> ایجاد پست جدید</Link></li>
    <li className="hover:border-b-2 border-gray-600 border-transparent transition duration-300 ease-in-out"><Link href='/dashboard/posts'>کاربران</Link></li>

    <li className="hover:border-b-2 border-gray-600 border-transparent transition duration-300 ease-in-out"><Link href='/dashboard/posts'>کامنت ها </Link></li>
</ul>
  
  )
}

export default DashboardLinks