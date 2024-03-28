import NextAuth from "next-auth/next"

import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth"

//import prisma from "@/utils/connect"
import { options } from "@/utils/auth"



export const getAuthSession = () => getServerSession(options)
const handler= NextAuth( options)
export {handler as GET, handler as POST}
