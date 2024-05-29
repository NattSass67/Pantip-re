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
        <title>JackGT Pro</title>
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

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
