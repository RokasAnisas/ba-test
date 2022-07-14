import { ReactNode } from 'react';

export interface DropdownMenuProps {
  items: MenuItem[];
}

interface MenuItem {
  label?: string;
  action?: ReactNode;
}
