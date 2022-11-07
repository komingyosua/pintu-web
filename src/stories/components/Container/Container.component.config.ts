import PropTypes from 'prop-types';

export interface IContainer {
  children: JSX.Element | JSX.Element[];
}

const propTypes = {
  children: PropTypes.any.isRequired,
};

const defaultProps = {};

const displayName = 'Container';

export default { propTypes, defaultProps, displayName };
