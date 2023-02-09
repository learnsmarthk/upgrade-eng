import { useState, useCallback, useRef } from "react";
import { useQuery } from "react-query";

import { getAllPosts } from "@/api/post";
import queryKeys from "@/utils/query/queryKeys";

const filterByTerm = (unfilteredData, searchTerm) => {
  return unfilteredData.filter((post) =>
    post?.question?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );
};

export const usePost = () => {
  const searchRef = useRef(undefined);
  const [searchTerm, setSearchTerm] = useState(null);
  const fallback = [];

  const selectFn = useCallback(
    (unfilteredData) => filterByTerm(unfilteredData, searchTerm),
    [searchTerm]
  );

  const { data: posts = fallback, isLoading } = useQuery(
    queryKeys.getAllPost,
    getAllPosts,
    {
      select: searchTerm ? selectFn : undefined,
    }
  );

  return { posts, searchTerm, setSearchTerm, searchRef, isLoading };
};
