import { FC } from 'react';

import { useApplyTheme } from '@/features/themeSwitcher/themeSwitcher.hooks';
import { MainLayout } from '@/components/MainLayout';
import { ImageFeed } from '@/features/imageFeed/components/ImageFeed';

export const App: FC = () => {
  useApplyTheme();

  return (
    <MainLayout>
      <ImageFeed />
    </MainLayout>
  );
};
