import Image from 'next/image'
import React from 'react'

export type Post = {
  id: number; 
  authorId: number;
  category: string; 
  content: string; 
  createdAt: string;
  updatedAt: string;
  image: string; 
  published: boolean; 
  title: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
}


type FirstBlogProps = {
  firstPost: Post;
  author: User | null;
};

export default function FirstBlog({firstPost,author}:FirstBlogProps) {

  return (
    <div className='relative max-h-[450px]'>
        <Image src={firstPost?.image} alt='blog-img' width={1218} height={650} className='w-full min-h-[160px] max-w-[1216px] max-h-[450px] h-full object-cover'/>
        <div className='absolute p-2 md:p-5 lg:p-10 bottom-0 text-[#fff] flex flex-col gap-2 md:gap-4'>
            <span className='bg-[#4B6BFB] w-fit py-[10px] sm:text-sm md:text-base px-1 min-w-[97px] flex justify-center items-center max-h-7 rounded-md'>{firstPost?.category}</span>
            <h2 className='font-semibold text-xs sm:text-sm md:text-xl lg:text-4xl max-w-[720px]'>{firstPost?.title}</h2>
            <div className='flex items-center gap-2 md:gap-3 lg:gap-5'>
                <div className='flex items-center gap-1 md:gap-2 lg:gap-3'>
                    <Image src="/profile.png" alt='profile' width={16} height={16} className='md:w-9 md:h-9'/>
                    <span>{author?.name}</span>
                </div>
                <span>{firstPost?.createdAt.substring(0,10)}</span>
            </div>
        </div>
    </div>
  )
}
