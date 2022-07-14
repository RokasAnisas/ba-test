import { StorageKeys } from './storage.types';

const set = (key: StorageKeys, value: string) => {
  if (window === undefined) {
    return;
  }
  window.localStorage.setItem(key, value);
};

const get = (key: StorageKeys) => {
  if (window === undefined) {
    return;
  }

  return window.localStorage.getItem(key);
};

export const storage = {
  set,
  get,
};
