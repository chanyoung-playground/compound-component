import React from 'react';

export default function Header() {
  return (
    <header className='h-20 bg-white dark:bg-black py-4 px-8 align-2 flex justify-center items-center'>
      <nav className='dark:text-white flex justify-between items-center w-[1200px]'>
        <div className='font-bold'>
          <a href='/'>PlayGround</a>
        </div>
        <ul className='flex gap-4'>
          <li>
            <a href='/'>홈</a>
          </li>
          <li>
            <a href='/about'>소개</a>
          </li>
          <li>
            <a href='/services'>서비스</a>
          </li>
          <li>
            <a href='/contact'>문의</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
