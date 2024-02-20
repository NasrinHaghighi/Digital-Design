'use client'
import React from 'react'
import {SessionProvider} from 'next-auth/react'

function AuthProvider({children}:any) {
  return (
    <SessionProvider >{children}</SessionProvider>
  )
}

export default AuthProvider


// AIzaSyD4YVf63P8s2A0ATD6OPo-iB5mQrL-73r0

//key=API_KEY