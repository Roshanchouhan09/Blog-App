import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Fourthpage.module.css";
import { FaHome, FaBell, FaBookmark, FaSearch, FaUser } from "react-icons/fa";

const Fourthpage = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const handleGetStarted = () => {
    navigate("/fifthpage");
  };

  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [imageName, setImageName] = useState("");
  const [videoName, setVideoName] = useState("");
  const [category, setCategory] = useState("Reading");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setVideoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.parent}>
      <div className={styles.card}>
        <div className={styles.backBtn}>
          <button className={styles.backButton} onClick={handleBack}>
            ❮
          </button>
        </div>
        <div className={styles.top}>
          <div className={styles.categorySection}>
            <h2>Category</h2>
            <div className={styles.categoryButtons}>
              <button
                className={category === "Reading" ? styles.active : ""}
                onClick={() => setCategory("Reading")}
              >
                Reading
              </button>
              <button
                className={category === "Writing" ? styles.active : ""}
                onClick={() => setCategory("Writing")}
              >
                Writing
              </button>
            </div>
          </div>

          {/* ---------- CENTER ---------- */}
          <div className={styles.center}>
            <div className={styles.box}>
              <div className={styles.uploadBox}>+</div>
              <p>Paragraph</p>
            </div>

            <div className={styles.box}>
              <div className={styles.uploadBox}>+</div>
              <p>Heading</p>
            </div>

            <div
              className={styles.box}
              onClick={() => imageInputRef.current.click()}
            >
              <div className={styles.uploadBox}>+</div>
              <p>Image</p>
              <span className={styles.fileName}>{imageName}</span>
              <input
                type="file"
                accept="image/*"
                ref={imageInputRef}
                hidden
                onChange={handleImageUpload}
              />
            </div>

            <div
              className={styles.box}
              onClick={() => videoInputRef.current.click()}
            >
              <div className={styles.uploadBox}>+</div>
              <p>Video</p>
              <span className={styles.fileName}>{videoName}</span>
              <input
                type="file"
                accept="video/*"
                ref={videoInputRef}
                hidden
                onChange={handleVideoUpload}
              />
            </div>

            <div className={styles.box}>
              <div className={styles.uploadBox}>+</div>
              <p>Page break</p>
            </div>

            <div className={styles.box}>
              <div className={styles.uploadBox}>+</div>
              <p>More</p>
            </div>
          </div>

          <div className={styles.bottom}>
            <FaHome
              className={styles.navIcon}
              title="Home"
              onClick={handleGetStarted}
            />
            <FaBell className={styles.navIcon} title="Bell" />
            <FaBookmark className={styles.navIcon} title="Save" />
            <FaSearch className={styles.navIcon} title="Search" />
            <FaUser className={styles.navIcon} title="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourthpage;
