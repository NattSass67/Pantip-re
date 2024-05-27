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
    <div className="m-4 flex w-full max-w-lg items-center justify-center overflow-hidden rounded-full border border-gray-300">
      <input
        type="text"
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        placeholder="Search..."
        className="w-full px-4 py-2 focus:outline-none"
      />
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        onClick={submit}
        className="ml-2 rounded-full bg-rose-600 px-4 py-2 text-white"
      >
        Search
      </button>
    </div>
  );
};

export { SearchBar };
