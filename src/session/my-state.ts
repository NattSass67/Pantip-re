/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import {
  getAnnounce,
  getClub,
  getFilterByTag,
  getHighlight,
  getPantipHitz,
  getPantipPick,
  getRoomRecommend,
  getSidebarContent,
  getSuggestTopicBehavior,
  getSuggestTopicPopular,
  getTagHit,
} from '@/services/request';

import {
  fetchAnnounceContent,
  fetchClubContent,
  fetchHighlightContent,
  fetchHitzPantip,
  fetchPickPantip,
  fetchRoomRecommend,
  fetchSidebarContent,
  fetchStart,
  fetchSuccess,
  fetchSuggestTopicBehavior,
  fetchSuggestTopicPopular,
  fetchTaghitContent,
  setTagChoosen,
} from './sessionReducers';

export const fetchContent = () => {
  return async (dispatch: any) => {
    dispatch(fetchStart()); // Dispatch loginStart action to set loading state
    try {
      const room = await getRoomRecommend();
      const sidebar = await getSidebarContent();
      const highlight = await getHighlight();
      const announce = await getAnnounce();
      const club = await getClub();
      const taghit = await getTagHit();
      const suggestBehavior = await getSuggestTopicBehavior();
      const suggestPopular = await getSuggestTopicPopular();
      const pick = await getPantipPick();
      const hitz = await getPantipHitz();
      if (
        sidebar === null ||
        highlight === null ||
        announce === null ||
        club === null ||
        taghit === null ||
        suggestBehavior === null ||
        suggestPopular === null ||
        pick === null ||
        hitz === null
      ) {
        throw new Error('One or more required variables are null.');
      } else {
        dispatch(fetchRoomRecommend(room));
        dispatch(fetchSidebarContent(sidebar));
        dispatch(fetchHighlightContent(pick.data));
        dispatch(fetchAnnounceContent(announce));
        dispatch(fetchClubContent(club));
        dispatch(fetchTaghitContent(taghit));
        dispatch(fetchSuggestTopicBehavior(suggestBehavior));
        dispatch(fetchSuggestTopicPopular(suggestPopular));
        dispatch(fetchPickPantip(pick));
        dispatch(fetchHitzPantip(hitz));
        setTimeout(async () => {
          dispatch(fetchSuccess());
          // Set success after 2000 milliseconds
        }, 2000);
        dispatch(setTagChoosen(''));
      }
    } catch (error) {
      dispatch(fetchSuccess()); // Dispatch loginFailure action if login encounters an error
    }
  };
};

export const getDataTagChoosen = (tag: string) => {
  return async (dispatch: any) => {
    dispatch(fetchStart()); // Dispatch loginStart action to set loading state
    try {
      if (tag === '') {
        dispatch(fetchSuccess());
        return;
      }
      const res = await getFilterByTag(tag);

      dispatch(fetchHighlightContent(res.data));
      setTimeout(async () => {
        dispatch(fetchSuccess());
        // Set success after 2000 milliseconds
      }, 2000);
    } catch (error) {
      dispatch(fetchSuccess()); // Dispatch loginFailure action if login encounters an error
    }
  };
};
