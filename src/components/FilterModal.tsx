/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import { useAppSelector } from '@/session/store';

interface Content {
  follow_count: number;
  topic_count: number;
  pageview: number;
  name: string;
}

const FilterModal = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const content: Content[] = useAppSelector(
    (state) => state.mySession.taghitContent?.data,
  );

  const checkTagList = content?.map((object, index) => {
    return (
      <div className="flex items-center" key={index}>
        <input
          type="checkbox"
          value=""
          className="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
        <p className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
           {object.name}
        </p>
      </div>
    );
  });

  return (
    <>
      <div
        onClick={() => {
          setClicked(true);
        }}
        aria-hidden="true"
        className="flex w-24 flex-row items-center justify-center rounded-lg border border-gray-400 p-2 transition hover:scale-105"
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {' '}
            <title>Filter</title>{' '}
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {' '}
              <g id="Filter">
                {' '}
                <rect
                  id="Rectangle"
                  fill-rule="nonzero"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  {' '}
                </rect>{' '}
                <line
                  x1="4"
                  y1="5"
                  x2="16"
                  y2="5"
                  id="Path"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  {' '}
                </line>{' '}
                <line
                  x1="4"
                  y1="12"
                  x2="10"
                  y2="12"
                  id="Path"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  {' '}
                </line>{' '}
                <line
                  x1="14"
                  y1="12"
                  x2="20"
                  y2="12"
                  id="Path"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  {' '}
                </line>{' '}
                <line
                  x1="8"
                  y1="19"
                  x2="20"
                  y2="19"
                  id="Path"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  {' '}
                </line>{' '}
                <circle
                  id="Oval"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                  cx="18"
                  cy="5"
                  r="2"
                >
                  {' '}
                </circle>{' '}
                <circle
                  id="Oval"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                  cx="12"
                  cy="12"
                  r="2"
                >
                  {' '}
                </circle>{' '}
                <circle
                  id="Oval"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                  cx="6"
                  cy="19"
                  r="2"
                >
                  {' '}
                </circle>{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </svg>
        <div className="text-sm">Filters</div>
      </div>
      <div onClick={() => setClicked(false)} aria-hidden="true">
        <Transition
          show={clicked}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
            <div className="modal mb-16 h-[500px] max-h-full w-full max-w-lg overflow-hidden rounded-2xl bg-white px-4 shadow-lg">
              {checkTagList}
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};

export { FilterModal };
