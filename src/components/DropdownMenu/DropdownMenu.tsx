import { FC } from 'react';
import classNames from 'classnames/bind';
import { MdOutlineSettings } from 'react-icons/md';

import { DropdownMenuProps } from './DropdownMenu.props';

import styles from './DropdownMenu.module.scss';
const cx = classNames.bind(styles);

export const DropdownMenu: FC<DropdownMenuProps> = () => {
  const className = 'dropdown-menu';

  return (
    <div className={cx(className)}>
      <button className={cx(`${className}__launcher`)}>
        <MdOutlineSettings />
      </button>
    </div>
  );
};
