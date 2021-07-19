import React from "react";
import PropTypes from "prop-types";
import * as S from "./Title.style";

const Title = ({ children }) => (
  <S.TitleBlock>
    <S.Title>{children}</S.Title>
  </S.TitleBlock>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
