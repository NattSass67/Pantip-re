/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';

import { useAppSelector } from '@/session/store';

interface Content {
  follow_count: number;
  topic_count: number;
  pageview: number;
  name: string;
}

const TagHit = () => {
  const content: Content[] = useAppSelector(
    (state) => state.mySession.taghitContent?.data,
  );
  useEffect(() => {
    // console.log('TagHitz...', content);
  }, [content]);

  const hitList = content?.map((object, index) => {
    return (
      <a
        href={`https://pantip.com/tag/${object.name}`}
        key={index}
        className="m-2 flex h-24 w-full flex-none flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow transition ease-in-out hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      >
        <p className="p-2 text-sm font-semibold text-rose-700 dark:text-gray-400">
          {object.name}
        </p>
        <div className="ml-4 flex flex-row text-xs">
          <svg
            fill="#000000"
            height="16px"
            width="16px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 328 328"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g id="XMLID_486_">
                {' '}
                <path
                  id="XMLID_487_"
                  d="M115,126.75c34.601,0,62.751-28.149,62.751-62.749C177.751,29.4,149.601,1.25,115,1.25 c-34.601,0-62.75,28.15-62.75,62.751C52.25,98.601,80.399,126.75,115,126.75z M115,31.25c18.059,0,32.751,14.692,32.751,32.751 c0,18.058-14.692,32.749-32.751,32.749c-18.059,0-32.75-14.691-32.75-32.749C82.25,45.942,96.941,31.25,115,31.25z"
                />{' '}
                <path
                  id="XMLID_490_"
                  d="M228.607,181.144c-5.858-5.858-15.355-5.859-21.213-0.001c-5.858,5.857-5.858,15.355-0.001,21.213 l19.393,19.395l-19.393,19.392c-5.858,5.857-5.858,15.355-0.001,21.213c2.929,2.929,6.768,4.394,10.607,4.394 c3.838,0,7.678-1.464,10.607-4.393l30-29.998c2.813-2.813,4.393-6.628,4.393-10.606c0-3.978-1.58-7.793-4.393-10.607 L228.607,181.144z"
                />{' '}
                <path
                  id="XMLID_491_"
                  d="M223,116.75c-34.488,0-65.144,16.716-84.297,42.47c-7.763-1.628-15.695-2.47-23.703-2.47 c-63.411,0-115,51.589-115,115c0,8.284,6.716,15,15,15h125.596c19.247,24.348,49.031,40,82.404,40c57.897,0,105-47.103,105-105 S280.897,116.75,223,116.75z M31.325,256.75c7.106-39.739,41.923-70,83.675-70c2.965,0,5.914,0.165,8.841,0.467 c-3.779,10.82-5.841,22.44-5.841,34.533c0,12.268,2.122,24.047,6.006,35H31.325z M223,296.75c-41.355,0-75-33.645-75-75 s33.645-75,75-75s75,33.645,75,75S264.355,296.75,223,296.75z"
                />{' '}
              </g>{' '}
            </g>
          </svg>
          <div className="ml-2 mr-4">{object.follow_count} followers</div>
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 512 512"
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
              <title>topic</title>{' '}
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                {' '}
                <g
                  id="icon"
                  fill="#000000"
                  transform="translate(21.333333, 85.333333)"
                >
                  {' '}
                  <path
                    d="M448,1.42108547e-14 L448,341.333333 L106.666667,341.333333 L3.55271368e-15,170.666667 L106.666667,1.42108547e-14 L448,1.42108547e-14 Z M405.333333,42.6666667 L130.282667,42.6666667 L50.2826667,170.666667 L130.282667,298.666667 L405.333333,298.666667 L405.333333,42.6666667 Z M254.919831,64 L245.779942,124.371677 L279.680623,124.371677 L288.820513,64 L321.391756,64 L312.251866,124.371677 L341.333333,124.371677 L341.333333,151.32063 L308.097371,151.32063 L302.114898,190.91602 L330.864005,190.91602 L330.864005,217.864973 L297.960402,217.864973 L288.986693,277.333333 L256.41545,277.333333 L265.389159,217.864973 L231.488478,217.864973 L222.514768,277.333333 L189.943525,277.333333 L198.917235,217.864973 L170.666667,217.864973 L170.666667,190.91602 L203.07173,190.91602 L209.054203,151.32063 L181.135995,151.32063 L181.135995,124.371677 L213.208698,124.371677 L222.348588,64 L254.919831,64 Z M277.333333,149.333333 L241.066667,149.333333 L234.666667,192 L270.933333,192 L277.333333,149.333333 Z"
                    id="Combined-Shape"
                  >
                    {' '}
                  </path>{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
          <div className="ml-2 mr-4">{object.topic_count} topics</div>
        </div>
      </a>
    );
  });

  return (
    <div className="mt-4 flex w-full flex-col bg-rose-100 p-4">
      <div className="sticky top-80">
        {' '}
        {/* fixed item at distance 80 from top of the window need to know more then use your observation */}
        <div className="flex gap-x-4 text-lg font-semibold text-rose-700">
          Tag hit
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.144"
            />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{' '}
            </g>
          </svg>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          {hitList}
        </div>
      </div>
    </div>
  );
};

export { TagHit };
