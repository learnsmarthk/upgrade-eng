import React, { useState } from "react";

import { AiFillEdit, FaTrashAlt } from "@/components/icons";
import { Button, IconButton, InputForm, SwitchToggle } from "@/components";
import { PostContext } from "@/context/post/context";
import { toast } from "react-hot-toast";

const PostPreviewItem = ({ question, isPublic }) => {
  const [editPost, setEditPost] = useState(false);
  const [inputQuestion, setInputQuestion] = useState(question || "");
  const [inputIsPublic, setInputIsPublic] = useState(isPublic);

  return (
    <div
      className="relative flex flex-col  text-gray-700 p-5  my-2 border-2 border-gray-200 rounded-xl  hover:border-indigo-400 transition-all duration-300 bg-white shadow-md
  "
    >
      <div className="flex flex-col gap-3 mb-8">
        <div className="flex-wrap mb-5">
          <span className="sm:text-sm md:text-xl font-semibold mb-4">
            Question:
          </span>
          {editPost ? (
            <InputForm
              textArea
              value={inputQuestion}
              setFn={setInputQuestion}
              placeholder="Type your question..."
            />
          ) : (
            <p className="sm:text-sm md:text-base ">{question}</p>
          )}
        </div>

        {editPost ? (
          <SwitchToggle
            enabled={inputIsPublic}
            setEnabled={setInputIsPublic}
            trueLabel="Public"
            falseLabel="Private"
          />
        ) : (
          <SwitchToggle
            enabled={inputIsPublic}
            trueLabel="Public"
            falseLabel="Private"
            editable={false}
          />
        )}

        <div className="flex flex-col gap-3 ">
          <span className="sm:text-xs text-gray-400 font-semibold self-end">
            created at: {createdAt?.split("T")[0]}
          </span>
        </div>
      </div>

      {/* Post edit button */}
      {!editPost && (
        <button
          onClick={() => setEditPost((prev) => !prev)}
          className="flex gap-1 justify-center items-center absolute top-4 right-5"
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
            styles="flex gap-1 justify-center items-center h-9 w-9"
          >
            <FaTrashAlt style={{ fontSize: "1.2rem", color: "red" }} />
          </IconButton>
          <div className="flex gap-4">
            <Button
              variant="outlined"
              onClick={() => setEditPost((prev) => !prev)}
            >
              Cancel
            </Button>
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

export default PostPreviewItem;
