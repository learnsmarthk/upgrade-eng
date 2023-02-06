import React from "react";

import { PostItem } from "@/components";

const PostList = ({ posts }) => {
  return (
    <div className="flex flex-col py-10">
      {posts?.map(({ id, title, body, answer }) => (
        <PostItem
          key={id}
          postId={id}
          title={title}
          body={body}
          answer={answer}
        />
      ))}
    </div>
  );
};

export default PostList;
