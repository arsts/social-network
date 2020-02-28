import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div class={styles.gooey}>
      <span class={styles.dot}></span>
      <div class={styles.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
