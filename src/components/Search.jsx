import { useDebounce } from '@uidotdev/usehooks';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const Search = ({ className, setSearch, text, name }) => {
  const [initialValue, setInitialValue] = useState("")
  const debouncedSearchTerm = useDebounce(initialValue, 700);

  useEffect(() => {
    setSearch ? setSearch(debouncedSearchTerm) : null
  }, [debouncedSearchTerm])

  const returnValue = (name, value) => {
    setInitialValue(pre => ({ ...pre, [name]: value }))
  }
  return (
    <div className={twMerge("items-center flex w-full h-full ", className)}>
      <div className="relative z-0 w-full">
        <div className="absolute inset-0 w-4 h-4 m-auto ml-4 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=""
            width={17}
            height={17}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx={10} cy={10} r={7} />
            <line x1={21} y1={21} x2={15} y2={15} />
          </svg>
        </div>
        <input
          className="w-full rounded-lg bg-white pl-12 py-1 font-poppins text-[18px] font-normal text-[#999999] focus:border-indigo-700 focus:outline-none capitalize"
          type="text" placeholder={text}
          onChange={(e) => returnValue(name, e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;