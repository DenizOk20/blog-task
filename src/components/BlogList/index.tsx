import React from 'react'
import FirstBlog from './FirstBlog'
import BlogCard from './BlogCard'

export default function BlogList() {
  return (
    <div className='flex flex-col gap-10'>
      <FirstBlog/>
      <div className='flex flex-wrap gap-5'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </div>
  )
}
