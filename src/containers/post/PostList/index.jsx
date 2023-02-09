import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { PostItem } from "@/components";

const PostList = ({ posts, isLoading }) => {
  if (!posts || isLoading) {
    return (
      <div className="flex min-h-[85vh] min-w-[90vw] items-center justify-center">
        <ThreeDots
          height="100"
          width="100"
          color="#818cf8"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }

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
