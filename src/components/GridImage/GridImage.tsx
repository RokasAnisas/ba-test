import { FC } from 'react';
import classNames from 'classnames/bind';
import { FaUnlock, FaLock } from 'react-icons/fa';

import { en } from '@/translations/en';

import { GridImageProps } from './GridImage.props';

import styles from './GridImage.module.scss';
const cx = classNames.bind(styles);

export const GridImage: FC<GridImageProps> = ({
  src,
  alt,
  onClick,
  isLocked,
}) => {
  const className = 'grid-image';

  return (
    <button
      className={cx(className, { 'is-locked': isLocked })}
      onClick={onClick}
    >
      <img className={cx(`${className}__image`)} src={src} alt={alt} />
      <div className={cx(`${className}__description`)}>
        {isLocked ? <FaLock /> : <FaUnlock />}
        {isLocked ? en.clickToUnlock : en.clickToLock}
      </div>
    </button>
  );
};
