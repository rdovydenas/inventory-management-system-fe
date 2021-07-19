import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavBlock = styled.nav`
    text-align: center;
    padding: 1rem;
`;

export const NavLink = styled(Link)`
    color: #6b705c;
    font-size: 0.8rem;
    text-transform: uppercase;
    text-decoration: none;
    transition: ease-in-out 0.2s;

    &:first-child{
        margin-right: 1rem;
    }

    &:hover {
        color: #b7b7a4;
    }
`;