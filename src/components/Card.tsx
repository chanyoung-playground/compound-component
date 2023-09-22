import React from 'react';
import CardMenu from './CardMenu';

type Item = {
  name: string;
  image: string;
  description: string;
};

const items: Item[] = [
  {
    name: 'items1',
    image: 'https://picsum.photos/200',
    description: 'items2 ',
  },
  {
    name: 'items2',
    image: 'https://picsum.photos/200',
    description: 'items2',
  },
  {
    name: 'items3',
    image: 'https://picsum.photos/200',
    description: 'items3',
  },
];

export default function Card() {
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
