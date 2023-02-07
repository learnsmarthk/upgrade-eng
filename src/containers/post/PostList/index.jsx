import React from "react";

import { PostItem } from "@/components";

const PostList = ({ posts }) => {
  return (
    <div className="flex flex-col py-10 gap-4">
      {posts?.map(({ id, body, createdAt }) => (
        <PostItem key={id} postId={id} createdAt={createdAt} body={body} />
      ))}
    </div>
  );
};

export default PostList;
