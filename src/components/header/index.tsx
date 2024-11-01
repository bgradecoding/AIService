'use client';

import { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import { FiMenu, FiX, FiLogIn } from 'react-icons/fi';
import { MENU_LIST } from '@/constants/biz';
import LogoIcon from '../icons/Logo';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation'; // 추가
import Link from 'next/link';
// 타입 정의
type MenuItem = {
  id: number;
  menuName: string;
  url: string; // url 속성 추가
};

// Custom hook
const useMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState<number>(1); // 기본값으로 초기화

  // pathname이 준비되면 selected 상태를 업데이트
  useEffect(() => {
    if (pathname) {
      const currentMenuItem = MENU_LIST().find((item) => item.url === pathname);
      if (currentMenuItem) {
        setSelected(currentMenuItem.id);
      }
    }
  }, [pathname]);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const selectMenuItem = (id: number, url: string) => {
    // url 파라미터 추가
    setSelected(id);
    setIsMenuOpen(false);
    router.push(url); // URL 이동 추가
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { selected, isMenuOpen, toggleMenu, selectMenuItem, menuRef };
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
  onSelect: (id: number, url: string) => void; // url 파라미터 추가
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
          onClick={() => onSelect(item.id, item.url)} // url 전달
        />
      ))}
    </div>
  </div>
);

const LoginButton = () => {
  const t = useTranslations('common');
  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
      <Link href="/login" className="flex items-center justify-center">
        <FiLogIn className="w-6 h-6 md:hidden" />
        <span className="hidden md:block bg-primary text-white px-6 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
          {t('login')}
        </span>
      </Link>
    </div>
  );
};

const Header = () => {
  const { selected, isMenuOpen, toggleMenu, selectMenuItem, menuRef } =
    useMenu();

  return (
    <nav className="w-full fixed h-14 md:h-24 py-3 md:py-7 z-[20] border-b border-[#bdbdbd] shadow-sm flex justify-center bg-white">
      <div
        className="justify-center flex w-full mx-[5%] relative"
        ref={menuRef}
      >
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
