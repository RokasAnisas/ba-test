import { FC } from 'react';
import classNames from 'classnames/bind';

import { Logo } from '@/components/Logo';

import { MainLayoutProps } from './MainLayout.props';

import styles from './MainLayout.module.scss';
const cx = classNames.bind(styles);

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const className = 'main-layout';

  return (
    <div className={cx(className)}>
      <header className={cx(`${className}__header`)}>
        <Logo />
      </header>
      <main className={cx(`${className}__body`)}>{children}</main>
    </div>
  );
};