import { InferGetStaticPropsType } from "next";
import React from "react";
import { getPosts } from "../config";
import { serialize } from "next-mdx-remote/serialize";
import { Header, Posts } from "../components";

export async function getStaticProps() {
  const unparsedPosts = getPosts();

  const posts = unparsedPosts.map(async (unparsedPost) => {
    if (!unparsedPost) return;
    return {
      ...unparsedPost,
      content: await serialize(unparsedPost.content),
    };
  });
  const results = await Promise.all(posts);
  return {
    props: {
      posts: results,
    },
  };
}

export type PostsInferType = InferGetStaticPropsType<typeof getStaticProps>;

interface Props {
  theme: "light" | "dark";
}

export default function Home({ posts, theme }: PostsInferType & Props) {
  return (
    <>
      <Header theme={theme} />
      <hr />
      <main className="home">
        <Posts posts={posts} />
      </main>
    </>
  );
}
