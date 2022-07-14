import { FC } from 'react';

import { useApplyTheme } from '@/features/themeSwitcher/themeSwitcher.hooks';
import { MainLayout } from '@/components/MainLayout';
import { ImageFeed } from '@/features/imageFeed/components/ImageFeed';
import { Header } from '@/features/header/components/Header';

export const App: FC = () => {
  useApplyTheme();

  return (
    <MainLayout header={<Header />}>
      <ImageFeed />
    </MainLayout>
  );
};
