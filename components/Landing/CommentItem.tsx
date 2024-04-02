'use client'

import React,{useEffect, useState} from 'react'
import { useSession } from "next-auth/react"  
import { useRouter } from 'next/navigation';
import ReplyComponent from './ReplyComponent';
import ShowReply from '../Dashboard/ShowReply';


function CommentItem({item,children}:any) {
  const { data: session, status } = useSession()
const router = useRouter()
  const [openEdite, setOpenEdite] = useState(false);
  const [value, setValue] = useState('');

  const editeHandel = async () => {
   
    try {
    const res = await fetch(`/api/comments`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id : item.id, value })
      
    })
    router.refresh()
    if (!res.ok) {
      throw new Error('Failed to edite comment');
    }
        }catch (error) {}
    }

    useEffect(() => {
      setValue(item.des);
      setOpenEdite(false);
     
    },[item.des])
  


  const canEdit = item.userEmail ===  session?.user.email  && item.userName === session?.user.name


  return (
    <div className="border-2 border-gray-200 rounded-md p-4 mb-5">
        <div className=' mb-3'><span  className='text-gray-500'>کاربر: </span><span className='text-green-500 font-semibold'>{item?.user?.name} </span>
        <div className='flex justify-between py-3 '>
        <span className=''>{item?.des}</span>
        {canEdit && <button className='bg-green-500 px-3 py-2 rounded-md' onClick={()=>setOpenEdite(!openEdite)}>ویرایش</button>}
        </div>
        </div>
       
 
        
       
        
   
         {openEdite ? <div className='my-5'>
          <form onSubmit={editeHandel}>
          <input type="text" value={value}  className='text-red-500 px-2 w-full h-10 rounded-md border' onChange={(event)=>setValue(event.target.value)} />
          <button className='bg-blue-500 text-white px-5 py-2 rounded-md mt-5' type='submit'>ثبت</button>
          </form>
          </div>
          
          : '' }  

     <div>
    {children}
     </div>

                <br/>
              
       {session?.user.role === 'admin' ? <ReplyComponent item={item}/> :''}
    
    </div>
  )
}

export default CommentItem


{/* <span>پاسخ نویسنده :</span> */}


