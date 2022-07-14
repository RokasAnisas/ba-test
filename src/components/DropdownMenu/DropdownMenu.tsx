import { FC, useId, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { MdOutlineSettings } from 'react-icons/md';

import { useOutsideClick } from '@/features/utility/useOutsideClick';

import { DropdownMenuProps } from './DropdownMenu.props';
import { DropdownMenuItem } from './components/DropdownMenuItem';

import styles from './DropdownMenu.module.scss';
const cx = classNames.bind(styles);

export const DropdownMenu: FC<DropdownMenuProps> = ({ items }) => {
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
        aria-expanded={menuOpen}
      >
        <MdOutlineSettings />
      </button>
      <ul
        className={cx(`${className}__menu`, { 'is-open': menuOpen })}
        id={menuId}
        role="menu"
      >
        {items.map((item, i) => {
          return (
            <DropdownMenuItem key={i} label={item.label}>
              {item.action}
            </DropdownMenuItem>
          );
        })}
      </ul>
    </div>
  );
};
