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
  const data = await getData();

  return (
    <div>
      {data.length < 1 ? (
        <p>کاربری ثبت نشده است .</p>
      ) : (
        <div>
          <h1 className="text-2xl mb-8">لیست   کاربران :</h1>
          {data?.map((item: any) => {
            return <DashboardUserItem item={item} />;
          })}
        </div>
      )}
    </div>
  );
}


export default DashboardUserPage