import { useContext } from "react";

import { ContentWrapper, Button } from "@/components";
import { NewPostForm, PostList, TopBar } from "@/containers";
import { usePost } from "@/hooks/usePost";
import { PostContext } from "@/context/post/context";
import { useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default function Home() {
  const { showNewPostForm, setShowNewPostForm } = useContext(PostContext);
  const { posts, searchTerm, setSearchTerm, searchRef } = usePost();
  const session = useSession();
  console.log(session);

  const onClickCreateBtn = () => {
    setShowNewPostForm(true);
    window.scrollTo(0, 0);
  };

  return (
    <main className="relative w-screen h-screen pt-20">
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
          <div className="fixed bottom-5 right-5">
            <Button onClick={onClickCreateBtn}>Add Post</Button>
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
