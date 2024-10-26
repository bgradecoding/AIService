'use client';

import { useState } from 'react';
import cn from 'classnames';
import { FiMenu, FiX } from 'react-icons/fi';
import { MENU_LIST } from '@/constants/biz';
import LogoIcon from '../icons/Logo';

// 타입 정의
type MenuItem = {
  id: number;
  menuName: string;
};

// Custom hook
const useMenu = () => {
  const [selected, setSelected] = useState<number>(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const selectMenuItem = (id: number) => {
    setSelected(id);
    setIsMenuOpen(false);
  };

  return { selected, isMenuOpen, toggleMenu, selectMenuItem };
};

// 컴포넌트 분리
const HamburgerIcon = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer md:hidden"
    onClick={onClick}
  >
    <div className="relative w-6 h-6">
      <FiMenu
        className={cn(
          'w-6 h-6 absolute transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0',
        )}
      />
      <FiX
        className={cn(
          'w-6 h-6 absolute transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90',
        )}
      />
    </div>
  </div>
);

const Logo = () => (
  <div className="flex items-center cursor-pointer">
    <LogoIcon className="w-8 h-8 md:w-12 md:h-12" />
    <span className="text-primary text-xl md:text-2xl font-semibold pl-1 md:pl-2 whitespace-nowrap">
      AI STS
    </span>
  </div>
);

const MenuItem = ({
  item,
  isSelected,
  onClick,
}: {
  item: MenuItem;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className={cn(
      'justify-center items-center flex w-full py-2 md:w-auto md:py-0',
      isSelected && 'text-primary text-base font-bold',
    )}
  >
    <div className="text-center text-base font-bold hover:text-primary cursor-pointer">
      {item.menuName}
    </div>
  </div>
);

const MenuItems = ({
  isOpen,
  selected,
  onSelect,
}: {
  isOpen: boolean;
  selected: number;
  onSelect: (id: number) => void;
}) => (
  <div
    className={cn(
      'absolute left-0 top-full bg-white w-full shadow-md',
      'flex-col items-start p-4',
      'md:relative md:top-auto md:bg-transparent md:shadow-none',
      'md:flex md:flex-row md:items-center md:gap-[308px] md:p-0',
      { hidden: !isOpen },
    )}
  >
    <div className="w-full h-auto flex-col md:w-[406px] md:h-[25px] md:flex-row justify-center items-start gap-4 md:gap-10 flex ml-[10%]">
      {MENU_LIST().map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          isSelected={selected === item.id}
          onClick={() => onSelect(item.id)}
        />
      ))}
    </div>
  </div>
);

const LoginButton = () => (
  <div className="absolute right-0 justify-end items-center gap-4 flex">
    <div className="justify-start items-end gap-6 flex">
      <div className="h-[30px] justify-center items-center gap-2 flex">
        <div className="grow shrink basis-0 text-center text-neutral-700 text-xl font-normal">
          login
        </div>
      </div>
    </div>
  </div>
);

const Header = () => {
  const { selected, isMenuOpen, toggleMenu, selectMenuItem } = useMenu();

  return (
    <nav className="w-full fixed h-14 md:h-24 py-3 md:py-7 z-[20] border-b border-[#bdbdbd] shadow-sm flex justify-center">
      <div className="justify-center flex w-full mx-[5%] relative">
        <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
        <Logo />
        <MenuItems
          isOpen={isMenuOpen}
          selected={selected}
          onSelect={selectMenuItem}
        />
        <LoginButton />
      </div>
    </nav>
  );
};

export default Header;
