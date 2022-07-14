import { FC } from 'react';
import classNames from 'classnames/bind';

import { ButtonProps } from './Button.props';

import style from './Button.module.scss';
const cx = classNames.bind(style);

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  const className = 'button';

  return (
    <button className={cx(className)} onClick={onClick}>
      <span className={cx(`${className}__label`)}>{children}</span>
    </button>
  );
};
