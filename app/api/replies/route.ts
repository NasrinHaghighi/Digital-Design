import { NextResponse } from 'next/server';
import { getAuthSession } from '../../../utils/auth';
import prisma from '../../../utils/connect'

//CREAT A REPLY//
export const POST = async (req: Request) => {
    const { commentId, des , postSlug} = await req.json();

    const session = await getAuthSession();
 
    if (!session) {
        return new NextResponse(JSON.stringify({ message: 'not authenticated ' }), { status: 401 });
    }
   try{
   
    const reply = await prisma.reply.create({ data: { des, commentId,  postSlug , userEmail: session?.user?.email ?? '' ,userName: session?.user?.name ?? ''} });
    return new NextResponse(JSON.stringify(reply), { status: 200 });
   } catch(e:any){
    console.log('err',e)
    return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
}
};

export const GET = async (req: Request) => {
   
 const {searchParams}=new URL(req.url)
 const commentId = searchParams.get('commentId')

   try{
    
    const reply = await prisma.reply.findMany({ 
        where: {
            commentId: commentId as string
        },
        include: {user: true},
   
    });
    return new NextResponse(JSON.stringify(reply), { status: 200 });
   } catch(e:any){
    console.log('err',e)
    return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
}
};
export const PUT = async (req: Request) => {
   
const body = await req.json();
const {id, value} = body;
      try{
       
        const reply =  await prisma.reply.findUnique({
            where: {
                id: id as string
            },

        });
        if (!reply) {
            return new NextResponse(JSON.stringify({ message: 'reply not found' }), {
                status: 404
            });
        }
        const updatedComment = await prisma.reply.update({
            where: {
                id: id as string
            },
            data: {
                des: value // Assuming 'des' is the field you want to update
            }
        });

        // Fetch the updated list of comments
        const updatedreplyes = await prisma.comment.findMany();
       return new NextResponse(JSON.stringify(updatedreplyes), { status: 200 });
      } catch(e:any){
       console.log('err',e)
       return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
   }
   };