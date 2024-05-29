'use client';

import '@/styles/global.css';

import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/session/store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <title>Pantip re</title>
        <meta name="description" content="Your website description" />
      </head>
      <html lang="en">
        <body className={inter.className}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <main className="">{children}</main>
            </PersistGate>
          </Provider>
        </body>
      </html>
    </>
  );
}
