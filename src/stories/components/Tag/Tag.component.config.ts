import PropTypes from 'prop-types';

export interface ITag {
  index?: number;
  label: string;
  icon?: JSX.Element;
  checked: boolean;
  onChange?: () => void;
}

const propTypes = {
  index: PropTypes.number,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

const defaultProps = {
  label: '',
  checked: false,
};

const displayName = 'Tag';

export default { propTypes, defaultProps, displayName };
