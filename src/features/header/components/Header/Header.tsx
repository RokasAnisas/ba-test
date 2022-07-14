import { FC } from 'react';
import classNames from 'classnames/bind';

import { Logo } from '@/components/Logo';
import { InfoText } from '@/components/InfoText';
import { Button } from '@/components/Button';
import { DropdownMenu } from '@/components/DropdownMenu';
import { en } from '@/translations/en';

import { HeaderProps } from './Header.props';

import styles from './Header.module.scss';
const cx = classNames.bind(styles);

export const Header: FC<HeaderProps> = () => {
  const className = 'header';

  return (
    <header className={cx(className)}>
      <div className={cx(`${className}__container`, '-left')}>
        <Logo />
      </div>
      <div className={cx(`${className}__container`, '-right')}>
        <InfoText description={en.pressSpaceToShuffleOr} />
        <Button>{en.clickHere}</Button>
        <DropdownMenu items={[{ label: 'Grid size' }, { label: 'Theme' }]} />
      </div>
    </header>
  );
};
