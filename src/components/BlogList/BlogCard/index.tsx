import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Post, User } from "../FirstBlog";

type BlogCardProps = {
  post: Post;
  author: User | null;
};

export default function BlogCard({post,author}:BlogCardProps) {

  return (
    <div className="max-w-[392px] max-h-[488px] p-4 flex flex-col gap-4 min-h-488px">
      <div className="min-h-[240px] w-max">
        <Image
          src={post.image}
          alt="blogImg"
          width={360}
          height={240}
          className="w-full object-cover max-h-[240px] h-full max-w-[360px]"
        />
      </div>
      <div className="p-2 flex flex-col gap-5">
        <Link href={`/blog/${post.id}`} className="flex flex-col gap-4">
          <span className="bg-[#4B6BFB] bg-opacity-5 w-fit text-[#4B6BFB] px-[10px] rounded-md py-1">{post.category}</span>
          <h2 className="text-xl md:text-2xl font-semibold text-text-head min-h-[96px]">
            {post.title}
          </h2>
        </Link>
        <div className="flex items-center gap-2 md:gap-3 lg:gap-5">
          <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
            <Image
              src="/profile.png"
              alt="profile"
              width={16}
              height={16}
              className="md:w-9 md:h-9 bg-black rounded-3xl border border-gray-400"
            />
            <span>{author?.name}</span>
          </div>
          <span>{post.createdAt.substring(0,10)}</span>
        </div>
      </div>
    </div>
  );
}
