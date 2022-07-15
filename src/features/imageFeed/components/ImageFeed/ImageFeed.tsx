import { FC, useEffect } from 'react';
import classNames from 'classnames/bind';

import { useAppDispatch, useAppSelector } from '@/middleware/redux/redux.hooks';
import { GridImage } from '@/components/GridImage';

import { ImageFeedProps } from './ImageFeed.props';
import { useGetTrendingGifs } from '../../imageFeed.query';
import {
  selectActiveGrid,
  selectLockedCells,
  toggleLockCell,
  updateGrid,
} from '../../imageFeed.slice';
import { useUpdateOnSpace } from '../../imageFeed.hooks';
import { ErrorImage } from '../ErrorImage';

import styles from './ImageFeed.module.scss';
const cx = classNames.bind(styles);

export const ImageFeed: FC<ImageFeedProps> = () => {
  const className = 'image-feed';
  const { data, isError } = useGetTrendingGifs();
  const activeGrid = useAppSelector(selectActiveGrid);
  const lockedCells = useAppSelector(selectLockedCells);
  const dispatch = useAppDispatch();
  useUpdateOnSpace();

  useEffect(() => {
    if (!data?.data) return;

    dispatch(updateGrid(data.data));
  }, [data, dispatch]);

  if (isError) {
    return <ErrorImage />;
  }

  return (
    <div className={cx(className)}>
      {activeGrid?.map((item, i) => {
        return (
          <GridImage
            key={i}
            src={item.src}
            alt={item.alt}
            onClick={() => dispatch(toggleLockCell(i))}
            isSelected={lockedCells.includes(i)}
          />
        );
      })}
    </div>
  );
};
