import { createMessagesFor } from '@/utils/i18n';
import useLocaleStore from '@/stores/store/configStore';

export const MENU_LIST = () => {
  const { locale } = useLocaleStore.getState();
  const t = createMessagesFor(locale);
  return [
    {
      id: 1,
      menuName: t('menu.main.home'),
      url: '/', //나중에 상수 처리
    },
    {
      id: 2,
      menuName: t('menu.main.courses'),
      url: '/courses', //나중에 상수 처리
    },
    {
      id: 3,
      menuName: t('menu.main.challenges'),
      url: '/challenges', //나중에 상수 처리
    },
    {
      id: 4,
      menuName: t('menu.main.dashboard'),
      url: '/dashboard', //나중에 상수 처리
    },
  ];
};
