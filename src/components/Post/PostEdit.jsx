import { useState } from "react";
import { usePostContext } from "../../context/PostContext";
import Loader from "../Loader";

const PostEdit = () => {
  const { isLoading } = usePostContext();

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleUpdatePost = (e) => {
    e.preventDefault();
    console.log("Tets");
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-4 p-8 mx-auto">
      <h1 className="font-bold text-2xl text-center">Edit Post</h1>

      <form className="flex flex-col w-96 gap-1" onSubmit={handleUpdatePost}>
        <label className="mt-6" htmlFor="author">
          Author
        </label>
        <input
          value={author}
          onChange={(e) => setAuthor((previousAuthor) => e.target.value)}
          className="bg-gray-100 outline-none border-none p-2 rounded-md"
          type="text"
          id="author"
          name="author"
          placeholder="Entter the author's name"
        />

        <label className="mt-6" htmlFor="title">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle((previousTitle) => e.target.value)}
          className="bg-gray-100 outline-none border-none p-2 rounded-md"
          type="text"
          id="title"
          name="title"
          placeholder="Entter the post's title"
        />

        <label className="mt-6" htmlFor="body">
          Body
        </label>
        <input
          value={body}
          onChange={(e) => setBody((previousBody) => e.target.value)}
          className="bg-gray-100 outline-none border-none p-2 rounded-md"
          type="text"
          id="body"
          name="body"
          placeholder="Entter the post's body"
        />

        <button
          className="bg-black text-white text-lg font-bold flex justify-center items-center p-2 rounded-md mt-6"
          type="submit"
        >
          Edit Post
        </button>
      </form>
    </div>
  );
};

export default PostEdit;
