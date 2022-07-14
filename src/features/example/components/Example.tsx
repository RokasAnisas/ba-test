import { useAppDispatch, useAppSelector } from '@/middleware/redux/redux.hooks';
import { Button } from '@/components/Button';
import { useBindInput } from '@/utility/hooks/useBindInput';

import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from '../example.slice';
import { useGetExample } from '../example.query';

export const Example = () => {
  const { bind, value, setValue } = useBindInput();
  const { data, isLoading } = useGetExample();

  const example = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const increaseBy = () => {
    dispatch(incrementByAmount(+value));
    setValue('');
  };

  return (
    <div>
      <h3>State value: {example}</h3>
      <Button onClick={() => dispatch(increment())}>+ 1</Button>
      <Button onClick={() => dispatch(decrement())}>- 1</Button>
      <div>
        <span>Increment by value</span>
        <input type="number" {...bind} />
        <Button onClick={increaseBy}>Increase by</Button>
      </div>
      <br />
      <div>
        <span>Random fact</span>
        <div>
          <i>{isLoading ? 'Loading...' : data?.data.fact}</i>
        </div>
      </div>
    </div>
  );
};
