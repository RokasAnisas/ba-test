import { FC, useId, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { MdOutlineSettings } from 'react-icons/md';

import { useOutsideClick } from '@/features/utility/useOutsideClick';

import { DropdownMenuProps } from './DropdownMenu.props';

import styles from './DropdownMenu.module.scss';
const cx = classNames.bind(styles);

export const DropdownMenu: FC<DropdownMenuProps> = () => {
  const className = 'dropdown-menu';
  const menuId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => setMenuOpen(false));

  return (
    <div className={cx(className)} ref={ref}>
      <button
        className={cx(`${className}__launcher`, { 'is-open': menuOpen })}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setMenuOpen(state => !state)}
      >
        <MdOutlineSettings />
      </button>
      <ul
        className={cx(`${className}__menu`, { 'is-open': menuOpen })}
        id={menuId}
        role="menu"
      >
        <li className={cx(`${className}__menu-item`)}>Menu item 1</li>
        <li className={cx(`${className}__menu-item`)}>Menu item 2</li>
      </ul>
    </div>
  );
};
