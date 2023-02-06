import { QueryClient, QueryCache, MutationCache } from "react-query";
import { toast } from "react-hot-toast";

const queryErrorHandler = (error) => {
  toast.error(`Error: ${error.message}`);
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: queryErrorHandler,
  }),
  defaultOptions: {
    queries: {
      staleTime: 60000, //10min
      cacheTime: 90000, //15min
    },
  },
});
