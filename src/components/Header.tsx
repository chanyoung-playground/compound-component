import React from 'react';
import { useRecoilValue } from 'recoil';
import { Theme, themeMode } from '../recoil/themeAtom';

export default function Header() {
  const theme: Theme = useRecoilValue(themeMode);

  return (
    <header
      className={`${
        theme === 'LIGHT' ? 'bg-white' : 'bg-black'
      } h-20 py-4 px-8 align-2 flex justify-center items-center`}>
      <nav
        className={`${
          theme === 'LIGHT' ? 'text-black' : 'text-white'
        } flex justify-between items-center w-[1200px]`}>
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
