'use client'

import { useSession,signIn ,signOut} from 'next-auth/react'


function SignoutBtn() {
   
  return (
     <button  className='text-center' onClick={() => signOut({ callbackUrl: '/', redirect:true })}>

               خروج
    </button>
   
  )
}

export default SignoutBtn