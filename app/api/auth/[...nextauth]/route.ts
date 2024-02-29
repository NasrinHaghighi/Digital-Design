import NextAuth from "next-auth/next"

import GoogleProvider from 'next-auth/providers/google'
import  { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth"

//import prisma from "@/utils/connect"
import { options } from "@/utils/auth"




export const getAuthSession = () => getServerSession(options)
const handler= NextAuth( options)
export {handler as GET, handler as POST}