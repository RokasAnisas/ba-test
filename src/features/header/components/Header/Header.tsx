import { FC } from 'react';
import classNames from 'classnames/bind';

import { Logo } from '@/components/Logo';
import { InfoText } from '@/components/InfoText';
import { Button } from '@/components/Button';
import { DropdownMenu } from '@/components/DropdownMenu';
import { en } from '@/translations/en';
import { OptionToggle } from '@/components/OptionToggle';
import { useAppDispatch, useAppSelector } from '@/middleware/redux/redux.hooks';
import {
  selectTheme,
  setTheme,
} from '@/features/themeSwitcher/themeSwitcher.slice';
import {
  getNewImages,
  selectGridSize,
  selectLockedCells,
  setGridSize,
} from '@/features/imageFeed/imageFeed.slice';
import { ImageGridSize } from '@/features/imageFeed/imageFeed.enum';
import { confirmDialog } from '@/features/utility/confirmDialog';

import { HeaderProps } from './Header.props';

import styles from './Header.module.scss';
const cx = classNames.bind(styles);

export const Header: FC<HeaderProps> = () => {
  const className = 'header';
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(selectTheme);
  const gridSize = useAppSelector(selectGridSize);
  const lockedCells = useAppSelector(selectLockedCells);

  const GRID_OPTIONS = [ImageGridSize.s, ImageGridSize.m, ImageGridSize.l];

  return (
    <header className={cx(className)}>
      <div className={cx(`${className}__container`, '-left')}>
        <Logo />
      </div>
      <div className={cx(`${className}__container`, '-right')}>
        <InfoText description={en.pressSpaceToShuffleOr} />
        <Button onClick={() => dispatch(getNewImages())}>{en.clickHere}</Button>
        <DropdownMenu
          items={[
            {
              label: 'Theme',
              action: (
                <OptionToggle
                  options={[
                    {
                      label: 'dark',
                      onClick() {
                        dispatch(setTheme('dark'));
                      },
                      active: currentTheme === 'dark',
                    },
                    {
                      label: 'light',
                      onClick() {
                        dispatch(setTheme('light'));
                      },
                      active: currentTheme === 'light',
                    },
                  ]}
                />
              ),
            },
            {
              label: 'Grid size',
              action: (
                <OptionToggle
                  options={GRID_OPTIONS.map(option => ({
                    label: `${option}`,
                    active: gridSize === option,
                    onClick() {
                      confirmDialog({
                        message: en.lockedCellsWillBeLost,
                        callback() {
                          dispatch(setGridSize(option));
                        },
                        disabled: lockedCells.length === 0,
                      });
                    },
                  }))}
                />
              ),
            },
          ]}
        />
      </div>
    </header>
  );
};
