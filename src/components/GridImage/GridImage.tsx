import { FC } from 'react';
import classNames from 'classnames/bind';

import { GridImageProps } from './GridImage.props';

import styles from './GridImage.module.scss';
const cx = classNames.bind(styles);

export const GridImage: FC<GridImageProps> = ({ src, alt }) => {
  const className = 'grid-image';

  return (
    <button className={cx(className)}>
      <img className={cx(`${className}__image`)} src={src} alt={alt} />
    </button>
  );
};
