'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function ActionPostItem({ post }: { post: { id: string } }) {
const router = useRouter();
    const removeHandle = async (postId: string) => {
        try {
            // Call API to remove post
            const res = await fetch(`http://localhost:3000/api/post`, 
         
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ postId }) 

            });

            if (!res.ok) {
                throw new Error('Failed to remove post');
            }
            router.push('/dashboard');
            // Handle successful response
            console.log('Post removed successfully');
        } catch (error) {
            // Handle error
            console.error('Error removing post:', error);
        }
    };



    return (
        <div className="flex justify-between items-center gap-x-3">
            <div className='bg-red-500 px-3 py-1 rounded-md cursor-pointer' onClick={() => removeHandle(post.id)} >حذف</div>
            <div className='bg-green-500 px-3 py-1 rounded-md cursor-pointer' >
                <Link href={`/dashboard/posts/${post.id}`}>ویرایش</Link>
                     </div>
        </div>
    )
}


export default ActionPostItem