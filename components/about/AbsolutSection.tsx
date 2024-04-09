'use client'

import { useEffect, useRef, useState } from 'react';

function AbsolutSection() {
    const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const containerRefCurrent = containerRef.current;
        if (containerRefCurrent) {
            const width = containerRefCurrent.offsetWidth;
            setContainerWidth(width);
        }
    }, []);

  return (
    <div className='absolute top-2/3 left-[calcValue] bg-red-100 ' style={{ left: `calc(3/5 * ${containerWidth}px)` }}>
    <h1 className='text-2xl'>علی آذریان</h1>
    <h1>طراح دیجیتال</h1>
  </div>
  )
}

export default AbsolutSection