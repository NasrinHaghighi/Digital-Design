import React from 'react'


const getData = async ({ postId}: { postId: string }) => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/likes?postId=${postId}`, { cache: 'no-store' },);
  
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  
    return res.json();
  }


async function NumberOfLikes({postId}: {postId: string}) {


const {likes}=await getData({postId})


  return (
    <div>{likes?.length}</div>
  )
}

export default NumberOfLikes