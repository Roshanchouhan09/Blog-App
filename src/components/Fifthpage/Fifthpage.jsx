import React, { useState } from "react";
import styles from "./Fifthpage.module.css";
import { useNavigate } from "react-router-dom";

import {
  FaHome,
  FaBookmark,
  FaSearch,
  FaUser,
  FaHeart,
  FaRegHeart,
  FaComment,
  FaBell,
  FaPlus,
  FaArrowLeft,
} from "react-icons/fa";

const initialPosts = [
  {
    id: 1,
    title: "Article heading",
    author: "Old Blogger",
    createdAt: Date.now() - 600000,
    content: "Write something.",
    likes: 20,
    liked: false,
  },
];

// Time ago logic
const timeAgo = (time) => {
  const diff = Math.floor((Date.now() - time) / 1000);
  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hour ago`;
  return `${Math.floor(diff / 86400)} day ago`;
};

const Fifthpage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState("");

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/sixthpage");
  };

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleAddPost = () => {
    if (!newPost.trim()) return;

    const newPostObj = {
      id: Date.now(),
      title: "New Post",
      author: "You",
      createdAt: Date.now(),
      content: newPost,
      likes: 0,
      liked: false,
    };

    setPosts([newPostObj, ...posts]);
    setNewPost("");
  };

  return (
    <div className={styles.parent}>
      <div className={styles.card}>
        <div className={styles.feedContainer}>
          <div className={styles.header}>
            <button
              className={styles.backBtn}
              onClick={() => window.history.back()}
            >
              <FaArrowLeft />
            </button>
            <h3>New feeds</h3>
            <div className={styles.icons}>
              <FaBell />
              <FaBookmark />
              <FaUser />
            </div>
          </div>

          <div className={styles.searchBox}>
            <div className={styles.writeBox}>
              <FaUser className={styles.userIcon} />

              <input
                type="text"
                placeholder="search"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />

              <FaSearch className={styles.searchIcon} />
            </div>
          </div>

          {posts.map((post) => (
            <div className={styles.postCard} key={post.id}>
              <div className={styles.top}>
                <h2>{post.title}</h2>

                <div className={styles.author}>
                  <FaUser />
                  <div>
                    <p>{post.author}</p>
                    <span>{timeAgo(post.createdAt)}</span>
                  </div>
                </div>
              </div>

              <div className={styles.center}>
                <p className={styles.content}>{post.content}</p>
              </div>

              <div className={styles.bottom}>
                <button className={styles.readBtn}>Read more</button>

                <div className={styles.actions}>
                  <span onClick={() => handleLike(post.id)}>
                    {post.liked ? <FaHeart color="red" /> : <FaRegHeart />}
                    {post.likes}
                  </span>
                  <FaComment />
                  <FaBookmark />
                </div>
              </div>
            </div>
          ))}

          <button className={styles.fab} onClick={handleAddPost}>
            <FaPlus onClick={handleGetStarted} />
          </button>

          <div className={styles.bottomm}>
            <FaHome className={styles.navIcon} title="Home" />
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

export default Fifthpage;
