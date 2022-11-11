import { usePostContext } from "../../context/PostContext";
import Loader from "../Loader";
import PostItem from "./PostItem";

const PostList = () => {
  const { isLoading, posts } = usePostContext();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="flex flex-col w-5/12 mx-auto my-16">
      <h1 className="font-bold text-3xl my-4">Posts</h1>
      <section className="flex flex-col gap-8 w-full">
        {posts.map((post, index) => (
          <PostItem post={post} key={index} />
        ))}
      </section>
    </section>
  );
};

export default PostList;
