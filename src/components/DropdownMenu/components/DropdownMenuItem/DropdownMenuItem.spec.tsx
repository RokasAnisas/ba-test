import { render } from '@/test/utils';

import { DropdownMenuItem } from './DropdownMenuItem';

describe('DropdownMenuItem', () => {
  it('Should render label', () => {
    const TEST_LABEL = 'TEST LABEL';
    const { container } = render(
      <DropdownMenuItem>{TEST_LABEL}</DropdownMenuItem>
    );

    expect(container.firstChild?.textContent).toBe(TEST_LABEL);
  });
});
