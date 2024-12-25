"use client"
import React, { useCallback, useEffect, useState } from 'react'
import FirstBlog, { Post, User } from './FirstBlog'
import BlogCard from './BlogCard'

export default function BlogList() {

  const [posts,setPosts] = useState<Post[]>([])
  const [users, setUsers] = useState<Record<number, User | null>>({});

  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/posts")
    const data = await res.json()
    setPosts(data)
    return data
  }
  useEffect(() => {
    getData();
  }, []);

  const getUser = useCallback(async (id: number) => {
    if (users[id]) return; 
    const res = await fetch(`http://localhost:3000/api/users/${id}`);
    const data = await res.json();
    setUsers((prev) => ({ ...prev, [id]: data }));
  }, [users]);


  useEffect(() => {
    posts.forEach((post) => {
      getUser(post.authorId);
    });
  }, [posts, getUser]);

  return (
    <div className="flex flex-col gap-10">
      {posts.length > 0 && (
        <FirstBlog firstPost={posts[0]} author={users[posts[0].authorId]} />
      )}
      <div className="flex flex-wrap gap-5">
        {posts.slice(1).map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            author={users[post.authorId]}
          />
        ))}
      </div>
    </div>
  );
}
