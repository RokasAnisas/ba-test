import axios from 'axios';
import { useQuery } from 'react-query';

interface ExampleQuery {
  fact: string;
  length: number;
}

export const useGetExample = () => {
  const exampleQuery = async () =>
    await axios.get<ExampleQuery>('https://catfact.ninja/fact');

  return useQuery('example', exampleQuery, {
    cacheTime: Infinity,
  });
};
