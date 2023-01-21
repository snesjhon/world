import React, { Fragment } from "react";
import { MDXRemote } from "next-mdx-remote";
import { PostsInferType } from "../pages";
import { Music } from "./Music";
import { MDXProvider } from "@mdx-js/react";

export function Posts({ posts }: PostsInferType) {
  return (
    <MDXProvider components={{ wrapper: (props) => <section {...props} /> }}>
      {posts.map((post) => {
        if (!post) return <div>null</div>;

        return (
          <Fragment key={post?.slug}>
            <MDXRemote
              {...post?.content}
              components={{
                h1: (props) => <h2 {...props} />,
                Music: (props) => <Music {...props} />,
              }}
            />
          </Fragment>
        );
      })}
    </MDXProvider>
  );
}
