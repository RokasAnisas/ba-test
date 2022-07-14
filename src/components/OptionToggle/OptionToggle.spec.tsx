import { render } from '@/test/utils';

import { OptionToggle } from './OptionToggle';

describe('OptionToggle', () => {
  it('Should render label', () => {
    const TEST_LABEL = 'TEST LABEL';
    const { container } = render(<OptionToggle>{TEST_LABEL}</OptionToggle>);

    expect(container.firstChild?.textContent).toBe(TEST_LABEL);
  });
});
