'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

function RemoveCategory({slug}:any) {



    const router = useRouter();
    const removeHandle = async (slug:string) => {
      console.log(slug)
       
           try {
               // Call API to remove post  
               const res = await fetch(`http://localhost:3000/api/categories`,
                   {
                       method: 'DELETE',
                       headers: {
                           'Content-Type': 'application/json'
                       },
                       body: JSON.stringify({slug})
   
                   });
   
               if (!res.ok) {
                   throw new Error('Failed to remove post');
               }
               router.push('/dashboard');
               router.refresh()
               // Handle successful response
               console.log('Post removed successfully');
           } catch (error) {
               // Handle error
               console.error('Error removing post:', error);
           }
       };
  return (
    <button className='px-5 py-2 bg-red-400 rounded-md' onClick={()=>removeHandle(slug)}>حذف</button>
  )
}

export default RemoveCategory