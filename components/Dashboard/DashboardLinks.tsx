'use client'

import Link from 'next/link'
import React from 'react'

function DashboardLinks() {
  return (
   
<ul className='grid place-items-center py-5 gap-10 mt-5 font-semibold lg:text-lg text-base'>
    <li 
   >
        <Link href='/dashboard'>داشبورد</Link></li>
    <li 
    >
        <Link href='/dashboard/posts'>پست ها</Link></li>
    <li 
   >
        <Link href='/dashboard/write'> ایجاد پست جدید</Link></li>
    <li ><Link href='/dashboard/users'>کاربران</Link></li>

    <li ><Link href='/dashboard/category'>دسته بندی ها</Link></li>

    <li ><Link href='/dashboard/writeabout'>درباره ما</Link></li>

    <li className=" text-red-400"><Link href='/'>بازگشت به صفحه اصلی</Link></li>
    
</ul>
  
  )
}

export default DashboardLinks