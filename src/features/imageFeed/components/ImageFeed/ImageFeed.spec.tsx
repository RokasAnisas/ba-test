import { render } from '@/test/utils';

import { ImageFeed } from './ImageFeed';

describe('ImageFeed', () => {
  it('Should render label', () => {
    const TEST_LABEL = 'TEST LABEL';
    const { container } = render(<ImageFeed>{TEST_LABEL}</ImageFeed>);

    expect(container.firstChild?.textContent).toBe(TEST_LABEL);
  });
});
