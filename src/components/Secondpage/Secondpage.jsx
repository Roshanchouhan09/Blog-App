import React from "react";
import styles from "./Secondpage.module.css";
import { useNavigate } from "react-router-dom";

const Secondpage = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const handleGetStarted = () => {
    navigate("/thirdpage");
  };

  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className={styles.parent}>
      <div className={styles.card}>
        <div className={styles.top}>
          <button onClick={handleBack}>Back</button>
          <h2>Blog</h2>
          <h3>Share your story</h3>
          <h4>with us</h4>
        </div>

        <div className={styles.center}>
          <input type="text" placeholder="Enter your Email" />

          <div className={styles["password-box"]}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              // style={{ fontWeight: 600, color: "#7f0d6e" }}
            />
            <span
              className={styles["toggle-password"]}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "🙈"}
            </span>
          </div>
          <p className={styles["forgot-password"]}>Forgot Password?</p>
          <button className={styles["login-btn"]}>Login</button>
        </div>
        <div className={styles.bottom}>
          <p className={styles.or}>Or login with</p>
          <button className={styles["google-btn"]}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
              alt="Google"
            />
            Login with Google
          </button>
          <p className={styles["new-user"]}>New user?</p>
          <button className={styles["signup-btn"]} onClick={handleGetStarted}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Secondpage;
