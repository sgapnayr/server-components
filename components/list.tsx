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
      setLoading(false);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
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
    </div>
  );
}
