import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const NEUTRAL_COLOR = 'neutral';
export const RED_COLOR = 'red';
export const GREEN_COLOR = 'green';

export const XSMALL_SIZE = 'xsmall';
export const SMALL_SIZE = 'small';

const COLORS_MAP = {
  [NEUTRAL_COLOR]: styles.neutral,
  [RED_COLOR]: styles.red,
  [GREEN_COLOR]: styles.green,
};

const SIZES_MAP = {
  [XSMALL_SIZE]: styles.xsmall,
  [SMALL_SIZE]: styles.small,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  className: '',
  color: NEUTRAL_COLOR,
  size: SMALL_SIZE,
};

function Button({
  children, onClick, color, size, className, ...rest
}) {
  const buttonClassName = `
  ${styles.button}
  ${className}
  ${COLORS_MAP[color]}
  ${SIZES_MAP[size]}
  `;

  return (
    <button
      className={buttonClassName}
      type="button"
      onClick={onClick}
      aria-label="button"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
