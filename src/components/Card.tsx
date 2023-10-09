import React from 'react';
import CardMenu from './CardMenu';
import { useRecoilValue } from 'recoil';
import { itemState } from '../recoil/itemList';

export default function Card() {
  const items = useRecoilValue(itemState);

  console.log(items);
  return (
    <ul className='flex gap-2 '>
      {items.map((item) => (
        <li key={item.name} className='border rounded p-2'>
          <div className=' relative'>
            <img src={item.image} alt={item.name} />
            <CardMenu />
          </div>

          <h3 className='font-bold'>{item.name}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
