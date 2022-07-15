import { render } from '@/test/utils';

import { Button } from './Button';

describe('Button', () => {
  it('Should render label', () => {
    const TEST_LABEL = 'TEST LABEL';
    const { container } = render(<Button>{TEST_LABEL}</Button>);

    expect(container.firstChild?.textContent).toBe(TEST_LABEL);
  });
});
