import { ChangeEvent, useState } from 'react';

export const useBindInput = () => {
  const [value, setValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const bind = { value, onChange };

  return {
    bind,
    value,
    setValue,
  };
};
