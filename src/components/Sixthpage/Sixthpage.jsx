import React from "react";
import styles from "./Sixthpage.module.css";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaRegHeart,
  FaRegBookmark,
  FaBookmark,
  FaHome,
  FaBell,
  FaSearch,
  FaUser,
} from "react-icons/fa";

const Sixthpage = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <div className={styles.parent}>
      <div className={styles.card}>
        <div className={styles.top}>
          <div className={styles.backBtn}>
            <button className={styles.backButton} onClick={handleBack}>
              <FaArrowLeft />
            </button>
          </div>
          <h1 style={styles.heading}>Article heading</h1>
          <h3 style={styles.subHeading}>Article</h3>
        </div>

        <div style={styles.center}>
          <div style={styles.floatingIcons}>
            <div className={styles.iconCircle}>
              <FaRegHeart />
            </div>
            <div className={styles.iconCircles}>
              <FaRegBookmark />
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <FaHome />
          <FaBell />
          <FaBookmark />
          <FaSearch />
          <FaUser />
        </div>
      </div>
    </div>
  );
};

export default Sixthpage;
