import React, { useState, useContext } from "react";

import { AiFillEdit, FaTrashAlt } from "@/components/icons";
import { Button, IconButton, InputForm } from "@/components";
import { PostContext } from "@/context/post/context";

const PostItem = ({ postId, title, body, answer }) => {
  const { onUpdatePost, onDeletePost } = useContext(PostContext);

  const [editPost, setEditPost] = useState(false);
  const [inputTitle, setInputTitle] = useState(title || "");
  const [inputBody, setInputBody] = useState(body || "");
  const [inputAnswer, setInputAnswer] = useState(answer || "");

  const updatePostHandler = () => {
    onUpdatePost({
      postId,
      title: inputTitle,
      body: inputBody,
      answer: inputAnswer,
    });
    setEditPost(false);
  };

  const onDeletePostHandler = () => {
    onDeletePost(postId);
  };

  return (
    <div
      className="relative flex flex-col  text-gray-700 p-5  my-2 border-2 border-gray-200 rounded-xl shadow-md hover:border-indigo-400 transition-all duration-300  
    "
    >
      <div className="flex flex-col gap-3 mb-8">
        <div className="flex flex-col ">
          <span className="sm:text-sm md:text-xl font-semibold mb-1">
            Title:
          </span>
          {editPost ? (
            <InputForm value={inputTitle} setFn={setInputTitle} />
          ) : (
            <p className="sm:text-sm md:text-base ">{title}</p>
          )}
        </div>
        <div className="flex-wrap">
          <span className="sm:text-sm md:text-xl font-semibold mb-1">
            Body:
          </span>
          {editPost ? (
            <InputForm textArea value={inputBody} setFn={setInputBody} />
          ) : (
            <p className="sm:text-sm md:text-base ">{body}</p>
          )}
        </div>

        <div className="flex-wrap">
          <span className="sm:text-sm md:text-xl  font-semibold mb-1">
            Answer:
          </span>
          {editPost ? (
            <InputForm textArea value={inputAnswer} setFn={setInputAnswer} />
          ) : (
            <p className="sm:text-sm md:text-base ">{answer}</p>
          )}
        </div>
      </div>

      {/* Post edit button */}

      {!editPost && (
        <button
          onClick={() => setEditPost((prev) => !prev)}
          className="flex gap-1 justify-center items-center absolute top-2 right-5"
        >
          <AiFillEdit />
          <span>Edit</span>
        </button>
      )}

      {/* Confirm button */}
      {editPost && (
        <div className=" flex items-center justify-between">
          {/* Delete btn */}
          <IconButton
            onClick={onDeletePostHandler}
            styles="flex gap-1 justify-center items-center "
          >
            <FaTrashAlt />
          </IconButton>
          <div className="flex gap-4">
            <Button onClick={() => setEditPost((prev) => !prev)}>Cancel</Button>
            <Button
              onClick={updatePostHandler}
              className="flex gap-1 justify-center items-center "
            >
              Save
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostItem;
