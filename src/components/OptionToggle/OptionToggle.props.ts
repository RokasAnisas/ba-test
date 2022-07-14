export interface OptionToggleProps {
  options: Option[];
}

interface Option {
  label: string;
  active?: boolean;
  onClick?: () => void;
}
