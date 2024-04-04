'use client'

import React ,{useEffect, useState}from 'react'
import { useSession } from "next-auth/react" 
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function WriteComments({postSlug}:any) {
    const { data: session } = useSession()
    const [des, setDes] = useState('')
    const router = useRouter()
    const handelSubmit =async (event:any) => {
        //console.log('by ersal nazar', des, postSlug)
          event.preventDefault()
          try {
            await fetch(`/api/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ des, postSlug }),
            });
             // Clear the input
      router.refresh()
      setDes('')
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
      }
  return (
    <>
    {session ?
        <div className='px-5 my-5'>
         <h2 className="mb-5">ارسال نظر:</h2>
         <form onSubmit={handelSubmit}>
        <input type="text" placeholder="نظر بدهید..."  className='w-full h-10 rounded-md border-2 border-gray-300 outline-none ' value={des} onChange={(event)=>(setDes(event.target.value))}/>
        <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded-md mt-5">ارسال</button>
        </form>
    </div>
        : <div>
         <span>لظفا برای ثبت نظر وارد شوید...</span>
         <Link href='/auth/signin'> ورود </Link>
        </div> } 
        <br/>
        </>
  )
}

export default WriteComments