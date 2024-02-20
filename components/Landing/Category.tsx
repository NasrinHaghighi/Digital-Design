import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Banner from '../../public/img/culture.png'

function Category() {
  return (
    <div className='container pt-12 pb-12 mt-6 mb-6' >
        <h1 className='text-xl'>آخرین پستها</h1>

        <div className="flex justify-around items-center gap-20 my-10">
          
               <Link href='/' className='bg-slate-500 rounded-md p-4 flex justify-between  items-center w-36'>
                 <span>وریلاگ</span>
                 <div className="rounded-full overflow-hidden  w-10 h-10 ">
                 <Image src={Banner} alt='logo'/></div>
               </Link>

               <Link href='/' className='bg-slate-500 rounded-md p-4 flex justify-between  items-center w-36'>
                 <span>وریلاگ</span>
                 <div className="rounded-full overflow-hidden  w-10 h-10 ">
                 <Image src={Banner} alt='logo'/></div>
               </Link>

               <Link href='/' className='bg-slate-500 rounded-md p-4 flex justify-between  items-center w-36'>
                 <span>وریلاگ</span>
                 <div className="rounded-full overflow-hidden  w-10 h-10 ">
                 <Image src={Banner} alt='logo'/></div>
               </Link>

               <Link href='/' className='bg-slate-500 rounded-md p-4 flex justify-between  items-center w-36'>
                 <span>وریلاگ</span>
                 <div className="rounded-full overflow-hidden w-10 h-10 ">
                 <Image src={Banner} alt='logo'/></div>
               </Link>

               <Link href='/' className='bg-slate-500 rounded-md p-4 flex justify-between  items-center w-36'>
                 <span>وریلاگ</span>
                 <div className="rounded-full overflow-hidden  w-10 h-10 ">
                 <Image src={Banner} alt='logo'/></div>
               </Link>
        
        </div>
    </div>
  )
}

export default Category