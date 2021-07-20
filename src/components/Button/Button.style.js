import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: ${(props) =>
    props.color === 'primary' ? '#6b705c' : '#b7b7a4'};
  color: #ffffff;
  cursor: pointer;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  text-transform: uppercase;
`;
