import { NextResponse } from 'next/server';
import { getAuthSession } from '../../../utils/auth';
import prisma from '../../../utils/connect'



//CREAT A COMMENT//
export const POST = async (req: Request) => {
    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(JSON.stringify({ message: 'not authenticated ' }), { status: 401 });
    }
   try{
    const body = await req.json();
  console.log('body in the comments route', body);;
   
    const comment = await prisma.comment.create({ data: { ...body,  userEmail: session?.user?.email ?? '' ,userName: session?.user?.name ?? ''} });
    console.log('comment', comment)
    return new NextResponse(JSON.stringify({comment}), { status: 200 });
   } catch(e:any){
    console.log(e)
    return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
}
};
//GET ALL COMMENT FOR A POST//
export const GET = async (req: Request) => {
  const {searchParams}=new URL(req.url)
  const postSlug = searchParams.get('postSlug')
   console.log('postSlug',postSlug)
   try{
  
  
    const comments = await prisma.comment.findMany({
        where: {
           postSlug: postSlug as string
        },
        include: {user: true},
     });
    return new NextResponse(JSON.stringify(comments), { status: 200 });
   } catch(e:any){
    console.log(e)
    return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
}
};

export const DELETE = async (req: Request) => {
    const body = await req.json();
   

  const { id } = body;
  
    try {
        await prisma.reply.deleteMany({
            where: {
                commentId: id as string
            }
        });
        await prisma.comment.delete({
            where: {
                id: id as string
            },

        });
        // Fetch the updated list of posts
        const updatedComments = await prisma.comment.findMany();
console.log(updatedComments)

        return new NextResponse(JSON.stringify({ message: 'Post deleted', comments: updatedComments }), {
            status: 200
        });

    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: error.message }), {
            status: 500
        });
    }
};

/*edite a comment*/
export const PUT = async (req: Request) => {
    const body = await req.json();
   

  const { id, value } = body;
  
    try {
        const comment =  await prisma.comment.findUnique({
            where: {
                id: id as string
            },

        });
        if (!comment) {
            return new NextResponse(JSON.stringify({ message: 'Comment not found' }), {
                status: 404
            });
        }
        // Fetch the updated list of posts
        // Update the comment with the new value
        const updatedComment = await prisma.comment.update({
            where: {
                id: id as string
            },
            data: {
                des: value // Assuming 'des' is the field you want to update
            }
        });

        // Fetch the updated list of comments
        const updatedComments = await prisma.comment.findMany();


        return new NextResponse(JSON.stringify({ message: 'edite a ', comments: updatedComments }), {
            status: 200
        });

    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: error.message }), {
            status: 500
        });
    }
};