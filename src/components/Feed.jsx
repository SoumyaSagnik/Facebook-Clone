import "../css/Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../Firebase.js";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  // db connection
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );

    return () => unsub();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post?.data.profilePic}
          message={post?.data.message}
          timestamp={post?.data.timestamp}
          username={post?.data.username}
          image={post?.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;
