"use client";
import React, { useState } from "react";

export default function NewsInput() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    try {
      const res = await fetch("http://localhost:3000/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setEmail("");
        alert("Kayıt Başarılı!")
      } else {
        const errorData = await res.json();
        alert(errorData.error)
      }
    } catch (error) {
      console.error("Error subscribing email:", error);
    }
  };

  return (
    <div className="min-w-[380px]">
      <form
        className="flex flex-col items-center gap-2"
        onSubmit={handleSubmit}
      >
        <div className="relative w-[320px] min-h-12 flex items-center">
          <div className="absolute end-3 flex items-center ps-3 pointer-events-none">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.4375 1.375C1.91973 1.375 1.5 1.79473 1.5 2.3125V11.6875C1.5 12.2053 1.91973 12.625 2.4375 12.625H15.5625C16.0803 12.625 16.5 12.2053 16.5 11.6875V2.3125C16.5 1.79473 16.0803 1.375 15.5625 1.375H2.4375ZM0.25 2.3125C0.25 1.10438 1.22938 0.125 2.4375 0.125H15.5625C16.7706 0.125 17.75 1.10438 17.75 2.3125V11.6875C17.75 12.8956 16.7706 13.875 15.5625 13.875H2.4375C1.22938 13.875 0.25 12.8956 0.25 11.6875V2.3125Z"
                fill="#696A75"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.88165 2.86629C3.09357 2.59382 3.48625 2.54474 3.75871 2.75665L9 6.83321L14.2413 2.75665C14.5138 2.54474 14.9064 2.59382 15.1183 2.86629C15.3303 3.13875 15.2812 3.53143 15.0087 3.74335L9.38371 8.11835C9.15802 8.29389 8.84198 8.29389 8.61629 8.11835L2.99129 3.74335C2.71882 3.53143 2.66974 3.13875 2.88165 2.86629Z"
                fill="#696A75"
              />
            </svg>
          </div>
          <input
            type="email"
            id="default-search"
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full max-h-[48px] min-w-36 p-4 text-text-primary text-sm placeholder:text-[#A1A1AA] border border-gray-300 rounded-lg bg-[#F4F4F5] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-[#52525B] dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            placeholder="Your Email"
            required
          />
        </div>
        <button
          className="w-[320px] text-text-initial h-12 bg-[#4B6BFB]"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
