import { PostInformation } from "./components/PostInformation";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  let post = await data.json();

  return (
    <div className="w-full h-[100vh] bg-white p-8">
      <PostInformation post={post} />
    </div>
  );
};

export default Page;
