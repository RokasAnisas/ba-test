import { FC } from 'react';
import classNames from 'classnames/bind';
import { marked } from 'marked';

import { InfoTextProps } from './InfoText.props';

import styles from './InfoText.module.scss';
const cx = classNames.bind(styles);

export const InfoText: FC<InfoTextProps> = ({ description }) => {
  const className = 'info-text';

  return (
    <div
      className={cx(className)}
      dangerouslySetInnerHTML={{ __html: marked(description) }}
    />
  );
};
