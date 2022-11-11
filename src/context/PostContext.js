import { createContext, useContext, useEffect, useState } from "react";

const URL = "http://localhost:3001/posts";

export const PostContext = createContext([]);

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getPosts = () => {
    setIsLoading(true);

    fetch(URL, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((postList) => {
        setPosts(
          postList.sort(
            (currentPost, nextPost) =>
              new Date(nextPost.date) - new Date(currentPost.date)
          )
        );

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(`Error fetching ${URL}`, error);
      });
  };

  const getPost = (id) => {
    setIsLoading(true);

    fetch(`${URL}/${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((postItem) => {
        setPost(postItem);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(`Error fetching ${URL}`, error);
      });
  };

  const createPost = (post) => {
    setIsLoading(true);

    fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(`Error fetching ${URL}`, error);
      });
  };

  const removePost = (id) => {
    setIsLoading(true);

    fetch(`${URL}/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(`Error fetching ${URL}`, error);
      });
  };

  const updatePost = (post) => {
    setIsLoading(true);

    fetch(`${URL}/${post.id}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(`Error fetching ${URL}`, error);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        isLoading,
        posts,
        getPosts,
        post,
        getPost,
        createPost,
        updatePost,
        removePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
