import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '../../public/img/culture.png'

function PostListItem({item}:any) {
  return (
    <div className='mb-8 mt-8 grid grid-flow-col gap-5'>
    <div className='col-span-7 flex flex-col justify-between gap-5'>
           <div className='flex text-sm'><span className='text-red-400'>{item.catSlug}</span>-<span >11-12-2023</span></div>
              <h4 className='font-semibold'>{item.title}</h4>
              <div dangerouslySetInnerHTML={{ __html: item.des.substring(0,250) + '...' }} />
              <Link href='/' className='flex m-auto p-2 rounded-md mt-10 '>ادامه مطلب</Link>
 
 </div>
 
 {
    item.img?<div className='col-span-5   '>
    <Image  src={item.img} alt='logo' width={200} height={200} className='object-cover rounded-md w-[300px] h-[200px] m-auto' />
</div>:''
 }
 
     
   </div>
  )
}

export default PostListItem