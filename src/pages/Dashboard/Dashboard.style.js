import styled from 'styled-components';

export const FlexContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 769px) {
    display: block;
  } ;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5em 0;
  outline: none;
  font-size: large;
`;

export const Button = styled.button``;
