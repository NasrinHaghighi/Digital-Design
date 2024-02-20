'use client'

import React from 'react'
import { useSession,signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function LoginPage() {
  const router = useRouter()
 const {data, status} = useSession()
if(status === 'loading') return <div>Loading...</div>
if(status === 'authenticated') 
{
router.push('/')
}
   
  return (
    <div className='container text-center max-w-screen-xl '>
        <h1 className='text-4xl font-bold p-8 '>ورود به حساب کاربری </h1>
        <div className='container p-10 bg-softBg rounded-md w-[300px] flex flex-col gap-10 bg-loginBg m-auto'>
          <div className='bg-red-500 p-5 rounded-md cursor-pointer '
           onClick={() => signIn('google')}
          >Sign in with Google</div>
        </div>
    </div>

  )
}

export default LoginPage