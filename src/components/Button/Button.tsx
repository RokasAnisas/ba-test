import { FC } from 'react';
import classNames from 'classnames/bind';
import { RiLoader4Fill } from 'react-icons/ri';

import { ButtonProps } from './Button.props';

import style from './Button.module.scss';
const cx = classNames.bind(style);

export const Button: FC<ButtonProps> = ({ children, onClick, loading }) => {
  const className = 'button';

  return (
    <button
      className={cx(className, { 'is-loading': loading })}
      onClick={onClick}
      disabled={loading}
    >
      <span className={cx(`${className}__label`)}>{children}</span>
      <div className={cx(`${className}__loader`, { 'is-loading': loading })}>
        <RiLoader4Fill className={cx(`${className}__loader-icon`)} />
      </div>
    </button>
  );
};
