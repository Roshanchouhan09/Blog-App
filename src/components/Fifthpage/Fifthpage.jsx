// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import styles from "./Fifthpage.module.css";
// import {
//   FaHeart,
//   FaRegHeart,
//   FaComment,
//   FaBookmark,
//   FaHome,
//   FaBell,
//   FaSearch,
//   FaUser,
//   FaPlus,
// } from "react-icons/fa";

// const Fifthpage = () => {
//   const navigate = useNavigate();
//   const handleBack = () => navigate(-1);

//   const initialPosts = [
//     {
//       id: 1,
//       title: "Article heading",
//       author: "Old Blogger",
//       date: "Dec 22, 2025",
//       content: "Write something.",
//       likes: 0,
//       liked: false,
//       comments: [],
//     },
//     {
//       id: 2,
//       title: "Article heading",
//       author: "Old Blogger",
//       date: "Dec 22, 2025",
//       content: "Write something.",
//       likes: 0,
//       liked: true,
//       comments: [],
//     },
//   ];

//   const Fifthpage = () => {
//     const [posts, setPosts] = useState(initialPosts);
//     const [newPost, setNewPost] = useState("");

//     const handleLike = (id) => {
//       setPosts(
//         posts.map((post) =>
//           post.id === id
//             ? {
//                 ...post,
//                 liked: !post.liked,
//                 likes: post.liked ? post.likes - 1 : post.likes + 1,
//               }
//             : post
//         )
//       );
//     };

//     const handleAddPost = () => {
//       if (!newPost.trim()) return;

//       const post = {
//         id: Date.now(),
//         title: "Article heading",
//         author: "Old Blogger",
//         date: new Date().toDateString(),
//         content: newPost,
//         likes: 0,
//         liked: false,
//         comments: [],
//       };

//       setPosts([post, ...posts]);
//       setNewPost("");
//     };

//     return (
//       <div className={styles.parent}>
//         <div className={styles.card}>
//           <button onClick={handleBack}>❮</button>
//           <div className="feed-container">
//             <div className="header">
//               <h3>New feeds</h3>
//               <div className="icons">
//                 <FaBell />
//                 <FaBookmark />
//                 <FaUser />
//               </div>
//             </div>

//             <div className="search-box">
//               <input placeholder="search" />
//               <FaSearch />
//             </div>

//             {posts.map((post) => (
//               <div className="card" key={post.id}>
//                 <div className="card-header">
//                   <h2>{post.title}</h2>
//                   <div className="author">
//                     <FaUser />
//                     <div>
//                       <p>{post.author}</p>
//                       <span>{post.date}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <p className="content">{post.content}</p>

//                 <div className="card-footer">
//                   <button className="read-btn">Read more</button>

//                   <div className="actions">
//                     <span onClick={() => handleLike(post.id)}>
//                       {post.liked ? <FaHeart color="red" /> : <FaRegHeart />}
//                       {post.likes}
//                     </span>
//                     <FaComment />
//                     <FaBookmark />
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <button className="fab" onClick={handleAddPost}>
//               <FaPlus />
//             </button>

//             <div className="bottom-nav">
//               <FaHome />
//               <FaBell />
//               <FaBookmark />
//               <FaSearch />
//               <FaUser />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
// };

// export default Fifthpage;

import React from "react";
import { useState } from "react";
import "./Fifthpage.module.css";
import { FaHeart, FaRegHeart, FaComment, FaBookmark } from "react-icons/fa";

const Fifthpage = () => {
  const [Posts, setPosts] = useState([
    {
      id: 1,
      title: "Article heading",
      content: "This is an example post.",
      date: "Dec 22, 2025",
      likes: 0,
      liked: false,
    },
  ]);

  const [text, settext] = useState("");

  const handlePost = () => {
    if (text.trim() == "") return;

    const newPost = {
      id: Date.now(),
      title: "Article heading",
      content: text,
      data: new Date().toDateString(),
      likes: 0,
      liked: false,
    };

    SetPosts([newPost, ...Posts]);
    settext("");
  };

  return <div>Fifthpage</div>;
};

export default Fifthpage;
