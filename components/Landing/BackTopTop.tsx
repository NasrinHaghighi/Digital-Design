'use client'
import { useState, useEffect } from 'react'
import { AiOutlineToTop } from "react-icons/ai";

function BackTopTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });
    }, [])
const scrollUp=()=>{
    window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}
  return (
    <div className='mb-5 text-rose-400 font-semibold text-5xl hover:text-green-400'>
        <button onClick={scrollUp}><AiOutlineToTop /></button>
    </div>
  )
}

export default BackTopTop