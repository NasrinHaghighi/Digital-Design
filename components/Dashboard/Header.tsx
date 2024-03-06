import React from 'react'
import { getServerSession } from 'next-auth'
import { options } from '@/utils/auth'
import SwichToggle from '../Navbar/SwichToggle'
import { useSession,signIn ,signOut} from 'next-auth/react'
import SignoutBtn from './SignoutBtn'

async function Header() {
  const session = await getServerSession(options);

  return (
    <div className="h-24  rounded-lg flex justify-between items-center p-5">
      <div className=" flex">
        <SwichToggle />
        <span className="pl-5"></span>
        <SignoutBtn />
      </div>
      <div className='font-semibold text-2xl'>{session?.user?.name} <span className="pl-5"></span><span className='text-green-500'>خوش آمدید</span></div>
    </div>
  );
}


export default Header