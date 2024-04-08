import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';
import prisma from '../../../utils/connect'

export const POST = async (req: Request) => {
    
 

    try{
     const body = await req.json();
     
    // console.log('req body', body);
     const about = await prisma.about.create({ data: body });
     return new NextResponse(JSON.stringify(about), { status: 200 });
    } catch(e:any){
     console.log(e)
     return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
 }
 };

 export const GET = async (req: Request) => {
    
 console.log('about')

    try{
   
     const about = await prisma.about.findMany();
     return new NextResponse(JSON.stringify(about), { status: 200 });
    } catch(e:any){
     console.log(e)
     return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
 }
 };

 export const PUT = async (req: Request) => {
    const body = await req.json();
    const { id, img, des } = body;
   // console.log(id,img,des)
    try{

        const updateAbout = await prisma.about.update({
            where: {
                id: id as string
            },
            data: {
                des: des,
                img:img 
            }
        });
        return new NextResponse(JSON.stringify(updateAbout), { status: 200 });
       } catch(e:any){
        console.log(e)
        return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
    }
    };

