import Image from 'next/image';
import BannerImg from '@/res/img/bannerImg.svg';
import { useTranslations } from 'next-intl';

const MainBanner = () => {
  const t = useTranslations('main.banner');
  return (
    <div className="w-full h-auto min-h-[500px] relative bg-gradient-to-r from-[#c00c3f] to-[#ff4f7d] p-8 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-6 mb-8 md:mb-0">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          {t('title')}
        </h1>
        <p className="text-white text-lg md:text-xl font-normal">
          {t('description')}
        </p>
        <button className="px-6 py-3 bg-[#ebad25] rounded-lg text-white text-base font-normal transition-all hover:bg-[#ffc107] hover:shadow-lg">
          {t('button')}
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <BannerImg className="w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px]" />
      </div>
    </div>
  );
};

export default MainBanner;
