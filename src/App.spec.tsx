import { describe, it, expect } from 'vitest';

import { render } from './test/utils';
import App from './App';

describe('test', () => {
  it('basic unit test', () => {
    expect(2).toBe(2);
  });

  it('Render app', () => {
    const { getByTestId } = render(<App />);
    const label = getByTestId('hello');

    expect(label.textContent).toBe('Hello Vite + React!');
  });
});
