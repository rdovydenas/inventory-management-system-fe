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
  padding: 0.5em;
  outline: none;
  border: 1px solid steelblue;
  font-size: large;
`;

export const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 3rem;
`;

export const Button = styled.button``;
