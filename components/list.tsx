"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "@prisma/client";
import BasePost from "./BasePost";

export default function ClientSideList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/post");
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  const createPost = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/posts/create", {
        title: "New Post",
        content: "This is a new post.",
      });
      setPosts([response.data, ...posts]);
      setLoading(false);
    } catch (error) {
      console.error("Error creating post:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="text-center">
      <h1>Client Component Example</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <BasePost key={post.id} post={post} />
          ))}
        </ul>
      ) : (
        <p>{isLoading ? "Loading..." : "No posts available."}</p>
      )}
      <button
        onClick={createPost}
        className="bg-red-500 hover:bg-red-600 p-4 rounded-md cursor-pointer active:bg-red-700"
      >
        Create Post
      </button>
    </div>
  );
}
