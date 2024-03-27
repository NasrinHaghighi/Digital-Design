import DashboardUserItem from '@/components/Dashboard/DashboardUserItem';
import React from 'react'


const getData = async () => {
    const res = await fetch(`http://localhost:3000/api/user`, { cache: 'no-store' }, );
  
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  
    return res.json();
  }
async function DashboardUserPage() {
    const data= await getData();
  
  return (
    <div>
        {data?.map((item: any) => {
            return (
              <DashboardUserItem item={item} />
            )
        })}
    </div>
  )
}

export default DashboardUserPage