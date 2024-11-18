import { PostList } from "./components/PostList";

const Page = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await data.json();

  return (
    <div className="w-full bg-white pt-8 px-4">
      <h1 className="text-black text-3xl">Welcome to our Home page!</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Page;
