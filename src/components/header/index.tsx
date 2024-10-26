'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LogoIcon from '../icons/Logo';
import Link from 'next/link';
import { MENU_LIST } from '@/constants/biz';

const Header = () => {
  return (
    <nav className="w-full fixed h-[56px] sm:h-[111px] py-3 sm:py-7 z-[20] border-b border-[#bdbdbd] shadow-sm flex justify-center">
      <div className="justify-between flex w-full px-[10%]">
        <Logo />
        <div className="justify-start items-center gap-[308px] flex">
          <div className="w-[406px] h-[25px] justify-center items-start gap-10 flex">
            {MENU_LIST().map((v) => (
              <div key={v.id} className="justify-center items-center flex">
                <div className="text-center text-[#c00c3f] text-base font-bold">
                  {v.menuName}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="justify-end items-center gap-4 flex">
          <div className="justify-start items-end gap-6 flex">
            <div className="w-6 h-6 p-1 justify-center items-center flex"></div>
            <div className="h-[30px] justify-center items-center gap-2 flex">
              <div className="grow shrink basis-0 text-center text-neutral-700 text-xl font-normal">
                EN
              </div>
              <div className="h-6 px-[6.12px] py-[8.30px] justify-center items-center flex"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center">
      <LogoIcon />
      <span className="text-primary text-3xl font-semibold pl-[6px]">
        AI STS
      </span>
    </div>
  );
};

export default Header;
