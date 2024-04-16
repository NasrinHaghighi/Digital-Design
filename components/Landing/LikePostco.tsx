'use client'

import React,{useEffect, useState} from 'react'
import { useSession } from "next-auth/react"  
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function LikePostco({ postId }: { postId: string }) {
    const router = useRouter()
    const { data: session, status } = useSession()
    const userEmail=session?.user.email
    const [liked, setLiked] = useState<boolean>(false);
    const [message, setMessage] =useState<boolean>(false);
    const [likeData, setLikeData] = useState<any>({ likes: [], userLiked: false });
    
const {likes, userLiked} =likeData



   const HandelToggelLike=async()=>{
  if(!session){
    setMessage(true)
    return
  }
    try {
        const res = await fetch(`/api/likes`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ postId : postId, reaction: 'LIKE' })
          
        })
        getLikes()
        if (!res.ok) {
          throw new Error('Failed to edite comment');
        }
            }catch (error) {}
        }


const getLikes=async()=>{
    
     try {
        const res = await fetch(`/api/likes?postId=${postId}`)
        
        router.refresh()
        if (!res.ok) {
          throw new Error('Failed to edite comment');
        }
        const likesData = await res.json();
        setLikeData(likesData)
}catch (error) {}}


console.log(likeData)

useEffect(() => {
    getLikes();
}, []);

    return (
        <>
        <div className='flex flex-col justify-center items-center '>
        <div onClick={HandelToggelLike} className='text-2xl flex cursor-pointer'> <span className='mx-3'>{likes?.length}</span>{userLiked ? <span className='text-red-400'><IoIosHeart /></span> :<span> <IoIosHeartEmpty /> </span>} </div>
        {message ? <div >برای اینکه لایک کنید باید وارد شوید ... <Link href='/signin' className='text-red-500 '> ورود</Link>  </div> : ''}
        </div>
        </>
    )
}

export default LikePostco

{/* <span>{likeData.length}</span> */}