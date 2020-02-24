import React from "react";
import s from "./Navbar.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <div>Profile</div>
      <div>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>
    </nav>
  );
};

export default Navigation;
