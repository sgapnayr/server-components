import React from "react";
import BasePost from "./BasePost";
import { PrismaClient } from "@prisma/client";

export default async function ServerSideList() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();

  return (
    <div className="text-center">
      <h1>Server Component Example</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <BasePost key={post.id} post={post} />
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}
