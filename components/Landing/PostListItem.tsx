import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '../../public/img/culture.png'



function PostListItem({ item }: any) {
  return (
    <div className='mb-20 mt-8 grid grid-flow-col gap-5'>
      <div className='col-span-7 flex flex-col justify-between gap-5'>
        <div className='flex text-sm'>
          <span className='text-red-400'>{item.catSlug}</span>
          <span className='p-2'></span>
          <span>{item.createdAt.substring(0, 10)}</span>
        </div>

        <h1 className='font-extrabold'>{item.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: item.des.substring(0, 250) + '...' }} />

        <div className='text-sm flex justify-end items-center '>
          <Link href={item.slug} className='border-b-2 border-gray-500 hover:border-red-500 py-1 hover:text-red-500' >ادامه مطلب</Link>
        </div>
      </div>

      {
        item.img ? <div className='col-span-5'>
          <Image
            src={item.img}
            alt='logo'
            width={200}
            height={300}
            className='object-cover rounded-md w-[300px] h-[200px] m-auto'
          />
        </div> : ''
      }

    </div>
  )
}


export default PostListItem