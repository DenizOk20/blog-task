"use client"
import React, { useEffect, useState } from 'react'
import FirstBlog, { Post, User } from './FirstBlog'
import BlogCard from './BlogCard'

export default function BlogList() {

  const [posts,setPosts] = useState<Post[]>([])
  const [user,setUser] = useState<User | null>(null)

  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/posts")
    .then(res => res.json())
    setPosts(res)
    return res
  }
  useEffect(() => {
    getData();
  }, []);

  const getUser = async (id:number): Promise<User | null> => {
    const res = await fetch(`http://localhost:3000/api/users/${id}`)
    const data = await res.json()
    setUser(data)
    return data
  }

  useEffect(() => {
    if(posts.length > 0){
      getUser(posts[0].authorId)
    }
  },[posts])

  console.log(posts[0])

  return (
    <div className='flex flex-col gap-10'>
      <FirstBlog firstPost={posts[0]} author={user}/>
      <div className='flex flex-wrap gap-5'>
        {posts.map((post) => (
          <BlogCard key={post.title} post={post} author={user} />
        ))}
      </div>
    </div>
  )
}
