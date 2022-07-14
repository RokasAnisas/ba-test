import { FC } from 'react';
import classNames from 'classnames/bind';

import { Logo } from '@/components/Logo';
import { InfoText } from '@/components/InfoText';
import { Button } from '@/components/Button';
import { ThemeSwitcherButton } from '@/features/themeSwitcher/components/ThemeSwitcherButton';
import { en } from '@/translations/en';

import { MainLayoutProps } from './MainLayout.props';

import styles from './MainLayout.module.scss';
const cx = classNames.bind(styles);

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const className = 'main-layout';

  return (
    <div className={cx(className)}>
      <header className={cx(`${className}__header`)}>
        <div className={cx(`${className}__header-container`, '-left')}>
          <Logo />
        </div>
        <div className={cx(`${className}__header-container`, '-right')}>
          <InfoText description={en.pressSpaceToShuffleOr} />
          <Button>{en.clickHere}</Button>
          <ThemeSwitcherButton />
        </div>
      </header>
      <main className={cx(`${className}__body`)}>{children}</main>
    </div>
  );
};
