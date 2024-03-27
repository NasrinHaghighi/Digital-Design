'use client'
import { useState, useEffect } from 'react';

function RenderDangerous({post}:any) {
    const [render, setRender] = useState(false);
   
    useEffect(() => {
       setRender(true);
    }, []);
 
    
  return (
    <>
    <div >
    {render ?
<div className='text-center sm:text-right ' dangerouslySetInnerHTML={{ __html:render && post?.des.substring(0, 650) + '...' }} />
        : <p>loading</p>}
        </div>
     </>
  )
}

export default RenderDangerous