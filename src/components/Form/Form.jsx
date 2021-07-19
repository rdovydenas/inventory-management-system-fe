import React, { useContext } from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import * as S from "./Form.style";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const Form = ({ type }) => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const fetchFunction = (email, password) => {
    fetch(`http://localhost:2000/auth/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (type === "login") {
          if (data.token) {
            authContext.setAuth(data.token);
            history.push("/dashboard");
          }
        } else if (type === "register") {
          history.push("/");
        }
      });
  };

  const validation = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    if (email && password) {
      const schema = Yup.object().shape({
        email: Yup.string().email().max(255).min(5).required(),
        password: Yup.string().max(255).min(8).required(),
      });

      schema.isValid({ email, password }).then((data) => {
        data ? fetchFunction(email, password) : alert("Bad email or password");
      });
    } else {
      alert("Please write in email and password");
    }
  };
  return (
    <form onSubmit={validation}>
      <S.Input
        type="email"
        name="email"
        minLength="4"
        maxLength="255"
        placeholder="Email"
        required
      />
      <S.Input
        type="password"
        name="password"
        minLength="8"
        maxLength="255"
        placeholder="Password"
        required
      />
      <Button type="submit" color="primary" handleClick="submit">
        {type}
      </Button>
    </form>
  );
};

Form.propTypes = {
  type: PropTypes.oneOf(["login", "register"]).isRequired,
};

export default Form;
