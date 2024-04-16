import { NextResponse } from 'next/server';
import { getAuthSession } from '../../../utils/auth';

import prisma from '../../../utils/connect'

export const POST = async (req: Request) => {
    const session = await getAuthSession();
    const userEmail = session?.user?.email;

    try {
        const body = await req.json();
        const { postId } = body;
        //console.log('which and who: ', userEmail, postId);
        // Check if the user has already liked the post

        const existingLike = await prisma.like.findFirst({
            where: {
               
                    userEmail: userEmail as string,
                    postId: postId as string
                
            },
        });
       // console.log('existingLike', existingLike);

        if (existingLike) {
            console.log('User has already liked this post, removing like');
            await prisma.like.delete({
             where: {
              
                    id: existingLike.id // Assuming `id` is the primary key of the `Like` model
                
             }
            });
        } else {
            console.log('User has not liked the post before, creating like');
            // User has not liked the post, create a new like
            await prisma.like.create({
                data: {
                    postId: postId as string,
                    userEmail: userEmail as string
                }
            });
        }

        return new NextResponse(JSON.stringify({ message: 'Success' }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
    }
};












 
export const GET = async (req: Request) => {
    const session = await getAuthSession();
    const url = new URL(req.url || '');
    const postId = url.searchParams.get('postId');
    const userEmail = session?.user?.email;

    if (!postId) {
        throw new Error('postId and userEmail are required');
    }
    try{
    
        const likes = await prisma.like.findMany({ 
            where: {
              postId:postId as string,
            }
           
       
        });
        let userLiked = false;
        if (userEmail) {
            // Check if the current user has liked the post
            userLiked = likes.some(like => like.userEmail === userEmail);
        }
        const response = { likes, userLiked  };
        //console.log('like',likes)
        return new NextResponse(JSON.stringify(response), { status: 200 });
       } catch(e:any){
        console.log('err',e)
        return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
    }
   
};



