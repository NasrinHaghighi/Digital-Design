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
        id: string;
        name: string;
        email: string;
        emailVerified: string | null;
        image: string | null;
    }


}
function ShowReply(reply:{reply:Reply}) {
 console.log(reply);
  return (
  <div>{reply.reply?.des}</div>
  )
}

export default ShowReply