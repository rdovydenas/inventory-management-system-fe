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
  height: 10rem;
  object-fit: cover;
`;

export const ButtonBlock = styled.div`
  width: 100%;
`;
