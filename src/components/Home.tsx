/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable @next/next/no-img-element */

'use client';

import { useEffect } from 'react';

import { Highlight } from '@/components/Highlight';
import { RoomSelect } from '@/components/RoomSelect';
import { SearchBar } from '@/components/SearchBar';
import { fetchContent } from '@/session/my-state';
import { setReachTop } from '@/session/sessionReducers';
import { useAppDispatch } from '@/session/store';

import { Dropdown } from './DropdownProfile';

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchContent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onscroll = () => {
      if (window.scrollY == 0) {
        dispatch(setReachTop(true));
      } else {
        dispatch(setReachTop(false));
      }
    };
    window.addEventListener('scroll', onscroll);
    return () => {
      window.removeEventListener('scroll', onscroll);
    };
  }, []);

  return (
    <div className="mx-8 flex flex-col">
      <div className="fixed inset-x-0 top-0 z-10 flex flex-col border border-gray-200 bg-white p-4 shadow">
        <div className="relative flex w-full justify-between gap-x-2">
          <div className="flex gap-x-2">
            <img
              src="pantip.png"
              className="h-14 min-w-14 flex-none rounded-full"
              alt="Logo"
            />
            <div className="hidden justify-center md:block">
              <div className="text-3xl font-extrabold">Pantip</div>
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                Learn Share&Fun
              </div>
            </div>
          </div>

          <SearchBar />
          <div className="flex flex-row gap-x-3">
            <Dropdown />
          </div>
        </div>
        <RoomSelect />
      </div>

      {/* Spacer to push content below fixed header */}
      <div id="transition-div" className="h-48" />

      <Highlight />
    </div>
  );
}
