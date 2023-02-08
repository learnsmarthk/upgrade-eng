import React from "react";

import { PostItem } from "@/components";

const PostList = ({ posts }) => {
  return (
    <div className="flex flex-col py-10 gap-4">
      <div className="p-5  my-2 border-2 border-gray-200 rounded-xl  bg-white shadow-md">
        <span className="text-lg font-medium">Total : </span>
        <span className="text-lg">{posts?.length}</span>
        <span className="text-lg"> questions</span>
      </div>

      {posts?.map(({ id, question, createdAt, isPublic }) => (
        <PostItem
          key={id}
          postId={id}
          createdAt={createdAt}
          question={question}
          isPublic={isPublic}
        />
      ))}
    </div>
  );
};

export default PostList;
