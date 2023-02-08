import { createContext, useMemo, useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";

import { updatePost, createPost, deletePost, createMany } from "@/api/post";
import { useQueryClient } from "react-query";
import queryKeys from "@/utils/query/queryKeys";

export const PostContext = createContext({
  onUpdatePost: () => {},
  onCreatePost: () => {},
  onCreateMany: () => {},
  onDeletePost: () => {},
  showNewPostForm: false,
  setShowNewPostForm: () => {},
  searchTerm: "",
  setSearchTerm: () => {},
});

export const PostProvider = ({ children }) => {
  // CONFIG
  const queryClient = useQueryClient();

  // STATE MANAGEMENT
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Update post
  const { mutate: onUpdatePost } = useMutation(updatePost, {
    onSuccess: () => {
      toast.success("Post updated!");
    },
    onError: (e) => {
      toast.error(`Error: ${e.message}`);
    },
    onSettled: () => {
      queryClient.invalidateQueries(queryKeys.getAllPost);
    },
  });

  // Create ONE post
  const { mutate: onCreatePost } = useMutation(createPost, {
    onSuccess: () => {
      toast.success("Post created!");
      setShowNewPostForm(false);
    },
    onError: (e) => {
      toast.error(`Error: ${e.message}`);
    },
    onSettled: () => {
      queryClient.invalidateQueries(queryKeys.getAllPost);
    },
  });

  // Create MANY  post
  const { mutate: onCreateMany } = useMutation(createMany, {
    onSuccess: () => {
      toast.success("Posts created!");
      setShowNewPostForm(false);
    },
    onError: (e) => {
      toast.error(`Error: ${e.message}`);
    },
    onSettled: () => {
      queryClient.invalidateQueries(queryKeys.getAllPost);
    },
  });

  // Delete post
  const { mutate: onDeletePost } = useMutation(deletePost, {
    onSuccess: () => {
      toast.success("Post deleted.");
    },
    onSettled: () => {
      queryClient.invalidateQueries(queryKeys.getAllPost);
    },
  });

  // Export context values
  const postValue = useMemo(
    () => ({
      onUpdatePost,
      onCreatePost,
      onDeletePost,
      showNewPostForm,
      setShowNewPostForm,
      searchTerm,
      setSearchTerm,
      onCreateMany,
    }),
    [
      onUpdatePost,
      onCreatePost,
      onDeletePost,
      showNewPostForm,
      setShowNewPostForm,
      searchTerm,
      setSearchTerm,
      onCreateMany,
    ]
  );

  return (
    <PostContext.Provider value={postValue}>{children}</PostContext.Provider>
  );
};
