import { createContext, useContext, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

type MenuContext = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

type Props = {
  children: React.ReactNode;
};

const MenuContext = createContext<MenuContext | null>(null);

export function Menu({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const state = { isOpen, setIsOpen };

  return <MenuContext.Provider value={state}>{children}</MenuContext.Provider>;
}

function Toggle() {
  const { isOpen, setIsOpen } = useContext(MenuContext)!;

  return (
    <button
      className='absolute w-8 h-8 top-1 right-1 rounded-full bg-black flex justify-center items-center'
      onClick={() => setIsOpen(!isOpen)}>
      <AiOutlineMenu color='#fff' />
    </button>
  );
}

function List({ children }: Props) {
  const { isOpen } = useContext(MenuContext)!;

  return (
    <>
      {isOpen && (
        <ul className='absolute w-24  top-10 right-4 rounded-sm bg-black flex flex-col justify-center items-center'>
          {children}
        </ul>
      )}
    </>
  );
}

function Item({ children }: Props) {
  return (
    <li className='text-white cursor-pointer w-full text-center'>{children}</li>
  );
}

Menu.Item = Item;
Menu.List = List;
Menu.Toggle = Toggle;
