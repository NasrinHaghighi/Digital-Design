'use client'
import Link from 'next/link'
import React from 'react'
import { useSession,signIn ,signOut} from 'next-auth/react'


function AuthLinks({setOpen}:any) {

   const {data, status} = useSession()
   const handleSignOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signOut();
    setOpen(false);
 };
 const renderAuthenticatedLinks = () => (
  <div className='flex md:flex-row flex-col gap-5'>
     {data?.user.role === 'admin' &&
        <Link href='/dashboard' className='text-green-500'> پنل مدیریت</Link>}
     <span className='pl-5'></span>
     <button className='text-center' onClick={handleSignOut}>
        <span className='text-red-500'>خروج</span>
     </button>
  </div>
);//console.log(data)
  return (
    <>
       {status === 'unauthenticated' ?
            <Link href='/signin' className='text-center'>ورود</Link> :
            renderAuthenticatedLinks()
         }
      </>
  )
}

export default AuthLinks