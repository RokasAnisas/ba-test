import { render } from '@/test/utils';

import { ErrorImage } from './ErrorImage';

describe('ErrorImage', () => {
  it('Should render label', () => {
    const TEST_LABEL = 'TEST LABEL';
    const { container } = render(<ErrorImage>{TEST_LABEL}</ErrorImage>);

    expect(container.firstChild?.textContent).toBe(TEST_LABEL);
  });
});
