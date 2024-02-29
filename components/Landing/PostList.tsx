import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PostListItem from './PostListItem'
import Pagination from './Pagination'


const getData = async ({page, cat}:any) => {
  const res=await fetch(`http://localhost:3000/api/post?page=${page}&cat=${cat}`
  , {cache: 'no-store'})

  if(!res.ok)  throw new Error('Network response was not ok')

  return res.json()
}
//COMPONENT//
async function PostList({page, cat}:any) {

  const {posts , count} = await getData({page, cat})
const POST_PER_PAGE=2
//console.log('count'+count,'page'+page, 'cat'+cat)
  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1)+POST_PER_PAGE  < count

  return (
    <>
    <div className=''>
    
       {posts?.map((item: any) => {
        return <PostListItem item={item} key={item.id} />
      })} 
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} cat={cat}/>
      </div>

    </>
  )
}


export default PostList

// {`/${item.title}`}