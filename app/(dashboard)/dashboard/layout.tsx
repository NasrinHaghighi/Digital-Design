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
             <div className="grid grid-cols-12 gap-8 mt-8 mx-3 ">
   
                 
                   <div className='lg:col-span-3 col-span-12 lg:order-1 order-1 '>
                    <Sidebar />
                    
                   </div>
                   <div className='lg:col-span-9 col-span-12 lg:order-2 order-2 mx-3'>{children}</div>
          </div> 
            </>
            )
}

            export default DashboardLayout