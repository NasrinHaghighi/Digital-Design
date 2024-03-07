import React from 'react'
import Link from 'next/link'
import {bgCat} from '../../utils/bgcategory'

function DashboardPostitem({post}:any) {
  return (
    <div className='gird grid-cols-1 md:grid-cols-3 gap-5 mb-5'>
      <div className='bg-white p-5 rounded-lg shadow-md '>
        <div className='text-blue-500 hover:underline mb-4'><Link href={`/${post.slug}`}>#{post.id}</Link></div>
        <div className='flex justify-between text-sm mb-5'> 
            <div className='text-gary-500'>ایجاد شده در تاریخ:   <span className='text-green-500 font-semibold'>{post.createdAt.substring(0,10)} </span>
             </div> 
            <div >توسط:<span className='px-1 text-yellow-700 font-semibold'>{post.userEmail}</span> </div> 
            <div> دسته بندی: <span className={`${bgCat(post.catSlug)} rounded-lg p-3 `}>{post.catSlug}</span></div> 
        </div>
          <div className='mb-5 text-2xl'>عنوان:<span className='px-1'></span><span>{post.title}</span></div>
<div className='flex justify-between items-center'>
  <div className='text-sm'>تعداد بازدید : <span className='px-1 text-red-500'>{post.views} </span></div> 
  <div>action</div></div>
      </div>
    </div>
  )
}

export default DashboardPostitem