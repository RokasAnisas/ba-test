import { ImageGridSize } from './imageFeed.enum';

export const IMAGE_FEED_SETTINGS = {
  DEFAULT_GRID_SIZE: ImageGridSize.m,
  DEFAULT_OFFSET: 0,
  MAX_OFFSET: 2999,
  QUERY_STALE_TIME: 1000 * 60 * 60 * 24,
};
