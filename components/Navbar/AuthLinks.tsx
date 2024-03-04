'use client'
import Link from 'next/link'
import React from 'react'
import { useSession,signIn ,signOut} from 'next-auth/react'


function AuthLinks() {

   const {data, status} = useSession()
  // console.log(data)
  return (
    <>
    {status === 'unauthenticated' ?
                (<Link href='/register' className='text-center'>ورود</Link>)
                :
                (<button  className='text-center' onClick={()=>signOut()}>

<span>خروج</span> 
                </button>)
            }
    </>
  )
}

export default AuthLinks