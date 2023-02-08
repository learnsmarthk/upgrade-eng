import React, { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { InputForm, Button, Typography, SwitchToggle } from "@/components";
import { PostContext } from "@/context/post/context";

const NewPostForm = () => {
  const { onCreatePost, setShowNewPostForm } = useContext(PostContext);
  const [inputIsPublic, setInputIsPublic] = useState(true);
  const [inputQuestion, setInputQuestion] = useState("");

  const onSubmitHandler = () => {
    if (!inputQuestion) {
      return toast.error("Please fill in all fields");
    }

    onCreatePost({
      question: inputQuestion,
      isPublic: inputIsPublic,
    });
  };

  return (
    <div
      className="relative flex flex-col  text-gray-700 p-5  mb-2 mt-10 border-2 border-gray-200 rounded-xl bg-white shadow-md
"
    >
      <Typography variant="title" styles="text-center mb-2">
        Create new post
      </Typography>

      {/* Form inputs */}
      <div className="flex flex-col gap-3 mb-8">
        <div className="flex-wrap flex flex-col gap-3">
          <span className="sm:text-sm md:text-xl font-semibold">Question:</span>
          <InputForm
            placeholder="Type your question..."
            textArea
            value={inputQuestion}
            setFn={setInputQuestion}
          />
        </div>
      </div>
      <SwitchToggle
        enabled={inputIsPublic}
        setEnabled={setInputIsPublic}
        trueLabel="Public"
        falseLabel="Private"
      />
      {/* Confirm button */}
      <div className=" flex gap-2 self-end">
        <Button variant="outlined" onClick={() => setShowNewPostForm(false)}>
          Cancel
        </Button>
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
