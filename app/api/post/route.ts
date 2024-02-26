import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';
import { getAuthSession } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export const GET = async () => {
   try{
       const categories = await prisma?.post.findMany()
       return new NextResponse(JSON.stringify(categories), { status: 200 });
   }catch(err){
    console.log(err)
    return new NextResponse(JSON.stringify({message:'error'}), {status: 500})
   }
}

/*CREATE NEW POST*/
export const POST = async (req: Request) => {
    const session = await getAuthSession();
 
  
    if (!session) {
        return new NextResponse(JSON.stringify({ message: 'not authenticated ' }), { status: 401 });
    }
   try{
    

    const body = await req.json();
    console.log('req body', body);
    const post = await prisma.post.create({ data: { ...body,  userEmail: session?.user?.email ?? '' } });
    return new NextResponse(JSON.stringify(post), { status: 200 });
   } catch(e:any){
    console.log(e)
    return new NextResponse(JSON.stringify({message:e.message}), {status: 500})

   }
};

