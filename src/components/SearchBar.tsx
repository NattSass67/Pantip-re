'use client';

/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBar = () => {
  const [searchString, setSearchString] = useState('');
  const router = useRouter();
  const submit = () => {
    router.push(`https://pantip.com/search?q=${searchString}`);
  };

  return (
    <div className="z-20 flex w-full max-w-lg items-center justify-center rounded-full border border-gray-300 shadow-xl transition ease-in-out">
      <input
        type="text"
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        placeholder="Search..."
        className="w-full rounded-full p-4 focus:outline-none"
      />
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        onClick={submit}
        className="mr-2 rounded-full bg-zinc-800 p-3 text-white transition hover:scale-110"
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          strokeWidth="0.672"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"
              fill="#ffffff"
            />{' '}
          </g>
        </svg>
      </button>
    </div>
  );
};

export { SearchBar };
