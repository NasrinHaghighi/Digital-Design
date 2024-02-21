'use client'

import React from 'react'
import { useSession,signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function LoginPage() {
  const router = useRouter()
 const {data, status} = useSession()
 console.log(data,status)
if(status === 'loading') return <div>Loading...</div>
if(status === 'authenticated') 
{
router.push('/')
}
   
  return (
    <div className='container text-center max-w-screen-xl '>
     
        <div className='container p-10  rounded-md w-[300px] flex flex-col gap-10  m-auto'>
          <div className='bg-red-500 p-5 text-textColor rounded-md cursor-pointer '
           onClick={() => signIn('google')}
          >Sign in with Google</div>
        </div>
    </div>

  )
}

export default LoginPage