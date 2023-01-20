import fs from "fs";
import path from "path";

export function getPosts() {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), "pages", "posts"), {
    withFileTypes: true,
  });

  const posts = dirFiles.map((file) => {
    if (!file.name.endsWith(".mdx")) return;

    const fileContent = fs.readFileSync(
      path.join(process.cwd(), "pages", "posts", file.name),
      "utf-8"
    );

    const slug = file.name.replace(/.mdx$/, "");
    return { content: fileContent, slug };
  });

  return posts;
}
