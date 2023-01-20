import { InferGetStaticPropsType } from "next";
import React from "react";
import { getPosts } from "../config/posts";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

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

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <header className="container">
        <hgroup>
          <h1>Jhonatan Salazar</h1>
          <h2>
            Hi! 👋🏽 My full name is <em>Jhonatan Jesus Salazar Rodriguez</em>,
            but my friends call me <strong>Jhon</strong>
          </h2>
        </hgroup>
        <nav aria-label="breadcrumb">
          <ul>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Lists</a>
            </li>
            <li>
              <a href="#">Recommendations</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </nav>
        <hr />
      </header>
      <main>
        {posts.map((post) => {
          if (!post) return <div>null</div>;

          return (
            <section key={post?.slug}>
              <MDXRemote
                {...post?.content}
                components={{ h1: (props) => <h2 {...props} /> }}
              />
            </section>
          );
        })}
      </main>
    </>
  );
}
