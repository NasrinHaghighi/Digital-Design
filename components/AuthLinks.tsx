import Link from 'next/link'
import React from 'react'

function AuthLinks() {

    //temporary
    const status: string = 'unauthenticated';
  return (
    <>
    {status === 'unauthenticated' ?
                (<Link href='/login' className='text-center'>ورود</Link>)
                :
                (<button  className='text-center'>خروج</button>)
            }
    </>
  )
}

export default AuthLinks