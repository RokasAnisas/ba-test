import { render } from '@/test/utils';

import { MainLayout } from './MainLayout';

describe('MainLayout', () => {
  it('Should render label', () => {
    const TEST_LABEL = 'TEST LABEL';
    const { container } = render(<MainLayout>{TEST_LABEL}</MainLayout>);

    expect(container.firstChild?.textContent).toBe(TEST_LABEL);
  });
});
