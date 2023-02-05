import { createContext, useMemo } from "react";
import { useMutation } from "react-query";
import { updatePost, createPost } from "@/api/post";
import { toast } from "react-hot-toast";

export const PostContext = createContext({
  onUpdatePost: () => {},
  onCreatePost: () => {},
});

export const PostProvider = ({ children }) => {
  // Update post
  const { mutate: onUpdatePost } = useMutation(updatePost, {
    onSuccess: () => {
      toast.success("Post updated!");
    },
  });

  // Create post
  const { mutate: onCreatePost } = useMutation(createPost, {
    onSuccess: () => {
      toast.success("Post updated!");
    },
  });

  // Export context values
  const postValue = useMemo(
    () => ({
      onUpdatePost,
      onCreatePost,
    }),
    [onUpdatePost, onCreatePost]
  );

  return (
    <PostContext.Provider value={postValue}>{children}</PostContext.Provider>
  );
};
