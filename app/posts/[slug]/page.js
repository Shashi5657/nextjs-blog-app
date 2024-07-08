//created a folder in the app as [slug]- it acts as dynamic page
//so it acts as localhost:3000/posts/page-1 or localhost:3000/posts/page-2

import PostContent from "@/components/posts/post-detail/post-content";

function SinglePostPage() {
  return <PostContent />;
}

export default SinglePostPage;
