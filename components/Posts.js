import React from "react";
import Post from "./Post";

const DUMMY_DATA = [
  {
    id: "123",
    username: "Siddhesh",
    userImg:
      "https://lh3.googleusercontent.com/a-/AOh14GhHILg5ido3i64QIxSc1uEutWDVVkTh2qSH__0kJw=s96-c",
    img: "https://lh3.googleusercontent.com/a-/AOh14GhHILg5ido3i64QIxSc1uEutWDVVkTh2qSH__0kJw=s96-c",
    caption: "<<__-__>>",
  },
];

function Posts() {
  return (
    <div>
      {DUMMY_DATA.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
      <Post />
    </div>
  );
}

export default Posts;
