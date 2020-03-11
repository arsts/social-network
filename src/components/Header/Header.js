import React from "react";
import logo from "../../logo.svg";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={s.header}>
      <img src={logo} alt="" />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <p>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </p>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
