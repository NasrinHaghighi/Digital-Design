import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PostListItem from './PostListItem'


const getData = async ({page, cat}:any) => {
  const res=await fetch(`http://localhost:3000/api/post?page=${page}&cat=${cat}`
  , {cache: 'no-store'})

  if(!res.ok)  throw new Error('Network response was not ok')

  return res.json()
}
//COMPONENT//
async function PostList({page, cat}:any) {

  const data = await getData({page, cat})
console.log('data'+ JSON.stringify(data))
  return (
    <>
      <h1 className='text-xl'>آخرین پستها</h1>
      <br />
       {data?.posts.map((item: any) => {
        return <PostListItem item={item} key={item.id} />
      })} 


    </>
  )
}


export default PostList

// {`/${item.title}`}