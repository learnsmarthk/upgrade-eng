import React, { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { InputForm, Button, Typography } from "@/components";
import { PostContext } from "@/context/post/context";

const NewPostForm = () => {
  const { onCreatePost, setShowNewPostForm } = useContext(PostContext);
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [inputAnswer, setInputAnswer] = useState("");

  const onSubmitHandler = () => {
    if (!inputTitle || !inputBody || !inputAnswer) {
      return toast.error("Please fill in all fields");
    }

    onCreatePost({
      title: inputTitle,
      body: inputBody,
      answer: inputAnswer,
    });
  };

  return (
    <div
      className="relative flex flex-col  text-gray-700 p-5  my-2 border-2 border-gray-200 rounded-xl
"
    >
      <Typography variant="title" styles="text-center mb-2">
        Create new post
      </Typography>
      {/* Form inputs */}
      <div className="flex flex-col gap-3 mb-8">
        <div className="flex flex-col gap-1 relative">
          <span className="sm:text-sm md:text-xl  font-semibold">Title:</span>
          <InputForm value={inputTitle} setFn={setInputTitle} />
        </div>
        <div className="flex-wrap">
          <span className="sm:text-sm md:text-xl font-semibold">Body:</span>
          <InputForm textArea value={inputBody} setFn={setInputBody} />
        </div>

        <div className="flex-wrap">
          <span className="sm:text-sm md:text-xl  font-semibold">Answer:</span>
          <InputForm textArea value={inputAnswer} setFn={setInputAnswer} />
        </div>
      </div>

      {/* Confirm button */}

      <div className=" flex gap-2 self-end">
        <Button onClick={() => setShowNewPostForm(false)}>Cancel</Button>
        <Button
          onClick={onSubmitHandler}
          className="flex gap-1 justify-center items-center "
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default NewPostForm;
