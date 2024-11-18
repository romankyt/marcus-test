"use client";
import React, { FC } from "react";
import { Post } from "./type";
import { PostItem } from "../Post";

interface PostListProps {
  posts: Post[];
}
export const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <div className="flex flex-wrap justify-between pt-8 gap-8 bg-white px-4">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};
