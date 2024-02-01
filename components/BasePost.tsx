import React from "react";
import { Post } from "@prisma/client";

export default function BasePost({ post }: { post: Post }) {
  return (
    <div
      className="bg-gray-200 text-black p-4 rounded-md hover:bg-gray-300 cursor-pointer my-3"
      key={post.id}
    >
      <h3 className="font-bold text-xl">{post.title}</h3>
      <p className="text-lg">{post.content}</p>
    </div>
  );
}
