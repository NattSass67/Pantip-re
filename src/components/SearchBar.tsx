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
    <div className="flex w-full max-w-lg items-center justify-center rounded-full">
      <input
        type="text"
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        placeholder="Search..."
        className="w-full rounded-full px-4 py-2 focus:outline-none shadow-xl"
      />
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        onClick={submit}
        className="ml-2 rounded-full bg-rose-600 px-4 py-2 text-white transition hover:scale-110"
      >
        <svg
          fill="#ffffff"
          height="24px"
          width="24px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 488.4 488.4"
          xmlSpace="preserve"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {' '}
            <g>
              {' '}
              <g>
                {' '}
                <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z" />{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </svg>
      </button>
    </div>
  );
};

export { SearchBar };
