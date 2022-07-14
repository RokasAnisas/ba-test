import { FC } from 'react';
import classNames from 'classnames/bind';

import { DropdownMenuItemProps } from './DropdownMenuItem.props';

import styles from './DropdownMenuItem.module.scss';
const cx = classNames.bind(styles);

export const DropdownMenuItem: FC<DropdownMenuItemProps> = ({
  label,
  children,
}) => {
  const className = 'dropdown-menu-item';

  return (
    <div className={cx(className)}>
      <span className={cx(`${className}__label`)}>{label}</span>
      <div className={cx(`${className}__action`)}>{children}</div>
    </div>
  );
};
