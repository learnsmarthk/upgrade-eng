import axios from "axios";

const postApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/post`,
});

const getAllPosts = async () => {
  const res = await postApi.get("/getAll");

  return res.data;
};

const updatePost = async ({ postId, title, body, answer }) => {
  const res = await postApi.patch(`/update?postId=${postId}`, {
    title,
    body,
    answer,
  });

  return res;
};

const createPost = async ({ title, body, answer }) => {
  const res = await postApi.post(`/create`, {
    title,
    body,
    answer,
  });

  console.log(res);
  return res;
};

export { getAllPosts, updatePost, createPost };
