'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

function CommentDashboardItem({item}:any) {
const router = useRouter();
    const removeHandel = async (id:any) => {
        console.log(id)
        try {
            
            const res = await fetch(`http://localhost:3000/api/comments`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( {id} )

                });

            if (!res.ok) {
                throw new Error('Failed to remove post');
            }
            router.push('/dashboard');
            // Handle successful response
            console.log('Post removed successfully');
        } catch (error) {
            // Handle error
            console.error('Error removing post:', error);
        }
      
    }
  return (
    <div className='gird grid-cols-1 md:grid-cols-3 gap-5 mb-5'>
    <div className='bg-white p-5 rounded-lg shadow-md '>
  
      <div className='flex flex-col lg:flex-row justify-between text-sm mb-5 gap-y-3'> 
          <div className='text-gary-500'>ایجاد شده در تاریخ:   <span className='text-green-500 font-semibold'>{item?.createdAt.substring(0,10)} </span>
           </div> 
          <div >توسط:<span className='px-1 text-yellow-700 font-semibold'>{item?.userName}</span> </div> 
         
      </div>
   <div className='mb-5 md:text-2xl text-xl '>متن کامنت :<span className='px-1'></span><span>{item?.des}</span>
        </div>
        <div className='text-left'>
        <button className='bg-red-500 px-3 py-1 rounded-md cursor-pointer' onClick={()=>removeHandel(item?.id)}>حذف</button>
        </div>

    </div>
  </div>
  )
}

export default CommentDashboardItem