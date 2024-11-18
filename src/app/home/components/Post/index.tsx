import { FC } from "react";
import { Post } from "../PostList/type";
import { useRouter } from "next/navigation";

interface PostProps {
  post: Post;
}
export const PostItem: FC<PostProps> = ({ post }) => {
  const router = useRouter();
  return (
    <div
      className="border-[1px] border-solid w-[30%] rounded-lg p-4 bg-red-400"
      onClick={() => router.push(`/home/${post.id}`)}
    >
      <h2 className="text-black text-2xl mb-2 capitalize">{post.title}</h2>
      <h2 className="text-black text-lg">{post.body}</h2>
    </div>
  );
};
