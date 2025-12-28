import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Firstpage.module.css";

const Firstpage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/secondpage");
  };

  return (
    <div className={styles.parent}>
      <div className={styles.card}>
        <div className={styles.top}>
          <h2>Blog</h2>
        </div>
        <div className={styles.center}>
          <h2>Share your story</h2>
          <h2>with us</h2>
        </div>
        <div className={styles.bottom}>
          <button type="button" onClick={handleGetStarted}>
            Get Started
          </button>

          <h3>Designed by</h3>
          <h4>TECHVIMAN</h4>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
