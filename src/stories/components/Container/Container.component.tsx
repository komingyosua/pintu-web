import React from 'react';

import config, { IContainer } from './Container.component.config';
import './Container.component.styles.scss';

const Container: React.FC<IContainer> = ({ children }) => {
  return <div className="container">{children}</div>;
};

Container.propTypes = config.propTypes;
Container.defaultProps = config.defaultProps;
Container.displayName = config.displayName;

export default Container;
