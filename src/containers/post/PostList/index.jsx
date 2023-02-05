import React from "react";
import { useQuery } from "react-query";

import queryKey from "@/utils/query/queryKey";

import { getAllPosts } from "@/api/post";
import { PostItem } from "@/components";

const PostList = () => {
  const { data } = useQuery(queryKey.getAllPost, getAllPosts);

  return (
    <div className="flex flex-col">
      {data?.map(({ id, title, body, answer }) => (
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
