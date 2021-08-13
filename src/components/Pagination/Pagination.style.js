import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  @media (max-width: 769px) {
    justify-content: center;
  }
`;

export const Nav = styled.nav``;

export const Li = styled.li`
  border: 1px solid steelblue;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
`;

export const Link = styled.a`
  text-decoration: none;
`;
