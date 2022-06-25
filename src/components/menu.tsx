import { List } from 'phosphor-react';
import { FC } from 'react';
import { slide as BurgerMenu, Props } from 'react-burger-menu';

import '../styles/menu.css';
import { Sidebar } from './sidebar';

export const Menu: FC<Props> = ({ ...props }) => {
  return (
    <BurgerMenu
      customBurgerIcon={<List size={32} className="text-blue-500" />}
      width={'100%'}
      {...props}
    >
      <Sidebar className="!w-full" />
    </BurgerMenu>
  );
};
