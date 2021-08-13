import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: ${(props) =>
    props.color === 'danger'
      ? 'red'
      : props.color === 'primary'
      ? 'steelblue'
      : 'lightblue'};
  color: #ffffff;
  cursor: pointer;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  text-transform: uppercase;
  transition: ease-in-out 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;
