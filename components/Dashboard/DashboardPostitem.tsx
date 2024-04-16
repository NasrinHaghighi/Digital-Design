import React from 'react'
import Link from 'next/link'
import {bgCat} from '../../utils/bgcategory'
import ActionPostItem from './ActionPostItem'
import NumberOfLikes from './NumberOfLikes'

function DashboardPostitem({post}:any) {

  
  return (
    <div className='gird grid-cols-1 md:grid-cols-3 gap-5 mb-5'>
      <div className='bg-input-bg2 p-5 rounded-lg shadow-md '>
        <div className='text-blue-400 hover:underline mb-4'><Link href={`/${post.slug}`}>#{post.id}</Link></div>
        <div className='flex flex-col lg:flex-row justify-between text-lg mb-8 gap-y-3 '> 
            <div className='text-gary-500'>ایجاد شده در تاریخ:   <span className='text-green-500 font-semibold'>{post.createdAt.substring(0,10)} </span>
             </div> 
            <div >توسط:<span className='px-1 text-lime-500 font-semibold text-lg'>{post.userEmail}</span> </div> 
            <div> دسته بندی: <span className={`${bgCat(post.catSlug)} rounded-lg px-3 py-1`}>{post.catSlug}</span></div> 
        </div>
          <div className='mb-8 md:text-3xl  '>عنوان:<span className='px-1'></span><span>{post.title}</span></div>
<div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3'>
  <div className='text-sm flex justify-start'>تعداد لایک  : <span className='px-1 text-red-500'>
    <NumberOfLikes postId={post.id}/>
     </span></div> 


  <div><ActionPostItem post={post} /></div>
  
  </div>
      </div>
    </div>
  )
}

export default DashboardPostitem