import { render } from '@/test/utils';

import { GridImage } from './GridImage';

describe('GridImage', () => {
  it('Should render label', () => {
    const TEST_LABEL = 'TEST LABEL';
    const { container } = render(<GridImage>{TEST_LABEL}</GridImage>);

    expect(container.firstChild?.textContent).toBe(TEST_LABEL);
  });
});
