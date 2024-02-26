import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PostListItem from './PostListItem'


const getData = async () => {
  const res=await fetch("http://localhost:3000/api/post" 
  , {cache: 'no-store'})

  if(!res.ok)  throw new Error('Network response was not ok')

  return res.json()
}

async function PostList({category}:any) {
  const data = await getData()


  return (
    <>
    <h1 className='text-xl'>آخرین پستها</h1>
    <br/>
    {data?.map((item:any)=>{
     return  <PostListItem item={item} key={item.id} />
    })}


  
    </>
  )
}

export default PostList

// {`/${item.title}`}