import React from "react";

export default function SearchInput() {
  return (
    <div>
      <form className="max-w-[166px] max-h-[36px]">
        <div className="relative max-h-[36px] flex items-center">
          <div className="absolute end-3 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-[#52525B] dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full max-h-[36px] min-w-36 p-4 text-text-primary text-sm placeholder:text-[#A1A1AA] border border-gray-300 rounded-lg bg-[#F4F4F5] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-[#52525B] dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            placeholder="Search"
            required
          />
        </div>
      </form>
    </div>
  );
}
