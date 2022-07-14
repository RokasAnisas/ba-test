import { FC } from 'react';

import { useApplyTheme } from '@/features/themeSwitcher/themeSwitcher.hooks';
import { MainLayout } from '@/components/MainLayout';
import { GridImage } from '@/components/GridImage';

export const App: FC = () => {
  useApplyTheme();

  return (
    <MainLayout>
      <GridImage src="https://picsum.photos/200/300" />
    </MainLayout>
  );
};
