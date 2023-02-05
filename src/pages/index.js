import { useState } from "react";

import { ContentWrapper, Button } from "@/components";
import { NewPostForm, PostList } from "@/containers";

export default function Home() {
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  return (
    <main className="relative w-screen h-screen">
      <ContentWrapper>
        <NewPostForm />
        <PostList />

        {/* Add post button */}
        <div className="absolute bottom-5 right-5">
          <Button>Add Post</Button>
        </div>
      </ContentWrapper>
    </main>
  );
}
