import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import * as S from './Header.style';

const Header = () => {
  const token = localStorage.getItem('token');
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();

  const logOut = () => {
    localStorage.removeItem('token');
    history.push('/');
    authContext.setLoggedIn(false);
  };

  if (location.pathname === '/add') {
    return (
      <S.NavBlock>
        <S.NavLink to="/dashboard">Go back</S.NavLink>
        <S.NavLink to="/" onClick={logOut}>
          Log out
        </S.NavLink>
      </S.NavBlock>
    );
  } else if (token) {
    return (
      <S.NavBlock>
        <S.NavLink to="/" onClick={logOut}>
          Log out
        </S.NavLink>
      </S.NavBlock>
    );
  }
  return (
    <header>
      <S.NavBlock>
        {/* <S.NavLink to="/register">Register</S.NavLink> */}
        <S.NavLink to="/">Login</S.NavLink>
      </S.NavBlock>
    </header>
  );
};

export default Header;
