import { useCallback } from 'react';

export const randomInt = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max - min));
};

export const useRandomInt = (min: number, max: number) => {
  return useCallback(() => randomInt(min, max), [min, max]);
};
