import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({
  children,
  type,
  color,
  onToggle,
  addQty,
  minQty,
  onAdd,
  deleteItem,
}) => (
  <S.Button
    onClick={addQty || minQty || onAdd || onToggle || deleteItem}
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
