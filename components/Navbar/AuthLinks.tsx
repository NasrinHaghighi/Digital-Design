'use client'
import Link from 'next/link'
import React from 'react'
import { useSession,signIn ,signOut} from 'next-auth/react'


function AuthLinks() {

   const {data, status} = useSession()
   //console.log(data)
  return (
    <>
    {status === 'unauthenticated' ?
                (<Link href='/signin' className='text-center'>ورود</Link>)
                :
                (
                <div>
                {data?.user.role === 'admin' ? <Link href='/dashboard' className='text-green-500 '> پنل مدیریت</Link> : null}
                <span className='pl-5'></span>
                <button  className='text-center' onClick={()=>signOut()}>

               <span>خروج</span> 
                </button>
                </div>
                )
            }
    </>
  )
}

export default AuthLinks