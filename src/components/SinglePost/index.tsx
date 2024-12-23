import Image from "next/image";
import React from "react";

export default function SinglePost() {

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-start md:w-[800px] gap-5">
        <div className="flex flex-col gap-4">
          <span className="bg-[#4B6BFB] text-white w-fit py-[6px] px-[12px] sm:text-sm md:text-base min-w-[97px] flex justify-center items-center max-h-7 rounded-md">
            Technology
          </span>
          <h2 className="text-text-head font-semibold text-[36px]">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
        </div>
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
      <div className="flex flex-col items-start max-w-[800px]">
        <Image
          src="/single-post1.png"
          alt="single-post"
          width={800}
          height={462}
        />
        <br />
        <p className="max-w-[800px] text-text-primary font-sourceSerif text-xl">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don&apos;t plan and prepare adequately. In this blog
          article, we&apos;ll explore tips and tricks for a memorable journey
          and how to make the most of your travels.
          <br />
          <br />
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
        <br />
        <h2 className="font-worksans font-semibold text-2xl text-text-head">
          Research Your Destination
        </h2>
        <p className="max-w-[800px] text-text-primary font-sourceSerif text-xl">
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In
          hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
          elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing
          at in tellus.
        </p>
        <br />
        <h2 className="font-worksans font-semibold text-2xl text-text-head">
          Plan Your Itinerary
        </h2>
        <p className="max-w-[800px] text-text-primary font-sourceSerif text-xl">
          While it is essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax
          and enjoy your journey.
          <br />
          Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
          lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
          felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
        </p>
        <br />
        <span className="p-8 bg-[#F6F6F7] rounded-xl border-[#E8E8EA] border-[1px] italic font-sourceSerif text-xl text-text-head">
          “ Traveling can expose you to new environments and potential health
          risks, so it&apos;s crucial to take precautions to stay safe and
          healthy. ”
        </span>
        <br />
        <Image
          src="/single-post2.png"
          alt="singlepost2"
          width={800}
          height={462}
        />
        <br />
        <h2 className="font-worksans font-semibold text-2xl text-text-head">
          Pack Lightly and Smartly
        </h2>
        <p className="max-w-[800px] text-text-primary font-sourceSerif text-xl">
          Packing can be a daunting task, but with some careful planning and
          smart choices, you can pack light and efficiently. Start by making a
          packing list and sticking to it, focusing on versatile and comfortable
          clothing that can be mixed and matched. Invest in quality luggage and
          packing organizers to maximize space and minimize wrinkles.
        </p>
        <br />
        <h2 className="font-worksans font-semibold text-2xl text-text-head">
          Stay Safe and Healthy
        </h2>
        <p className="max-w-[800px] text-text-primary font-sourceSerif text-xl">
          Traveling can expose you to new environments and potential health
          risks, so it&apos;s crucial to take precautions to stay safe and
          healthy. This includes researching any required vaccinations or
          medications, staying hydrated, washing your hands frequently, and
          using sunscreen and insect repellent. It&apos;s also essential to keep
          your valuables safe and secure and to be aware of your surroundings at
          all times.
        </p>
        <br />
      </div>
    </div>
  );
}