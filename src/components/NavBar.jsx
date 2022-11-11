import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-16">
        <li>
          <Link to={"/"}>Posts</Link>
        </li>
        <li>
          <Link to={"/add"}>Add Post</Link>
        </li>
        <li>
          <Link to={"/edit"}>Edit Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
