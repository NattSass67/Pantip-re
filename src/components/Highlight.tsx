/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

/* eslint-disable jsx-a11y/label-has-associated-control */

import { useAppSelector } from '@/session/store';

interface Content {
  name: string;
  post_url: string;
  image_url: string[];
}

const Highlight = () => {
  const content: Content[] = useAppSelector(
    (state) => state.mySession.highlightContent,
  );

  const highlightList = content?.map((object, index) => {
    return (
      <a
        href={object.post_url}
        key={index}
        className="m-4 max-w-64 flex-none overflow-hidden rounded-lg border border-gray-200 bg-white shadow transition ease-in-out hover:-translate-y-1 hover:scale-105 dark:border-gray-700 dark:bg-gray-800"
      >
        <img src={object.image_url[1]} className="w-full" alt="icon" />

        <p className="p-2 text-center text-sm font-semibold text-rose-700 dark:text-gray-400">
          {object.name}
        </p>
      </a>
    );
  });

  return (
    <div className="flex flex-col">
      <div className="mx-2 flex flex-row flex-wrap items-center justify-center">
        {highlightList}
      </div>
    </div>
  );
};

export { Highlight };
