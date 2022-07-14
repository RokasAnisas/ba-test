import { FC } from 'react';

import { Example } from '@/features/example/components/Example';
import { useApplyTheme } from '@/features/themeSwitcher/themeSwitcher.hooks';
import { ThemeSwitcherButton } from '@/features/themeSwitcher/components/ThemeSwitcherButton';

const App: FC = () => {
  useApplyTheme();

  return (
    <>
      <ThemeSwitcherButton />
      <Example />
    </>
  );
};

export default App;
