import { render } from '@/test/utils';

import { Header } from './Header';

describe('Header', () => {
  it('Should render label', () => {
    const TEST_LABEL = 'TEST LABEL';
    const { container } = render(<Header>{TEST_LABEL}</Header>);

    expect(container.firstChild?.textContent).toBe(TEST_LABEL);
  });
});
