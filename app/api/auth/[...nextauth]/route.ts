import NextAuth from "next-auth/next"

import { NextApiRequest, NextApiResponse } from 'next'


//import prisma from "@/utils/connect"
import { options } from "@/utils/auth"




const handler= NextAuth( options)
export {handler as GET, handler as POST}
