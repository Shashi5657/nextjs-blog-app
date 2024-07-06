//this one is directly on the app folder so it would be the hoem page
//such as localHost:3000/

import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { Fragment } from "react";

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

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
