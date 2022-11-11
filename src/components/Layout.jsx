import { PostContextProvider } from "../context/PostContext";

const Layout = ({ children }) => {
  return (
    <PostContextProvider>
      <section className="flex-1 flex flex-col">{children}</section>
    </PostContextProvider>
  );
};

export default Layout;
