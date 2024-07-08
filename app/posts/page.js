//created a folder in the app as posts
//so it acts as localhost:3000/posts

import AllPosts from "@/components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    image: "getting-started-nextjs.png",
    title: "Getting-Started-With-Nextjs",
    date: "2024-07-07",
    excerpt: "NextJS is used for building FullStack Applications",
  },
  {
    slug: "getting-started-with-nextjs2",
    image: "getting-started-nextjs.png",
    title: "Getting-Started-With-Nextjs",
    date: "2024-07-07",
    excerpt: "NextJS is used for building FullStack Applications",
  },
  {
    slug: "getting-started-with-nextjs3",
    image: "getting-started-nextjs.png",
    title: "Getting-Started-With-Nextjs",
    date: "2024-07-07",
    excerpt: "NextJS is used for building FullStack Applications",
  },
  {
    slug: "getting-started-with-nextjs4",
    image: "getting-started-nextjs.png",
    title: "Getting-Started-With-Nextjs",
    date: "2024-07-07",
    excerpt: "NextJS is used for building FullStack Applications",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
