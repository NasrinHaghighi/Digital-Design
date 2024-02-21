import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer'

interface MainLayoutProps {
    children: React.ReactNode
}
function MainLayout({children}:MainLayoutProps) {
  return (
    <div >
          <Navbar />
      {children}
     <Footer />
    </div>
  )
}

export default MainLayout