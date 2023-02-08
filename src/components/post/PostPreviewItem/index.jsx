import React from "react";

import { SwitchToggle } from "@/components";

const PostPreviewItem = ({ question, isPublic }) => {
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

          <p className="sm:text-sm md:text-base ">{question}</p>
        </div>

        <SwitchToggle
          enabled={isPublic}
          trueLabel="Public"
          falseLabel="Private"
          editable={false}
        />
      </div>
    </div>
  );
};

export default PostPreviewItem;
