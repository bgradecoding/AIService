'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
  return (
    <nav>
      <div className="w-full h-[111px] px-[108px] py-7 bg-white border-b border-[#bdbdbd] justify-center items-center inline-flex">
        <div className="h-[55px] justify-start items-center gap-[263px] inline-flex">
          <div className="justify-start items-center gap-1 flex">
            <div className="text-center text-[#c00c3f] text-3xl font-semibold font-['Poppins'] leading-[61.60px]">
              AI STS
            </div>
          </div>
          <div className="justify-start items-center gap-[308px] flex">
            <div className="w-[406px] h-[25px] justify-center items-start gap-10 flex">
              <div className="justify-center items-center flex">
                <div className="text-center text-[#c00c3f] text-base font-bold font-['Poppins']">
                  Home
                </div>
              </div>
              <div className="justify-center items-center flex">
                <div className="text-center text-neutral-700 text-base font-normal font-['Poppins']">
                  Courses
                </div>
              </div>
              <div className="justify-center items-center flex">
                <div className="text-center text-neutral-700 text-base font-normal font-['Poppins']">
                  Contact us
                </div>
              </div>
              <div className="justify-center items-center flex">
                <div className="text-center text-neutral-700 text-base font-normal font-['Poppins']">
                  About us
                </div>
              </div>
            </div>
          </div>
          <div className="justify-end items-center gap-4 flex">
            <div className="justify-start items-end gap-6 flex">
              <div className="w-6 h-6 p-1 justify-center items-center flex"></div>
              <div className="h-[30px] justify-center items-center gap-2 flex">
                <div className="grow shrink basis-0 text-center text-neutral-700 text-xl font-normal font-['Poppins']">
                  EN
                </div>
                <div className="h-6 px-[6.12px] py-[8.30px] justify-center items-center flex"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
