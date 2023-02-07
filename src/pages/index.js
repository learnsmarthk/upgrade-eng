import { useContext } from "react";

import { ContentWrapper, Button } from "@/components";
import { NewPostForm, PostList, TopBar } from "@/containers";
import { usePost } from "@/hooks/usePost";
import { PostContext } from "@/context/post/context";

import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default function Home() {
  const { showNewPostForm, setShowNewPostForm } = useContext(PostContext);
  const { posts, searchTerm, setSearchTerm, searchRef } = usePost();

  const onClickCreateBtn = () => {
    setShowNewPostForm(true);
    window.scrollTo(0, 0);
  };

  return (
    <main className="relative bg-slate-50 pt-5">
      <ContentWrapper styles="relative">
        <TopBar
          searchRef={searchRef}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        {showNewPostForm && <NewPostForm />}
        <PostList posts={posts} />

        {/* Add post button */}
        {!showNewPostForm && (
          <div className="fixed bottom-10 right-20 w-40 h-15">
            <Button
              styles="w-full h-full drop-shadow-xl"
              onClick={onClickCreateBtn}
            >
              Add Post
            </Button>
          </div>
        )}
      </ContentWrapper>
    </main>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  // nothing to return
  return {
    props: {},
  };
}
