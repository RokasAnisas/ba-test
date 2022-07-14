import { FC, useState } from 'react';
import classNames from 'classnames/bind';

import { GridImage } from '@/components/GridImage';

import { ImageFeedProps } from './ImageFeed.props';

import styles from './ImageFeed.module.scss';
const cx = classNames.bind(styles);

const images = [
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/236/200/300',
  'https://picsum.photos/id/235/200/300',
  'https://picsum.photos/id/234/200/300',
  'https://picsum.photos/id/233/200/300',
  'https://picsum.photos/id/232/200/300',
  'https://picsum.photos/id/231/200/300',
  'https://picsum.photos/id/230/200/300',
];

export const ImageFeed: FC<ImageFeedProps> = () => {
  const className = 'image-feed';
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(state => state.filter(item => item !== index));

      return;
    }
    setSelectedItems(state => [...state, index]);
  };

  return (
    <div className={cx(className)}>
      {images.map((item, i) => {
        return (
          <GridImage
            key={i}
            src={item}
            onClick={() => toggleItem(i)}
            isSelected={selectedItems.includes(i)}
          />
        );
      })}
    </div>
  );
};
