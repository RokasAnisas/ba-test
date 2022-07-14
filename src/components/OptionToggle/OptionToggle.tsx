import { FC } from 'react';
import classNames from 'classnames/bind';

import { OptionToggleProps } from './OptionToggle.props';

import styles from './OptionToggle.module.scss';
const cx = classNames.bind(styles);

export const OptionToggle: FC<OptionToggleProps> = ({ options }) => {
  const className = 'option-toggle';

  return (
    <div className={cx(className)}>
      {options.map((option, i) => {
        return (
          <button
            key={i}
            onClick={option.onClick}
            className={cx(`${className}__option`, {
              'is-active': option.active,
            })}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
