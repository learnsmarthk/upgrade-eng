import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "react-query/devtools";
import { PostProvider } from "@/context/post/context";
import { queryClient } from "@/utils/query/queryClient";

import { Layout } from "@/components";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <PostProvider>
          <Layout>
            <Component {...pageProps} />
            <Toaster />
          </Layout>
          <ReactQueryDevtools />
        </PostProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
