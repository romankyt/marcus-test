import { Post } from "@/app/home/components/PostList/type";
import { FC } from "react";

interface PostInformationProps {
  post: Post | any;
}
export const PostInformation: FC<PostInformationProps> = ({ post }) => {
  return (
    <div>
      <h1 className="text-black text-3xl capitalize font-bold">{post.title}</h1>
      <p className="text-gray-700 font-medium">{post.body}</p>
      <p className="text-gray-700 font-medium">User ID: {post.userId}</p>
    </div>
  );
};
