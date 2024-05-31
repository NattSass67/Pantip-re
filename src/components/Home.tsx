/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable @next/next/no-img-element */

'use client';

import { useEffect } from 'react';

import { FilterModal } from '@/components/FilterModal';
import { Highlight } from '@/components/Highlight';
import { RoomSelect } from '@/components/RoomSelect';
import { SearchBar } from '@/components/SearchBar';
import { fetchContent } from '@/session/my-state';
import { setReachTop } from '@/session/sessionReducers';
import { useAppDispatch, useAppSelector } from '@/session/store';

import { Dropdown } from './DropdownProfile';

export default function Home() {
  const dispatch = useAppDispatch();
  const reachTop = useAppSelector((state) => state.mySession.reachTop);
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
        <div className="flex w-full flex-row items-center justify-center bg-white p-4 md:hidden">
          <img
            src="https://ptcdn.info/pantip/pantip-colorblack-logo.png"
            className="w-48"
            alt="Logo"
          />
        </div>
        <div className="relative flex w-full items-center justify-between gap-x-2">
          <img
            src="https://ptcdn.info/pantip/pantip-colorblack-logo.png"
            className="hidden w-48 md:flex"
            alt="Logo"
          />
          <SearchBar />
          <div className="flex flex-row gap-x-3">
            <FilterModal />
            <Dropdown />
          </div>
        </div>
        <RoomSelect />
      </div>

      {/* Spacer to push content below fixed header */}
      <div id="transition-div" className="h-64 lg:h-48" />
      <Highlight />
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* <div className="col-span-1 md:col-span-2">
          <PantipPick />
          <PantipHitz />
        </div>
        <div className="hidden md:col-span-1 md:flex">
          <TagHit />
        </div> */}
      </div>
      <div> </div>
    </div>
  );
}
