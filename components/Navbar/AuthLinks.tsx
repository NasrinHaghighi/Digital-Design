'use client'
import Link from 'next/link'
import React from 'react'
import { useSession,signIn ,signOut} from 'next-auth/react'


function AuthLinks({setOpen}:any) {

   const {data, status} = useSession()
   
   //console.log(data)
  return (
    <>
    {status === 'unauthenticated' ?
                (<Link href='/signin' className='text-center'>ورود</Link>)
                :
                (
                <div className='flex md:flex-row justify-center items-center flex-col gap-5'>
                {data?.user.role === 'admin' ? <Link href='/dashboard/posts' className='text-green-500 ' onClick={()=>setOpen(false)}> پنل مدیریت</Link> : null}
                <span className='pl-3'></span>
                <button  className='text-center' onClick={()=>signOut()}>
               <span className='text-red-500' onClick={(event) => { event.preventDefault(); signOut(); setOpen(false); }}>خروج</span> 
                </button>
                </div>
                )
            }
    </>
  )
}

export default AuthLinks