import { createContext, useMemo } from "react";
import { useMutation } from "react-query";
import { updatePost, createPost, deletePost } from "@/api/post";
import { toast } from "react-hot-toast";

export const PostContext = createContext({
  onUpdatePost: () => {},
  onCreatePost: () => {},
  onDeletePost: () => {},
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
      toast.success("Post created!");
    },
  });

  // Delete post
  const { mutate: onDeletePost } = useMutation(deletePost, {
    onSuccess: () => {
      toast.success("Post deleted!");
    },
  });

  // Export context values
  const postValue = useMemo(
    () => ({
      onUpdatePost,
      onCreatePost,
      onDeletePost,
    }),
    [onUpdatePost, onCreatePost, onDeletePost]
  );

  return (
    <PostContext.Provider value={postValue}>{children}</PostContext.Provider>
  );
};
