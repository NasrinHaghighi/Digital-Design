import React from 'react'
import CategoryItem from './CategoryItem';

interface Category {
    id: string;
    slug: string;
    title: string;
    img: string;
    createdAt: string;
}

const getData = async () => {
    const res = await fetch(`http://localhost:3000/api/categories`, { cache: 'no-store' }, );
  
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  
    return res.json();
  }

async function ListOfCategory() {
    const data = await getData();

    return (
        <div>
            {data.map((item: Category) => {
                return <CategoryItem key={item.id} item={item} />
            })}
        </div>
    );
}


export default ListOfCategory