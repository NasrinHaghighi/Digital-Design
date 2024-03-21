'use client'
import React,{useState, useEffect} from 'react'

interface Reply {
    id: string;
    createdAt: string;
    des: string;
    commentId: string;
    userEmail: string;
    userName: string;
    user: {
        role:string;
        id: string;
        name: string;
        email: string;
        emailVerified: string | null;
        image: string | null;
    }


}
function ShowReply({ reply }: { reply: Reply }) {

    return (
        <div className='border border-gray-300 p-3 rounded-md mb-5'>
          <div className='mb-3'>تاریخ :<span className='text-blue-500 font-bold'>{reply?.createdAt.substring(0,10)}</span></div>  
          <div className='mb-5'>توسط :
          <span className='mx-5'>({reply?.user?.role.toLocaleUpperCase()})</span> 
          <span className='text-green-500 font-bold'>{reply?.userName}</span></div>  
          <div className='mb-5'>پاسخ :<span className='font-semibold'>{reply?.des}</span></div> 
        </div>
        
    )
}


export default ShowReply