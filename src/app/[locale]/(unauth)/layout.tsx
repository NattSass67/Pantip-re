'use client';

import '@/styles/global.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/session/store';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="">{props.children}</div>
      </PersistGate>
    </Provider>
  );
}
