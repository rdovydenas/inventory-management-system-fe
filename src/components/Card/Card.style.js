import styled from 'styled-components';

export const CardBlock = styled.div`
  box-sizing: border-box;
  border: 1px solid lightgray;
  width: calc(25% - 0.75rem);
  margin-right: 1rem;
  margin-top: 1rem;
  text-align: center;
  padding: 1rem 0;

  &:nth-child(4n) {
    margin-right: 0;
  }

  @media (max-width: 769px) {
    width: 100%;
  } ;
`;

export const CardImage = styled.img`
  max-width: 100%;
  height: 12rem;
  object-fit: cover;
  @media (max-width: 769px) {
    height: 18rem;
  } ;
`;

export const ButtonBlock = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

export const DelButton = styled.button`
  border: none;
  background-color: ${(props) => (props.color === 'red' ? 'red' : '#b7b7a4')};
  color: #ffffff;
  cursor: pointer;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  text-transform: uppercase;
`;
