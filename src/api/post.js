import axios from "axios";

// const postApi = axios.create({
//   baseURL: `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/post`,
// });
const postApi = axios.create({
  baseURL: `${
    process.env.NODE_ENV === "development" ? "http://localhost:3000/" : ""
  }api/post`,
});

const getAllPosts = async () => {
  const res = await postApi.get("/getAll");
  return res.data;
};

const updatePost = async ({ postId, body, isPublic }) => {
  const res = await postApi.patch(`/update?postId=${postId}`, {
    body,
    isPublic,
  });

  return res;
};

const createPost = async ({ body, isPublic }) => {
  const res = await postApi.post(`/create`, {
    body,
    isPublic,
  });

  return res;
};

const deletePost = async (postId) => {
  const res = await postApi.delete(`/delete?postId=${postId}`);

  return res;
};

export { getAllPosts, updatePost, createPost, deletePost };
