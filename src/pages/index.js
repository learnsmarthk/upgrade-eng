import { useContext, useState } from "react";

import { ContentWrapper, PreviewPostModal, AddPostListBtn } from "@/components";
import { NewPostForm, PostList, TopBar } from "@/containers";
import { usePost } from "@/hooks/usePost";
import { PostContext } from "@/context/post/context";

import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default function Home() {
  const { showNewPostForm, setShowNewPostForm } = useContext(PostContext);
  const { posts, searchTerm, setSearchTerm, searchRef, isLoading } = usePost();
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const onClickCreateBtn = () => {
    setShowNewPostForm(true);
    window.scrollTo(0, 0);
  };

  return (
    <main className="relative bg-slate-50 pt-5 min-h-[100vh]">
      <ContentWrapper styles="relative">
        <TopBar
          searchRef={searchRef}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        {showNewPostForm && <NewPostForm />}
        <PostList posts={posts} isLoading={isLoading} />
        {showPreviewModal && (
          <PreviewPostModal
            setShowup={setShowPreviewModal}
            showup={showPreviewModal}
          />
        )}

        {/* Add post button */}
        {!showNewPostForm && (
          <div className="fixed bottom-10 right-20 ">
            <AddPostListBtn
              btn1Fn={onClickCreateBtn}
              btn2Fn={setShowPreviewModal}
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
            />
          </div>
        )}

        <div className="fixed bottom-10 left-20 w-40 h-15"></div>
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
