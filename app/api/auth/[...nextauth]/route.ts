import NextAuth from "next-auth/next"


import { getServerSession } from "next-auth"

//import prisma from "@/utils/connect"
import { options } from "@/utils/auth"

//
// export default async function handler(req:any, res:any) {
//     const getAuthSession = () => getServerSession(options)
//     return NextAuth(req, res, options)
//   }

// export const getAuthSession = () => getServerSession(options)
// const handler= NextAuth( options)
// export {handler as GET, handler as POST}
export const getAuthSession = () => getServerSession(options)

const handler = NextAuth(options);

export default handler;