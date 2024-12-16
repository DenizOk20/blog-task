import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard() {
  return (
    <div className="max-w-[392px] max-h-[488px] p-4 flex flex-col gap-4 min-h-488px">
      <div className="min-h-[240px]">
        <Image
          src="/blog-img.png"
          alt="blogImg"
          width={360}
          height={240}
          className="w-full object-cover max-h-[240px] h-full"
        />
      </div>
      <div className="p-2 flex flex-col gap-5">
        <Link href="/" className="flex flex-col gap-4">
          <span className="bg-[#4B6BFB] bg-opacity-5 w-fit text-[#4B6BFB] px-[10px] rounded-md py-1">Technology</span>
          <h2 className="text-xl md:text-2xl font-semibold text-text-head">
            The Impact of Technology on the Workplace: How Technology is
            Changing
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
            <span>Tracey Wilson</span>
          </div>
          <span>August 20, 2022</span>
        </div>
      </div>
    </div>
  );
}
