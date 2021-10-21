import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          className="rounded-full object-contain h-12 border p-1 mr-3 w-12"
          src={userImg}
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>
      {/* Post img */}
      <div>
        <img className="object-cover w-full" src={img} alt="Post" />
      </div>
      {/* Buttons */}

      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4 ">
          <HeartIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out" />
          <ChatIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out" />
          <PaperAirplaneIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out" />
        </div>
        <BookmarkIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out" />
      </div>
      {/* caption */}
      {/* comments */}
      <p className="p-5 truncate">
        <spam className="font-bold">{username}</spam> {caption}
      </p>
      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1"
        />
        <button className="font-bold text-blue-700 focus:ring-0 outline-none">
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
