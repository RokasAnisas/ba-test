import { FC } from 'react';
import classNames from 'classnames/bind';

import { LogoProps } from './Logo.props';

import styles from './Logo.module.scss';
const cx = classNames.bind(styles);

export const Logo: FC<LogoProps> = () => {
  const className = 'logo';

  return (
    <div className={cx(className)}>
      <span className={cx(`${className}__label`)}>TESTHY</span>
    </div>
  );
};
