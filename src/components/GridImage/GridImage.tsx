import { FC } from 'react';
import classNames from 'classnames/bind';
import { FaUnlock, FaLock } from 'react-icons/fa';
import { RiLoader4Fill } from 'react-icons/ri';

import { en } from '@/translations/en';

import { GridImageProps } from './GridImage.props';

import styles from './GridImage.module.scss';
const cx = classNames.bind(styles);

export const GridImage: FC<GridImageProps> = ({
  src,
  alt,
  onClick,
  isLocked,
  isLoading,
}) => {
  const className = 'grid-image';

  return (
    <button
      className={cx(className, {
        'is-locked': isLocked,
        'is-loading': isLoading,
      })}
      onClick={onClick}
    >
      {!isLoading && (
        <img className={cx(`${className}__image`)} src={src} alt={alt} />
      )}
      <div className={cx(`${className}__description`)}>
        {isLocked ? <FaLock /> : <FaUnlock />}
        {isLocked ? en.clickToUnlock : en.clickToLock}
      </div>
      <div className={cx(`${className}__loader`)}>
        <RiLoader4Fill className={cx(`${className}__loader-icon`)} />
      </div>
    </button>
  );
};
