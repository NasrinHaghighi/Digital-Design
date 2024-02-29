import { NextResponse } from "next/server";
//import { PrismaClient } from '@prisma/client';
import { hash } from "bcrypt";
import prisma from '../../../utils/connect'

//const prisma = new PrismaClient();
export async function POST(req: Request) {

    try {
        const body = await req.json()
        const { name, email, password } = body

        //check is email aleady exist

        const existUserByEmail = await prisma.user.findUnique({
            where: { email: email }
        })
        if (existUserByEmail) {
            return NextResponse.json({ user: null, message: "Email already exist" }, { status: 400 })
        }
       


        const hashPass = await hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email,
                password: hashPass
            }
        })
        const {password:newuserPassword, ...rest} =newUser


        return NextResponse.json({ user: rest, message: 'user created' }, { status: 200 })
    } catch (err) {
return NextResponse.json({ message: 'somethings went wrong ' }, { status: 500 })
    }
}




    
    