import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '../../public/img/culture.png'




function PostListItem({ item }: any) {

  
  return (
    <div className='mb-20 mt-8 grid lg:grid-flow-col grid-row-flow justify-around gap-5 md:gap-8  border-b-2 border-gray-300 pb-5 '>
      <div className='col-span-9 flex  flex-col justify-between  text-center sm:text-right gap-5 lg:order-1 order-2'>
        <div className='flex text-sm text-center sm:justify-right '>
          <span className='text-red-400'>{item?.catSlug}</span>
          <span className='p-2'></span>
          <span>{item?.createdAt.substring(0, 10)}</span>
        </div>

        <h1 className='font-extrabold text-wrap xs:text-lg '>{item?.title}</h1>


        <div className="flex-1 ">  
        
       <div className='text-center sm:text-right xs:text-base  text-wrap' dangerouslySetInnerHTML={{ __html: item?.des.substring(0, 200) + '...' }} />  
        </div>

        <div className='text-sm flex justify-end xxs:justify-center items-center '>
          <Link href={item.slug} className='border-b-2 border-gray-500 hover:border-red-500 py-1 hover:text-red-500' >ادامه مطلب</Link>
        </div>
      </div>

      {
        item.img ? 
        <div className='col-span-3  lg:justify-end justify-center items-center lg:order-2 order-1 hidden xs:block'>
          <Image
            src={item.img}
            alt='logo'
            width={200}
            height={200}
            className='object-cover rounded-md w-[300px] h-[200px] m-auto'
          />
        </div> : ''
      }

    </div>
  )
}


export default PostListItem