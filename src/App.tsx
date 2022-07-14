import { FC } from 'react';

import { Example } from '@/features/example/components/Example';
import { useApplyTheme } from '@/features/themeSwitcher/themeSwitcher.hooks';
import { ThemeSwitcherButton } from '@/features/themeSwitcher/components/ThemeSwitcherButton';
import { MainLayout } from '@/components/MainLayout';

export const App: FC = () => {
  useApplyTheme();

  return (
    <MainLayout>
      <ThemeSwitcherButton />
      <Example />
    </MainLayout>
  );
};
