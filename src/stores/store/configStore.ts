import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { SupportedLocale } from '@/types/config';

interface LocaleState {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
}

const getDefaultLocale = (): SupportedLocale => {
  // 브라우저가 없는 환경(SSR)에서는 'en' 반환
  if (typeof navigator === 'undefined') return 'en';

  const browserLocale = navigator.language.toLowerCase();

  // ko로 시작하면 ko, 그 외는 en 사용
  return browserLocale.startsWith('ko') ? 'en' : 'en';
};

const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: getDefaultLocale(),
      setLocale: (newLocale: SupportedLocale) => set({ locale: newLocale }),
    }),
    {
      name: 'locale-storage', // localStorage에 저장될 키 이름
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useLocaleStore;
