'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

interface User {
    _id: string;
    email: string;
    name: string;
    role:string
}


function RemoveUser({user}:{user:User}) {
    const router = useRouter();
    const handelRemove = async (email:string) => {
        try {
            await fetch(`http://localhost:3000/api/user`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: user.email}) 
            })
router.push('/dashboard/users')
router.refresh()
            console.log('کاربر با موفقیت حذف شد')
        } catch (error) {
       
            console.log('متاسفانه خطایی رخ داده است')
        }
    }
  return (
    <div className='flex justify-end p-5'>
        <button className='bg-red-500 px-3 py-1 rounded-md cursor-pointer'  onClick={()=>handelRemove(user.email)} >حذف</button>
    </div>
  )
}

export default RemoveUser