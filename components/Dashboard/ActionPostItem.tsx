'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
 interface Props {
    post:{
        id: string;
        slug:string

    }
 }


function ActionPostItem({ post }: Props) {
   
    const router = useRouter();
 const removeHandle = async (post:any) => {
   
    const {id,slug} = post;
   console.log(id,slug)
        try {
            // Call API to remove post  
            const res = await fetch(`http://localhost:3000/api/post`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id ,slug})

                });

            if (!res.ok) {
                throw new Error('Failed to remove post');
            }
            router.push('/dashboard');
            router.refresh()
            // Handle successful response
            console.log('Post removed successfully');
        } catch (error) {
            // Handle error
            console.error('Error removing post:', error);
        }
    };



    return (
        <div className="flex justify-between items-center gap-x-3">
            <div className='bg-red-500 px-3 py-1 rounded-md cursor-pointer' onClick={() => removeHandle(post)} >حذف</div>
            <div className='bg-green-500 px-3 py-1 rounded-md cursor-pointer' >
                <Link href={`/dashboard/posts/${post.id}`}>ویرایش</Link>
            </div>
            <div className='bg-blue-500 px-3 py-1 rounded-md cursor-pointer' >
                <Link href={`/dashboard/comments/${post?.slug}`}>کامنت ها</Link>
            </div>
        </div>
    )
}



export default ActionPostItem

/*in the first try i use post.id to remove post,*/
/* but when added comment and rply i releaied that i need to remove comment and reply asosited by this post in the backend at the same time, for this case i will pass post object instead of only post.id */