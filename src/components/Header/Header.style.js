import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBlock = styled.nav`
  text-align: right;
  padding: 1rem;
  margin-right: 3rem;
  @media (max-width: 768px) {
    text-align: center;
    margin: 0;
  }
`;

export const NavLink = styled(Link)`
  color: steelblue;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-decoration: none;
  transition: ease-in-out 0.2s;

  &:first-child {
    margin-right: 1rem;
  }

  &:hover {
    color: lightblue;
  }
`;
