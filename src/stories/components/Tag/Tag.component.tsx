import React from 'react';

import { Tag as TagComponent } from 'antd';

import config, { ITag } from './Tag.component.config';
import './Tag.component.styles.scss';

const { CheckableTag } = TagComponent;

const Tag: React.FC<ITag> = ({ index, label, icon, checked, onChange }) => {
  return (
    <CheckableTag key={index} checked={checked} onChange={onChange}>
      {icon}
      {label}
    </CheckableTag>
  );
};

Tag.propTypes = config.propTypes;
Tag.defaultProps = config.defaultProps;
Tag.displayName = config.displayName;

export default Tag;
