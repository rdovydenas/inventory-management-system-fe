import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import * as S from "./Header.style";

const Header = () => {
  const authContext = useContext(AuthContext);

  const logOut = () => {
    authContext.setAuth("");
  };

  if (authContext.auth) {
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
        <S.NavLink to="/register">Register</S.NavLink>
        <S.NavLink to="/">Login</S.NavLink>
      </S.NavBlock>
    </header>
  );
};

export default Header;
