import { render } from '@/test/utils';

import { Logo } from './Logo';

describe('Logo', () => {
  it('Should render label', () => {
    const TEST_LABEL = 'TEST LABEL';
    const { container } = render(<Logo>{TEST_LABEL}</Logo>);

    expect(container.firstChild?.textContent).toBe(TEST_LABEL);
  });
});
