import NextAuth from "next-auth/next"

import GoogleProvider from 'next-auth/providers/google'
import  { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
//import prisma from "@/utils/connect"

interface Props{
 adapter:any, providers: any; secret: string;
}

const prisma = new PrismaClient()
const options:Props = {
  adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET?? '',
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
              }
        })
        
    ],
    secret: process.env.SECRET?? '',
}
const handler= NextAuth(
  
  options
)
export {handler as GET, handler as POST}