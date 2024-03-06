import React from 'react'
import Header from '@/components/Dashboard/Header'
import Sidebar from '@/components/Dashboard/Sidebar'

interface MainLayoutProps {
    children: React.ReactNode
}
function DashboardLayout({children}:MainLayoutProps) {
    return (
        <>
            <Header />
            <div className="grid md:grid-cols-12 grid-flow-row gap-8 mt-8 ">
   
                 
                   <div className=' md:col-span-3 md:order-1 order-1'>
                    <Sidebar />
                    
                   </div>
                   <div className='md:col-span-9 md:order-2 order-2'>{children}</div>
          </div>
            </>
            )
}

            export default DashboardLayout