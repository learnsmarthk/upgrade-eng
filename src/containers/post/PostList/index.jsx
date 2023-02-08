import React from "react";

import { PostItem } from "@/components";

const PostList = ({ posts }) => {
  return (
    <div className="flex flex-col py-10 gap-4">
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
