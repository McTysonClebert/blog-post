import { BiPencil, BiTrash } from "react-icons/bi";
import moment from "moment";
import { usePostContext } from "../../context/PostContext";
import { useNavigate } from "react-router-dom";

const PostItem = ({ post }) => {
  const navigate = useNavigate();

  const { isLoading, removePost, getPosts } = usePostContext();

  const handleRemove = (id) => {
    removePost(id);

    if (!isLoading) {
      getPosts();
    }
  };

  return (
    <article className="bg-gray-100 h-auto w-full rounded-md py-2 px-4 relative">
      <p className="font-bold text-xs italic absolute top-4 right-4">
        {moment(post.date).fromNow()}
      </p>
      <h2 className="font-bold text-xl mt-6 mb-2">
        {post.title.length > 30
          ? `${post.title.substring(0, 30)} ...`
          : post.title}
      </h2>
      <p className="text-lg text-gray-700">
        {post.body.length > 380
          ? `${post.body.substring(0, 380)} ...`
          : post.body}
      </p>
      <p className="font-bold mt-4">{post.author}</p>

      <div className="flex gap-1 p-2 mt-4">
        <BiPencil
          size={24}
          className="cursor-pointer"
          onClick={() => {
            navigate(`/edit/${post.id}/`);
          }}
        />
        <BiTrash
          size={24}
          className="cursor-pointer"
          onClick={() => handleRemove(post.id)}
        />
      </div>
    </article>
  );
};

export default PostItem;
