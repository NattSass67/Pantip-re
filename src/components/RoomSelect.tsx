/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useRef } from 'react';

import { getDataRoomChoosen } from '@/session/my-state';
import { setRoomChoosen } from '@/session/sessionReducers';
import { useAppDispatch, useAppSelector } from '@/session/store';

interface Content {
  id: number;
  slug: string;
  name_en: string;
  link_url: string;
  room_icon_url: string;
}

const RoomSelect = () => {
  const content: Content[] = useAppSelector(
    (state) => state.mySession.roomRecommend?.data,
  );
  useEffect(() => {}, [content]);

  const dispatch = useAppDispatch();
  const choosedRoom = useAppSelector((state) => state.mySession.roomChoosen);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const onRoomClick = (name: string) => {
    dispatch(getDataRoomChoosen(name));
    dispatch(setRoomChoosen(name));
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -80, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 80, behavior: 'smooth' });
    }
  };

  const roomList = content?.map((object) => {
    return (
      <div
        onClick={() => {
          onRoomClick(object.slug);
        }}
        aria-hidden="true"
        key={object.id}
        className={`flex w-20 flex-none flex-col items-center justify-center transition ease-in-out hover:-translate-y-1 ${choosedRoom === object.slug ? 'border-b-2 border-zinc-800 opacity-100' : 'opacity-90 hover:opacity-100'}`}
      >
        <div className="w-10 rounded-md">
          <img src={object.room_icon_url} className="w-10" alt="icon" />
        </div>
        <p className="text-center text-[10px] font-semibold">
          {object.name_en}
        </p>
      </div>
    );
  });

  return (
    <div className="relative mt-4 flex flex-col">
      <div className="absolute left-6 top-0 z-10 h-20 w-12 bg-gradient-to-r from-white">
        {' '}
      </div>
      <button
        onClick={scrollLeft}
        aria-label="Save"
        className="absolute left-0 top-[20px] z-10 rounded-full bg-gray-200 p-2 transition hover:scale-110"
      >
        <svg
          width="16px"
          height="16px"
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
        className="no-scrollbar mx-8 flex h-20 flex-row overflow-x-auto "
      >
        {roomList}
      </div>

      <div className="absolute right-6 top-0 z-10 h-20 w-12 bg-gradient-to-l from-white">
        {' '}
      </div>
      <button
        onClick={scrollRight}
        aria-label="Save"
        className="absolute right-0 top-[20px] z-10 rounded-full bg-gray-200 p-2 transition hover:scale-110"
      >
        <svg
          width="16px"
          height="16px"
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
