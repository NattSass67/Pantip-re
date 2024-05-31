/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Transition, TransitionChild } from '@headlessui/react';
import { useState } from 'react';

import { getDataRoomChoosen } from '@/session/my-state';
import { setTagChoosen } from '@/session/sessionReducers';
import { useAppDispatch, useAppSelector } from '@/session/store';

import { CustomCheckBox } from './CustomCheckBox';

interface Content {
  follow_count: number;
  topic_count: number;
  pageview: number;
  name: string;
}

const FilterModal = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [tag, setTag] = useState<string>('');
  const content: Content[] = useAppSelector(
    (state) => state.mySession.taghitContent?.data,
  );

  const dispatch = useAppDispatch();

  const onClose = () => {
    setClicked(false);
    // dispatch fetch
    dispatch(getDataRoomChoosen(tag));
  };

  const checkTagList = content?.map((object, index) => {
    return <CustomCheckBox key={index} setTag={setTag} text={object.name} />;
  });

  return (
    <>
      <div
        onClick={() => {
          setClicked(true);
        }}
        aria-hidden="true"
        className="flex h-full flex-row items-center justify-center gap-x-2 rounded-full bg-white px-4 py-2 font-semibold shadow transition hover:scale-105 hover:border hover:border-gray-200"
      >
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {' '}
            <title>Filter</title>{' '}
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              {' '}
              <g id="Filter">
                {' '}
                <rect
                  id="Rectangle"
                  fillRule="nonzero"
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
                  strokeWidth="2"
                  strokeLinecap="round"
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
                  strokeWidth="2"
                  strokeLinecap="round"
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
                  strokeWidth="2"
                  strokeLinecap="round"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  {' '}
                </line>{' '}
                <circle
                  id="Oval"
                  stroke="#0C0310"
                  strokeWidth="2"
                  strokeLinecap="round"
                  cx="18"
                  cy="5"
                  r="2"
                >
                  {' '}
                </circle>{' '}
                <circle
                  id="Oval"
                  stroke="#0C0310"
                  strokeWidth="2"
                  strokeLinecap="round"
                  cx="12"
                  cy="12"
                  r="2"
                >
                  {' '}
                </circle>{' '}
                <circle
                  id="Oval"
                  stroke="#0C0310"
                  strokeWidth="2"
                  strokeLinecap="round"
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
        <div className="hidden text-sm sm:flex">Filters</div>
      </div>
      <div onClick={() => {}} aria-hidden="true">
        <Transition
          show={clicked}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
            <TransitionChild
              enter="transition ease-in-out duration-300"
              enterFrom="translate-y-4"
              enterTo="translate-y-0"
              leave="transition ease-in-out duration-300"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-4"
            >
              <div className="no-scrollbar mb-16 flex h-[500px] max-h-full w-full max-w-md flex-col overflow-hidden overflow-y-auto rounded-2xl bg-white p-8 shadow-lg">
                <div className="flex flex-row justify-between text-xl font-semibold">
                  <div className="mx-2">Tag filter</div>
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      onClose();
                    }}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <g id="Menu / Close_SM">
                        {' '}
                        <path
                          id="Vector"
                          d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />{' '}
                      </g>{' '}
                    </g>
                  </svg>
                </div>
                <br />
                <hr />
                <div className="mx-2 my-8 flex flex-col">{checkTagList}</div>
                <div>
                  <hr />
                  <div
                    className="my-2 flex w-24 flex-col items-center justify-center rounded-md font-semibold hover:bg-gray-200"
                    onClick={() => {
                      dispatch(setTagChoosen(''));
                    }}
                    aria-hidden="true"
                  >
                    Clear filter
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
        </Transition>
      </div>
    </>
  );
};

export { FilterModal };
