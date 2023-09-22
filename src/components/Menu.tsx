import { createContext, useContext, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

type MenuContext = {
  open: boolean;
  toggle: (open: boolean) => void;
};

type Props = {
  children: React.ReactNode;
};

const MenuContext = createContext<MenuContext | null>(null);

export function Menu({ children }: Props) {
  const [open, toggle] = useState(false);

  const state = { open, toggle };

  return <MenuContext.Provider value={state}>{children}</MenuContext.Provider>;
}

function Toggle() {
  const { open, toggle }: MenuContext = useContext(MenuContext);

  return (
    <button
      className='absolute w-8 h-8 top-1 right-1 rounded-full bg-black flex justify-center items-center'
      onClick={() => toggle(!open)}>
      <AiOutlineMenu color='#fff' />
    </button>
  );
}

Menu.Toggle = Toggle;
