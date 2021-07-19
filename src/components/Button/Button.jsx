import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({
  children,
  type,
  handleClick,
  color,
  onToggle,
  addQty,
  minQty,
  addPage,
}) => (
  <S.Button
    onDoubleClick={onToggle}
    onClick={addQty || minQty || addPage}
    type={type}
    color={color}
  >
    {children}
  </S.Button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  color: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  type: 'button',
  color: 'primary',
};

export default Button;
