/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useRef } from 'react';

import { useAppSelector } from '@/session/store';

interface Content {
  id: number;
  name_en: string;
  link_url: string;
  room_icon_url: string;
}

const RoomSelect = () => {
  const content: Content[] = useAppSelector(
    (state) => state.mySession.roomRecommend?.data,
  );
  useEffect(() => {}, [content]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const roomList = content?.map((object) => {
    return (
      <a
        href={object.link_url}
        key={object.id}
        className="mx-2 block w-24 flex-none rounded-lg border border-gray-200 bg-white p-2 shadow transition ease-in-out hover:-translate-y-1 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="bg-blue-900">
          <img src={object.room_icon_url} className="w-24" alt="icon" />
        </div>
        <p className="text-center text-xs font-semibold text-rose-700 dark:text-gray-400">
          {object.name_en}
        </p>
      </a>
    );
  });

  return (
    <div className="relative mb-4 flex flex-col">
      <div className="text-lg font-semibold text-rose-700 dark:text-gray-400">
        Choose room
      </div>
      <button
        onClick={scrollLeft}
        aria-label="Save"
        className="absolute left-0 top-[50px] z-10 rounded-full bg-gray-200 p-2 transition hover:scale-110"
      >
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path
              d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
              fill="#000000"
            />
          </g>
        </svg>
      </button>

      <div
        ref={scrollContainerRef}
        className="no-scrollbar mx-16 flex h-32 flex-row overflow-x-auto"
      >
        {roomList}
      </div>

      <button
        onClick={scrollRight}
        aria-label="Save"
        className="absolute right-0 top-[50px] z-10 rounded-full bg-gray-200 p-2 transition hover:scale-110"
      >
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 1024 1024"
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path
              d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
              fill="#000000"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export { RoomSelect };
