/* eslint-disable @next/next/no-img-element */

'use client';

import { useEffect } from 'react';

import { Highlight } from '@/components/Highlight';
import { PantipHitz } from '@/components/PantipHitz';
import { PantipPick } from '@/components/PantipPick';
import { RoomSelect } from '@/components/RoomSelect';
import { SearchBar } from '@/components/SearchBar';
import { TagHit } from '@/components/Taghit';
import { fetchContent } from '@/session/my-state';
import { useAppDispatch } from '@/session/store';

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchContent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-8 flex flex-col">
      <div className="fixed inset-x-0 top-0 z-10 bg-rose-50 px-8">
        <div className="flex items-center justify-center p-4">
          <img
            src="https://ptcdn.info/pantip/pantip-colorblack-logo.png"
            className="w-48"
            alt="Logo"
          />
        </div>
        <div className="flex w-full items-center justify-center">
          <SearchBar />
        </div>
        <RoomSelect />
      </div>

      {/* Spacer to push content below fixed header */}
      <div className="h-80" />
      <Highlight />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
          <PantipPick />
          <PantipHitz />
        </div>
        <div className="hidden md:col-span-1 md:flex">
          <TagHit />
        </div>
      </div>
    </div>
  );
}
