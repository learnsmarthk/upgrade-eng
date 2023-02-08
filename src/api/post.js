import axios from "axios";

// const postApi = axios.create({
//   baseURL: `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/post`,
// });

const baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "";

const postApi = axios.create({
  baseURL: `${baseURL}api/post`,
});

const getAllPosts = async () => {
  const res = await postApi.get("/getAll");
  return res.data;
};

const updatePost = async ({ postId, question, isPublic }) => {
  const res = await postApi.patch(`/update?postId=${postId}`, {
    question,
    isPublic,
  });

  return res;
};

const createPost = async ({ question, isPublic }) => {
  const res = await postApi.post(`/create`, {
    question,
    isPublic,
  });

  return res;
};

const createMany = async ({ questionsArray }) => {
  const res = await postApi.post(`/createMany`, {
    questionsArray,
  });

  console.log({ questionsArray, res });

  return res;
};

const deletePost = async (postId) => {
  const res = await postApi.delete(`/delete?postId=${postId}`);

  return res;
};

export { getAllPosts, updatePost, createPost, deletePost, createMany };
