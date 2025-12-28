import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Thirdpage.module.css";

const Thirdpage = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const handleGetStarted = () => {
    navigate("/fourthpage");
  };

  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className={styles.parent}>
      <div className={styles.card}>
        <div className={styles.top}>
          <button onClick={handleBack}>❮</button>
          <h2>Blog</h2>
          <h3>Share your story</h3>
          <h4>with us</h4>
        </div>
        <div className={styles["profile-pic-section"]}>
          <span className={styles["user-icon"]}>👤</span>
        </div>

        <div className={styles.center}>
          <input type="text" placeholder="Enter Username" />

          <input type="email" placeholder="Enter your Email" />

          <div className={styles["password-box"]}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
            />
            <span
              className={styles["toggle-password"]}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <p className={styles.forgot}>Forget password?</p>

          <p className={styles.or}>Or login with</p>

          <button className={styles["google-btn"]}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
              alt="Google"
            />{" "}
            Login with Google
          </button>
        </div>

        <div className={styles.bottom}>
          <button className={styles["signup-btn"]} onClick={handleGetStarted}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thirdpage;
