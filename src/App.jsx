import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import PostAdd from "./components/Post/PostAdd";
import PostEdit from "./components/Post/PostEdit";
import PostList from "./components/Post/PostList";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/add" element={<PostAdd />} />
          <Route path="/edit/:id" element={<PostEdit />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
};

export default App;
