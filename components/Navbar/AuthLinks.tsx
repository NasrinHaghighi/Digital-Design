'use client'
import Link from 'next/link'
import React from 'react'
import { useSession,signIn ,signOut} from 'next-auth/react'


function AuthLinks() {

   const {data, status} = useSession()
  return (
    <>
    {status === 'unauthenticated' ?
                (<Link href='/register' className='text-center'>ورود</Link>)
                :
                (<button  className='text-center ' onClick={()=>signOut()}>خروج</button>)
            }
    </>
  )
}

export default AuthLinks