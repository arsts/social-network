import React from "react";
import logo from "../../logo.svg";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, login, logout }) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="" />
      <div className={s.loginBlock}>
        {isAuth ? (
          <p>
            {login} - <button onClick={logout}>Log out</button>
          </p>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
