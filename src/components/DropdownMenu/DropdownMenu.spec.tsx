import { render } from '@/test/utils';

import { DropdownMenu } from './DropdownMenu';

describe('DropdownMenu', () => {
  it('Should render label', () => {
    const TEST_LABEL = 'TEST LABEL';
    const { container } = render(<DropdownMenu>{TEST_LABEL}</DropdownMenu>);

    expect(container.firstChild?.textContent).toBe(TEST_LABEL);
  });
});
