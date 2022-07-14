import { render } from '@/test/utils';

import { InfoText } from './InfoText';

describe('InfoText', () => {
  it('Should render label', () => {
    const TEST_LABEL = 'TEST LABEL';
    const { container } = render(<InfoText>{TEST_LABEL}</InfoText>);

    expect(container.firstChild?.textContent).toBe(TEST_LABEL);
  });
});
