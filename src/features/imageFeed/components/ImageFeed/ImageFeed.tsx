import { FC, useState } from 'react';
import classNames from 'classnames/bind';

import { GridImage } from '@/components/GridImage';

import { ImageFeedProps } from './ImageFeed.props';
import { useGetTrendingGifs } from '../../imageFeed.query';

import styles from './ImageFeed.module.scss';
const cx = classNames.bind(styles);

export const ImageFeed: FC<ImageFeedProps> = () => {
  const className = 'image-feed';
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const { data } = useGetTrendingGifs(8, 4);

  const images = data?.data;

  const toggleItem = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(state => state.filter(item => item !== index));

      return;
    }
    setSelectedItems(state => [...state, index]);
  };

  return (
    <div className={cx(className)}>
      {images?.map((item, i) => {
        return (
          <GridImage
            key={i}
            src={item?.images?.downsized?.url}
            onClick={() => toggleItem(i)}
            isSelected={selectedItems.includes(i)}
          />
        );
      })}
    </div>
  );
};
