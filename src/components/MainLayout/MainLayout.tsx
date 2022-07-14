import { FC } from 'react';
import classNames from 'classnames/bind';

import { MainLayoutProps } from './MainLayout.props';

import styles from './MainLayout.module.scss';
const cx = classNames.bind(styles);

export const MainLayout: FC<MainLayoutProps> = ({ header, children }) => {
  const className = 'main-layout';

  return (
    <div className={cx(className)}>
      <div className={cx(`${className}__header`)}>{header}</div>
      <main className={cx(`${className}__body`)}>{children}</main>
    </div>
  );
};
