import { FC } from 'react';
import classNames from 'classnames/bind';

import accessDeniedSvg from '@/assets/undraw_access_denied_re_awnf.svg';
import { en } from '@/translations/en';

import { ErrorImageProps } from './ErrorImage.props';

import styles from './ErrorImage.module.scss';
const cx = classNames.bind(styles);

export const ErrorImage: FC<ErrorImageProps> = () => {
  const className = 'error-image';

  return (
    <div className={cx(className)}>
      <img
        className={cx(`${className}__error-image`)}
        src={accessDeniedSvg}
        alt={en.accessDenied}
      />
      <span className={cx(`${className}__error-message`)}>
        {en.accessDenied}
      </span>
    </div>
  );
};
